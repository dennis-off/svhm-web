import { Link } from "@tanstack/react-router";
import { components } from "@/api/strapi";
import { MemberCard } from "@/features/Team/MemberCard";

export function Team({
  members,
}: {
  members: components["schemas"]["Member"][];
}) {
  return (
    <section id="team" className="container py-24 sm:py-32">
      <h2 className="text-3xl font-bold md:text-4xl">
        <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
          Unser engagiertes{" "}
        </span>
        Team
      </h2>

      <p className="mb-10 mt-4 text-xl text-muted-foreground">
        Hier ist eine Auswahl unserer Funktionär*innen
      </p>

      <div className="grid gap-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
        {members?.map((member) => (
          <MemberCard key={member.documentId} member={member} />
        ))}
      </div>

      <h3 className="mt-4 font-medium">
        Du möchtest unser gesamtes Team kennenlernen{" "}
        <Link
          rel="noreferrer noopener"
          to="/team"
          target="_self"
          className="border-primary text-primary transition-all hover:border-b-2"
        >
          Hier findest du sie alle
        </Link>
      </h3>
    </section>
  );
}
