import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Litters() {
  return (
    <section className="py-12 px-4 bg-primary/10">
      <div className="max-w-[1000px] mx-auto ">
        <h2>Litters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="border border-foreground/20 rounded shadow p-4 bg-background">
            <img
              src="/images/rivetXbizza.jpg"
              className="shadow rounded-sm w-full h-60 object-cover object-center"
            />
            <h3 className="font-bold text-xl py-4">
              The Happy Pills (Rivet x Biz) born 9/18/25
            </h3>
            <p className="text-lg pb-8">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget
            </p>
            <Button asChild>
              <Link
                href="https://www.facebook.com/groups/1284773736438170"
                target="_blank"
              >
                FACEBOOK GROUP
              </Link>
            </Button>
          </article>
          <article className="border border-foreground/20 rounded shadow p-4 bg-background">
            <img
              src="/images/biz_profile.jpg"
              className="shadow rounded-sm w-full h-60 object-cover object-center"
            />
            <h3 className="font-bold text-xl py-4">Biz x Stud Summer 2026</h3>
            <p className="text-lg pb-8">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget
            </p>
            <Button asChild>
              <Link href="https://www.facebook.com/puzdog/" target="_blank">
                LEARN MORE
              </Link>
            </Button>
          </article>
        </div>
      </div>
    </section>
  );
}
