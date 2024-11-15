import { useState } from "react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toggle";
import { buttonVariants } from "./ui/button";

interface NavbarItemProps {
  URL: string;
  text: string;
  target: string;
}

export const Navbar = ({ data }: { data: any }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b-[1px] bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container flex h-20 w-screen justify-between px-4">
          <NavigationMenuItem className="flex font-bold">
            <Link to="/" className="ml-2 flex text-xl font-bold">
              <div className="flex flex-col items-start">
                <span className="text-xl font-bold">Schulverein</span>
                <span className="-my-2 text-xl font-bold">Haseldorfer</span>
                <span className="text-xl font-bold">Marsch</span>
              </div>
            </Link>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex h-5 w-5 md:hidden"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="text-xl font-bold">
                    Schulverein Haseldorfer Marsch
                  </SheetTitle>
                </SheetHeader>
                <nav className="mt-4 flex flex-col items-center justify-center gap-2">
                  {data?.left_navbar_items.map(
                    (route: NavbarItemProps, i: number) => (
                      <Link
                        rel="noreferrer noopener"
                        to={route.URL}
                        key={i}
                        className={`text-[17px] ${buttonVariants({
                          variant: "muted",
                        })}`}
                        target={route.target}
                        onClick={() => setIsOpen(false)}
                      >
                        {route.text}
                      </Link>
                    )
                  )}
                  <a
                    rel="noreferrer noopener"
                    href="https://github.com/leoMirandaa/shadcn-landing-page.git"
                    target="_blank"
                    className={`w-[110px] border ${buttonVariants({
                      variant: "muted",
                    })}`}
                  >
                    <GitHubLogoIcon className="mr-2 h-5 w-5" />
                    Github
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden gap-2 md:flex">
            {data?.left_navbar_items.map(
              (route: NavbarItemProps, i: number) => (
                <Link
                  rel="noreferrer noopener"
                  to={route.URL}
                  key={i}
                  className={`text-[17px] ${buttonVariants({
                    variant: "muted",
                  })}`}
                  target={route.target}
                >
                  {route.text}
                </Link>
              )
            )}
          </nav>

          <div className="hidden gap-2 md:flex">
            <a
              rel="noreferrer noopener"
              href="https://github.com/leoMirandaa/shadcn-landing-page.git"
              target="_blank"
              className={`border ${buttonVariants({ variant: "muted" })}`}
            >
              <GitHubLogoIcon className="mr-2 h-5 w-5" />
              Github
            </a>

            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
