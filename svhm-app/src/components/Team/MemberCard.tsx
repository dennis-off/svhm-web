import { components } from "@/api/strapi";
import { strapiImage } from "@/api/strapiImage";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export function MemberCard({
  member,
}: {
  member: components["schemas"]["Member"];
}) {
  return (
    <Card className="relative mt-8 flex max-w-sm flex-col items-center justify-center bg-muted/50">
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
    </Card>
  );
}
