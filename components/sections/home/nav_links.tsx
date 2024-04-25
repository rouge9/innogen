"use client";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  Package2,
  ArrowRightLeft,
  UserRound,
  Home,
  Settings,
} from "lucide-react";
import Link from "next/link";

export const links = [
  { name: "Home", href: "/" },
  {
    name: "Features",
    href: "#features",
  },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];
function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <p
              className={clsx("hidden md:block", {
                "text-accent-foreground": pathname == link.href,
              })}
            >
              {link.name}
            </p>
          </Link>
        );
      })}
    </>
  );
}

export default NavLinks;
