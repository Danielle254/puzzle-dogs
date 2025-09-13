export default function AboutSara() {
  return (
    <section className="bg-primary/10">
      <div className="max-w-[1000px] mx-auto py-12 px-4">
        <h2>About Sara</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          <p className="text-lg col-span-2 order-2">
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
            aliquet nec, vulputate eget, arcu. In eni
          </p>
          <img
            src="/images/sara.jpg"
            className="rounded-sm shadow col-span-1 order-1"
          />
        </div>
      </div>
    </section>
  );
}
