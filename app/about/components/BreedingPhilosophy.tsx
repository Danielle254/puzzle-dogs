import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BreedingPhilosophy() {
  return (
    <section className="max-w-[1000px] mx-auto py-12 px-4">
      <h2>Breeding Philosophy</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
        <p className="text-lg col-span-2">
          My goal is to produce healthy, stable, delightful family pets who can
          also succeed in dog sports at the hobbyist level. That means social
          dogs with great off-switches, who adore doing things with their
          people. That also means structurally-sound dogs who can remain active
          and fit into their teens.
          <br />
          <br />
          I'm committed to removing barriers to entry in the dog sport world by
          placing wonderful dogs with wonderful people in communities that may
          otherwise not have access to health-tested and thoughtfully-raised
          puppies.
          <br />
          <br />I prioritize temperament above all else, and strive to make good
          matches between owners and their puppies for a lifelong connection.
        </p>
        <img
          src="/images/biz_with_puppies.jpg"
          className="rounded-sm shadow col-span-1 max-w-[400px]"
          alt="brown and white dog with two small puppies looks towards the camera surrounded by grass"
        />
      </div>
      <Button variant="outline" asChild>
        <Link href="https://www.facebook.com/puzdog/">LEARN MORE</Link>
      </Button>
    </section>
  );
}
