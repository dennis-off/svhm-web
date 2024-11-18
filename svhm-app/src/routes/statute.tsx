import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { getStatutePage } from "@/api/queries";
import { GeneralError, IsLoading } from "@/components/ErrorComponents";
import Markdown from "@/components/markdown";

export const Route = createFileRoute("/statute")({
  component: Statute,
});

function Statute() {
  const { isError, isPending, data } = useQuery({
    queryKey: ["getStatutePage"],
    queryFn: () => getStatutePage(),
  });

  if (isError) {
    return <GeneralError />;
  }

  if (isPending) {
    return <IsLoading />;
  }

  const statute = data;

  if (!statute) {
    return <GeneralError />;
  }

  return (
    <section className="container">
      <Markdown markdown={statute.content} />
    </section>
  );
}
