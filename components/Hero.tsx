type HeroProps = {
  image: string;
  alt: string;
  h1: string;
  imageClasses: string;
};

export default function Hero({ image, alt, h1, imageClasses }: HeroProps) {
  return (
    <section className="relative">
      <img
        src={image}
        alt={alt}
        className={`w-full max-h-[calc(100vh-80px)] object-cover ${imageClasses}`}
      />
      <div className="absolute top-0 left-0 text-left lg:text-center mt-4 md:mt-12 w-full lg:w-[1000px] pl-4 lg:pl-0">
        <h1 className="text-2xl sm:text-4xl text-background">{h1}</h1>
      </div>
    </section>
  );
}
