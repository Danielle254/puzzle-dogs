import { Button } from "./ui/button";
import Link from "next/link";

export default function Nav({ classes }: { classes: string }) {
  return (
    <ul className={classes}>
      <li>
        <Button
          variant="link"
          asChild
          className="font-bold text-lg text-foreground "
        >
          <Link href="/">Home</Link>
        </Button>
      </li>
      <li>
        <Button
          variant="link"
          asChild
          className="font-bold text-lg text-foreground"
        >
          <Link href="/about">About</Link>
        </Button>
      </li>
      <li>
        <Button
          variant="link"
          asChild
          className="font-bold text-lg text-foreground"
        >
          <Link href="/ourdogs">Our Dogs</Link>
        </Button>
      </li>
      <li>
        <Button asChild>
          <Link href="https://www.facebook.com/puzdog/">LEARN MORE</Link>
        </Button>
      </li>
    </ul>
  );
}
