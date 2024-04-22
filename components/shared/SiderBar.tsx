import Link from "next/link";
import { Wand } from "lucide-react";

import NavLinks from "@/components/shared/nav_links";

export default function SiderBar() {
  return (
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
  );
}
