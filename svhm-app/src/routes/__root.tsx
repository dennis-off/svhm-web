import React, { Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  createRootRoute,
  Outlet,
  ScrollRestoration,
} from "@tanstack/react-router";
import { getGlobal } from "@/api/queries";
import {
  GeneralError,
  IsLoading,
  NotFoundComponent,
} from "@/components/ErrorComponents";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import StickyFooter from "@/components/sticky-footer/sticky-footer";
import { StrapiSEO } from "@/components/StrapiSeo";
import { ThemeProvider } from "@/components/theme-provider.tsx";

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        }))
      );

export const Route = createRootRoute({
  component: () => {
    const {
      isError,
      isPending,
      data: global,
    } = useQuery({
      queryKey: ["getGlobal"],
      queryFn: () => getGlobal(),
    });

    if (isError) {
      return <GeneralError />;
    }

    if (isPending) {
      return <IsLoading />;
    }

    return (
      <>
        <ThemeProvider>
          <Navbar data={global?.navbar} />
          <ScrollRestoration />
          <Outlet />
          <StickyFooter>
            <Footer data={global?.footer} />
          </StickyFooter>
          <StrapiSEO seo={global?.seo} />
          {process.env.NODE_ENV === "production" ? (
            <Suspense>
              <TanStackRouterDevtools />
            </Suspense>
          ) : null}
        </ThemeProvider>
      </>
    );
  },
  notFoundComponent: () => {
    return <NotFoundComponent />;
  },
});
