import Link from "next/link";
import { CircleUser, Menu, Search, Wand } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavLinks from "../shared/nav_links";
import { ModeToggle } from "../shared/MoodToggle";

export function Dashboard() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex-1 top-0 left-0 fixed h-screen pt-10">
            <div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6 pb-5">
              <Link
                href="/"
                className="flex items-center gap-2 font-semibold text-2xl"
              >
                <Wand className="h-8 w-8" />
                <span className="">InnoGen</span>
              </Link>
            </div>
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <NavLinks start={0} end={6} />
            </nav>
          </div>
          <div className="mt-auto p-4 bottom-0 fixed">
            <NavLinks start={6} end={8} />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 top-0 sticky">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ModeToggle />
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Home</h1>
          </div>
          <div
            className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
            x-chunk="dashboard-02-chunk-1"
          ></div>
        </main>
      </div>
    </div>
  );
}