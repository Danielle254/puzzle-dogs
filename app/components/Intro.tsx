import { Button } from "@/components/ui/button";

export default function Intro() {
  return (
    <section className="max-w-[1000px] mx-auto py-12 px-4">
      <h2>Tagline</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-8">
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem.
          <br />
          <br />
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In eni pretium. Integer tincidunt.
          Cras dapibus. Vivam
          <br />
          <br />
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In eni
        </p>
        <img src="/images/puppies.jpg" className="rounded-sm shadow" />
      </div>
      <Button variant="outline">LEARN MORE</Button>
    </section>
  );
}
