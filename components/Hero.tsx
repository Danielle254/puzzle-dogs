type HeroProps = {
  image: string;
  alt: string;
  h1: string;
};

export default function Hero({ image, alt, h1 }: HeroProps) {
  return (
    <section className="relative text-center">
      <img
        src={image}
        alt={alt}
        className="w-full max-h-[calc(100vh-80px)] object-cover"
      />
      <div className="absolute text-center top-0 left-0 mt-4 md:mt-12 w-full">
        <h1 className="text-2xl sm:text-4xl text-background">{h1}</h1>
      </div>
    </section>
  );
}
