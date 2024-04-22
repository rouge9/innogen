"use client";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
import { links } from "@/constant";

function NavLinks({
  start = 0,
  end = links.length,
}: {
  start?: number;
  end?: number;
}) {
  const pathname = usePathname();
  return (
    <>
      {links.slice(start, end).map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary text-sm md:text-lg font-semibold",
              {
                "bg-muted text-primary": pathname == link.href,
              }
            )}
          >
            <link.icon className="h-4 w-4" />

            {link.name}
          </Link>
        );
      })}
    </>
  );
}

export default NavLinks;
