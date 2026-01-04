export default function StayConnected() {
  return (
    <section className="max-w-[1000px] mx-auto py-12 px-4">
      <h2>Stay Connected</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg pb-12">
            <span className="underline cursor-pointer hover:text-primary">
              <a href="https://www.facebook.com/puzdog/photos">
                Follow us on Facebook
              </a>
            </span>{" "}
            for the most up-to-date information about current and upcoming
            litters.
          </p>
        </div>
        <img
          src="/images/puppies.jpg"
          alt="several small brown and white puppies on a grass field"
          className="rounded-sm shadow"
        />
      </div>
    </section>
  );
}
