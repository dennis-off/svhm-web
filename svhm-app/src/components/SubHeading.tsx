export function SubHeading({
  sub_heading,
}: {
  sub_heading: string | undefined;
}) {
  if (!sub_heading) return null;

  return (
    <p className="mb-8 mt-4 text-center text-xl text-muted-foreground lg:text-start">
      {sub_heading}
    </p>
  );
}
