export default function AboutSara() {
  return (
    <section className="bg-primary/10">
      <div className="max-w-[1000px] mx-auto py-12 px-4">
        <h2>About Sara</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          <p className="text-lg col-span-2 order-2">
            I'm a professional trainer who really likes dogs and people.
            <br />
            <br />
            I love watching the relationship grow between dog and handler as
            teams train in sports, and I love to see social, stable dogs who can
            go anywhere with their family.
            <br />
            <br />
            I've been in the rescue world for over two decades, and am strongly
            committed to placing good dogs with good people. I have a special
            interest in encouraging junior handlers!
          </p>
          <img
            src="/images/sara_disc.jpg"
            className="rounded-sm shadow col-span-1 order-1"
          />
        </div>
      </div>
    </section>
  );
}
