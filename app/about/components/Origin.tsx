import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Origin() {
  return (
    <section className="bg-primary/10 ">
      <div className="max-w-[1000px] mx-auto py-12 px-4">
        <h2>Puzzle Dogs Origin</h2>
        <div className="flex flex-col gap-8 pb-8">
          <img src="/images/sara_family.jpg" className="rounded-sm shadow" />
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            <br />
            <br />
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In eni pretium. Integer
            tincidunt. Cras dapibus. Vivam
            <br />
            <br />
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In eni Nulla consequat massa quis
            enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
            arcu. In eni
          </p>
        </div>
        <Button variant="outline" asChild>
          <Link href="https://www.facebook.com/puzdog/">LEARN MORE</Link>
        </Button>
      </div>
    </section>
  );
}
