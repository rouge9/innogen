import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/shared/MoodToggle";
import { Menu, Package2 } from "lucide-react";
import Link from "next/link";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavLinks from "./nav_links";

function Header() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Package2 className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <NavLinks />
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <Link
              href="#features"
              className="text-muted-foreground hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-muted-foreground hover:text-foreground"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="text-muted-foreground hover:text-foreground"
            >
              Faq
            </Link>
            <SignedOut>
              <Button
                variant="secondary"
                size="default"
                className="rounded-lg block md:hidden"
              >
                <Link href="/sign-up">Sign up</Link>
              </Button>
            </SignedOut>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4 justify-end">
        <ModeToggle />
        <SignedOut>
          <Button variant="default" size="default" className="rounded-lg">
            <Link href="/sign-in">Sign in</Link>
          </Button>
          <Button
            variant="secondary"
            size="default"
            className="rounded-lg hidden md:block"
          >
            <Link href="/sign-up">Sign up</Link>
          </Button>
        </SignedOut>
        <SignedIn>
          <a
            className="group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-2 text-muted-foreground focus:outline-none focus:ring active:text-muted-foreground"
            href="/dashboard"
          >
            <span className="absolute -end-full transition-all group-hover:end-4">
              <svg
                className="size-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>

            <span className="text-sm font-medium transition-all group-hover:me-4">
              Dashboard
            </span>
          </a>
        </SignedIn>
      </div>
    </header>
  );
}

export default Header;
