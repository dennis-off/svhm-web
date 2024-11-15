import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { getMembers, getTeamPage } from "@/api/queries";
import { components } from "@/api/strapi";
import { Cta } from "@/components/dynamic-zone/Cta";
import { GeneralError } from "@/components/ErrorComponents";
import { StrapiSEO } from "@/components/StrapiSeo";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { strapiImage } from "@/lib/strapi/strapiImage";
import { extractWords } from "@/lib/utils";

export const Route = createFileRoute("/team")({
  component: Events,
});

function Events() {
  const {
    isError: membersIsError,
    isPending: membersIsPending,
    data: members,
  } = useQuery({
    queryKey: ["getMembers"],
    queryFn: () => getMembers(),
  });

  const {
    isError: pageIsError,
    isPending: pageIsPending,
    data: teamPage,
  } = useQuery({
    queryKey: ["getTeamPage"],
    queryFn: () => getTeamPage(),
  });

  if (membersIsError || pageIsError) {
    return <GeneralError />;
  }

  if (membersIsPending || pageIsPending) {
    return (
      <div className="min-h-screen">
        <section className="container py-8 lg:py-32">
          <Spinner size="large" />
        </section>
      </div>
    );
  }

  const { firstWord, middleWords, lastWord } = extractWords(
    teamPage?.section?.heading
  );

  const board = members.filter((member) => member.role === "board");
  const council = members.filter((member) => member.role === "council");
  const official = members.filter((member) => member.role === "member");

  return (
    <div className="min-h-screen">
      <section className="container py-8 lg:py-32">
        <h2 className="text-center text-3xl font-bold md:text-4xl lg:text-start">
          <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] bg-clip-text text-transparent">
            {firstWord}{" "}
          </span>
          {middleWords.join(" ")}{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
            {lastWord}
          </span>
        </h2>

        <div className="flex flex-col items-center justify-center gap-12">
          <p className="mb-8 mt-4 text-center text-xl text-muted-foreground lg:text-start">
            {teamPage?.section.sub_heading}
          </p>

          <div className="mx-auto w-full">
            <img
              src={strapiImage(teamPage?.teamImage.url)}
              height="800"
              width="800"
              className="aspect-square h-40 w-full rounded-3xl object-cover [mask-image:radial-gradient(circle,white,transparent)] md:h-96"
              alt="Team"
            />
          </div>

          <h2 className="text-center text-3xl font-bold lg:text-4xl">
            Unser{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
              Vorstand
            </span>
          </h2>

          <div className="flex flex-col items-center">
            <MemberGroup members={board} />
          </div>

          <h2 className="text-center text-3xl font-bold lg:text-4xl">
            Unser{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
              Beirat
            </span>
          </h2>

          <div className="flex flex-col items-center">
            <MemberGroup members={council} />
          </div>

          <h2 className="text-center text-3xl font-bold lg:text-4xl">
            Unsere{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
              Amtsträger*innen
            </span>
          </h2>

          <div className="flex flex-col items-center">
            <MemberGroup members={official} />
          </div>
        </div>
      </section>

      <Cta cta={teamPage?.cta} />

      <StrapiSEO seo={teamPage?.seo} />
    </div>
  );
}
export function MemberGroup({
  members,
}: {
  members: components["schemas"]["Member"][];
}) {
  return (
    <div className="mx-auto grid grid-cols-[auto] gap-4 gap-y-10 p-6 md:grid-cols-[auto,auto] lg:grid-cols-[auto,auto,auto,auto]">
      {members?.map((member) => (
        <Card
          key={member.documentId}
          className="relative mt-8 flex max-w-sm flex-col items-center justify-center bg-muted/50"
        >
          <CardHeader className="mt-8 flex items-center justify-center pb-2">
            <img
              src={strapiImage(member.avatar?.url)}
              alt={`${member.firstname} ${member.lastname}`}
              className="absolute -top-12 aspect-square h-24 w-24 rounded-full object-cover"
            />
            <CardTitle className="text-center">{`${member.firstname} ${member.lastname}`}</CardTitle>
            <CardDescription className="text-primary">
              {member.displayRole}
            </CardDescription>
          </CardHeader>

          <CardContent className="pb-2 text-center">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </CardContent>

          {/*<CardFooter>
                  {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                    <div key={name}>
                      <a
                        rel="noreferrer noopener"
                        href={url}
                        target="_blank"
                        className={buttonVariants({
                          variant: "ghost",
                          size: "sm",
                        })}
                      >
                        <span className="sr-only">{name} icon</span>
                        {socialIcon(name)}
                      </a>
                    </div>
                  ))}
                </CardFooter>*/}
        </Card>
      ))}
    </div>
  );
}
