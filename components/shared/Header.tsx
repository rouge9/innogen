import { Menu, Search, Wand } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavLinks from "@/components/shared/nav_links";
import { ModeToggle } from "@/components/shared/MoodToggle";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 top-0 sticky">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6 pb-3">
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold text-xl"
            >
              <Wand className="h-6 w-6" />
              <span className="">InnoGen</span>
            </Link>
          </div>
          <nav className="grid gap-2 text-lg font-medium">
            <NavLinks start={0} end={6} />
          </nav>
          <div className="mt-auto p-4 bottom-0 fixed">
            <NavLinks start={6} end={8} />
          </div>
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </form>
      </div>
      <UserButton afterSignOutUrl="/dashboard" />
      <ModeToggle />
    </header>
  );
}
