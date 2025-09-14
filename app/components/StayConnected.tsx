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
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpuzdog%2F&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            style={{ border: "none", overflow: "hidden", borderRadius: "4px" }}
            className="h-[130px] max-[384px]:w-[265px] w-[340px]"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
        <img
          src="/images/pan_hero.jpg"
          alt="brown and white dog holding a frisbee runs through a grass field"
          className="rounded-sm shadow"
        />
      </div>
    </section>
  );
}
