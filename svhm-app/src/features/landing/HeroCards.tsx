import { Check } from "lucide-react";
import { BiDonateHeart } from "react-icons/bi";
import { LuGlobe, LuMail } from "react-icons/lu";
import schoolYard from "@/assets/school-yard_01.png";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";

export const HeroCards = () => {
  return (
    <div className="relative hidden h-[500px] w-[700px] flex-row flex-wrap gap-8 lg:flex">
      {/* Testimonial */}
      <Card className="absolute -top-[15px] w-[340px] shadow-black/10 drop-shadow-xl dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage alt="" src="https://github.com/shadcn.png" />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Dennis Off</CardTitle>
            <CardDescription>dennis@off.me</CardDescription>
          </div>
        </CardHeader>

        <CardContent>Der Schulverein ist wirklich toll!</CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-4 flex w-80 flex-col items-center justify-center shadow-black/10 drop-shadow-xl dark:shadow-white/10">
        <CardHeader className="mt-8 flex items-center justify-center pb-2">
          <img
            src={schoolYard}
            alt="user avatar"
            className="absolute -top-12 aspect-square h-24 w-24 rounded-full object-cover grayscale-[0%]"
          />
          <CardTitle className="text-center">Unsere Schule</CardTitle>
          <CardDescription className="font-normal text-primary">
            Grundschule Haseldorfer Marsch
          </CardDescription>
        </CardHeader>

        <CardContent className="pb-2 text-center">
          <p>
            Du findest alle Termine und Ansprechpartner auf der Homepage unserer
            Schule!
          </p>
        </CardContent>

        <CardFooter>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/leoMirandaa"
              target="_blank"
              className={buttonVariants({
                variant: "muted",
                size: "sm",
              })}
            >
              <span className="sr-only">E-Mail</span>
              <LuMail className="h-5 w-5" />
            </a>

            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/leopoldo-miranda/"
              target="_blank"
              className={buttonVariants({
                variant: "muted",
                size: "sm",
              })}
            >
              <span className="sr-only">Website</span>
              <LuGlobe size="20" />
            </a>
          </div>
        </CardFooter>
      </Card>

      {/* Pricing */}
      <Card className="absolute left-[50px] top-[150px] w-72 shadow-black/10 drop-shadow-xl dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="item-center flex justify-between">
            T-Shirt
            <Badge variant="secondary" className="text-sm text-primary">
              Beliebt
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">12.00 €</span>
          </div>

          <CardDescription>
            Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full">Start Free Trial</Button>
        </CardContent>

        <hr className="m-auto mb-4 w-4/5" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["4 Team member", "4 GB Storage", "Upto 6 pages"].map(
              (benefit: string) => (
                <span key={benefit} className="flex">
                  <Check className="text-green-500" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute -right-[20px] bottom-[35px] w-[360px] shadow-black/10 drop-shadow-xl dark:shadow-white/10">
        <CardHeader className="flex items-start justify-start gap-4 space-y-1 md:flex-row">
          <div className="mt-1 rounded-2xl bg-primary/20 p-1">
            <BiDonateHeart className="h-14 w-14" />
          </div>
          <div>
            <CardTitle>Jetzt spenden</CardTitle>
            <CardDescription className="text-md mt-2">
              <div className="flex flex-col items-start text-sm">
                <span>Schulverein Haseldorfer Marsch</span>
                <span>IBAN: DE69 2216 3114 0000 2117 53</span>
                <span>BIC CODE: GENODEF1HTE</span>
              </div>
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
