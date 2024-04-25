"use client";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

import {
  Home,
  Image,
  Sparkles,
  ScanLine,
  PaintBucket,
  CameraOff,
  ShoppingBag,
  SquareUserRound,
} from "lucide-react";

export const links = [
  { name: "Home", href: "/dashboard", icon: Home },
  {
    name: "Image Restore",
    href: "/dashboard/transformations/add/restore",
    icon: Image,
  },
  {
    name: "Generative Fill",
    href: "/dashboard/transformations/add/fill",
    icon: Sparkles,
  },
  {
    name: "Object Removal",
    href: "/dashboard/transformations/add/remove",
    icon: ScanLine,
  },
  {
    name: "Object Recolor",
    href: "/dashboard/transformations/add/recolor",
    icon: PaintBucket,
  },
  {
    name: "Background Removal",
    href: "/dashboard/transformations/add/removeBackground",
    icon: CameraOff,
  },
  { name: "Profile", href: "/dashboard/profile", icon: SquareUserRound },
  { name: "Buy Credit", href: "/dashboard/credits", icon: ShoppingBag },
];

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
