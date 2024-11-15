import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import Markdown from "@/components/markdown";
import fetchContentType from "@/lib/strapi/fetchContentType";

export const Route = createFileRoute("/impressum")({
  component: Impressum,
});

function Impressum() {
  const { status, data, error } = useQuery({
    queryKey: [""],
    queryFn: () => fetchContentType("impressum", "", true),
  });

  if (status === "pending") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }

  return (
    <section className="container">
      <Markdown markdown={data.content} />
    </section>
  );
}
