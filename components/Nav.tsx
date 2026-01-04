import { Button } from "./ui/button";
import Link from "next/link";
import type { LinksType } from "@/app/types/types";

export default function Nav({
  classes,
  closeMenu,
}: {
  classes: string;
  closeMenu?: () => void;
}) {
  return (
    <ul className={classes}>
      {navLinks.map((link) => (
        <li key={link.name}>
          <Button
            variant="link"
            asChild
            className="font-medium text-lg text-foreground atma transition duration-300 ease-in-out hover:scale-105"
          >
            <Link href={link.path} onClick={closeMenu}>
              {link.name}
            </Link>
          </Button>
        </li>
      ))}
      <li>
        <Button asChild>
          <Link href="https://www.facebook.com/puzdog/">LEARN MORE</Link>
        </Button>
      </li>
    </ul>
  );
}

const navLinks: LinksType[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Our Dogs", path: "/ourdogs" },
];
