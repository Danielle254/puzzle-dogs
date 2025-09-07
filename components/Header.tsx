import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <nav className="flex justify-between max-w-[1000px] h-20 mx-auto items-center">
      <div className="flex items-end">
        <img
          src="/placeholder_logo.jpg"
          className="max-h-16"
          alt="Puzzle Dogs Logo - lime green dog with purple cape leaps up and to the right"
        />{" "}
        {/* need to replace with PNG logo file */}
        <h1 className="text-xl font-bold italic">Puzzle Dogs</h1>
      </div>
      <ul className="flex gap-4 items-center">
        <li>
          <Button
            variant="link"
            asChild
            className="font-bold text-lg text-foreground "
          >
            <Link href="/">HOME</Link>
          </Button>
        </li>
        <li>
          <Button
            variant="link"
            asChild
            className="font-bold text-lg text-foreground"
          >
            <Link href="/about">ABOUT</Link>
          </Button>
        </li>
        <li>
          <Button
            variant="link"
            asChild
            className="font-bold text-lg text-foreground"
          >
            <Link href="/ourdogs">OUR DOGS</Link>
          </Button>
        </li>
        <li>
          <Button asChild>
            <Link href="https://www.facebook.com/puzdog/">LEARN MORE</Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
}
