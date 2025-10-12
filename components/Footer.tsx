import Link from "next/link";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="bg-primary/10 py-4 px-4">
      <div className="max-w-[1000px] mx-auto">
        <div className="flex flex-col items-start gap-2">
          {/* Copyright Statement */}
          <p>
            &copy; {new Date().getFullYear()} Sara Reusche & Puzzle Dogs. All
            rights reserved.
          </p>
          <div className="flex flex-row gap-8">
            <Button variant="link" asChild className="m-0 p-0">
              <Link href="/">
                <p>Home</p>
              </Link>
            </Button>
            <Button variant="link" asChild className="m-0 p-0">
              <Link href="/about">
                <p>About</p>
              </Link>
            </Button>
            <Button variant="link" asChild className="m-0 p-0">
              <Link href="/ourdogs">
                <p>Our Dogs</p>
              </Link>
            </Button>
            <Button variant="link" asChild className="m-0 p-0">
              <Link
                href="https://facebook.com/puzdog"
                passHref
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-1">
                  {/* Facebook Icon */}
                  <div className="bg-primary rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      fill="white"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.612c-.867 0-.388.397-.388 1.156v1.444h2l-.223 2h-1.777v5h-2v-5h-1.808v-2h1.808v-1.156c0-1.42.59-2.844 2.808-2.844h1.192v2z" />
                    </svg>
                  </div>
                  <p>Facebook</p>
                </div>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
