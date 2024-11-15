import ReactMarkdown from "react-markdown";

export default function Markdown({ markdown }: { markdown: string }) {
  return (
    <section className="flex flex-col items-center">
      <ReactMarkdown
        className="flex max-w-3xl flex-col border-l border-r p-2 lg:p-12"
        components={{
          // add a css for p tags
          p({ children }) {
            return <p className="my-2 leading-relaxed">{children}</p>;
          },
          h1({ children }) {
            return (
              <h1 className="mt-4 scroll-m-20 pb-0 text-4xl font-extrabold tracking-tight lg:text-5xl">
                {children}
              </h1>
            );
          },
          h2({ children }) {
            return (
              <h2 className="mt-4 scroll-m-20 pb-0 text-3xl font-semibold tracking-tight first:mt-0">
                {children}
              </h2>
            );
          },
          h3({ children }) {
            return (
              <h3 className="mt-4 scroll-m-20 pb-0 text-2xl font-semibold tracking-tight">
                {children}
              </h3>
            );
          },
          h4({ children }) {
            return (
              <h4 className="mt-2 scroll-m-20 pb-0 text-xl font-semibold tracking-tight">
                {children}
              </h4>
            );
          },
          h5({ children }) {
            return (
              <h3 className="text-l mt-2 scroll-m-20 pb-0 font-semibold tracking-tight">
                {children}
              </h3>
            );
          },
          h6({ children }) {
            return (
              <h4 className="mt-2 scroll-m-20 pb-0 text-base font-normal tracking-tight">
                {children}
              </h4>
            );
          },
          ul({ children }) {
            return (
              <ul className="ml-4 list-disc px-10 [&>li]:mt-0">{children}</ul>
            );
          },
          pre({ children }) {
            return <pre className="my-2 leading-relaxed">{children}</pre>;
          },
          a({ children }) {
            return (
              <a className="cursor-pointer text-blue-500 underline hover:text-blue-700">
                {children}
              </a>
            );
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </section>
  );
}
