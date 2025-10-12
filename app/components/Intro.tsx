import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Intro() {
  return (
    <section className="max-w-[1000px] mx-auto py-12 px-4">
      <h2>An integral piece of your family</h2>
      <div className="">
        <p className="text-lg">
          <img
            src="/images/sara.jpg"
            className="rounded-sm shadow max-w-[400px] md:float-right md:ml-8 mb-4 md:mb-0"
          />
          Hello! My name is Sara (she/her), and I’m the original face behind
          Puzzle Dogs.
          <br />
          <br />
          I breed with one overarching goal: I want to enable more people to
          enjoy dogs who are every bit as special, easy, and delightful as my
          dogs.
          <br />
          <br />
          We’re all about community! The Puzzle Dogs family isn’t just me. It’s
          an entire group of people who are all obsessed with our dogs!
          <br />
          <br />
          <span className="font-bold">Mission:</span>
          <br />
          To breed easy-to-live-with, social, happy, healthy, “dog-shaped” dogs
          who can be successful at a hobby level in a variety of sports with a
          novice handler, and who will live comfortably into their mid-late
          teens.
          <br />
          <br />
        </p>
        <h3 className="font-bold text-lg">Values:</h3>
        <ul className="text-lg">
          <li>Community</li>
          <li>Transparency</li>
          <li>Welfare (for dog and human partners alike)</li>
          <li>Kindness</li>
          <li>Education</li>
        </ul>
        <p className="text-lg pb-8 pt-4">
          We’re proudly supportive of the LGBTQAI+, BIPOC, Disabled, immigrant,
          immune-suppressed, neurodiverse, and other minority communities. I
          strive to place puppies with people who, by their actions and words,
          uplift our diverse, extended family. If you aren’t comfortable sharing
          space with people from all of these groups or if you, through your
          actions or words, support racist, transphobic, xenophobic, ableist, or
          other such harmful ideologies, please seek a puppy elsewhere.
        </p>
      </div>
      <Button variant="outline" asChild>
        <Link href="/about">LEARN MORE</Link>
      </Button>
    </section>
  );
}
