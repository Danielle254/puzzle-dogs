type HeroProps = {
  image: string;
  alt: string;
  h1: string;
  imageClasses: string;
};

export default function Hero({ image, alt, h1, imageClasses }: HeroProps) {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)]">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={image}
          alt={alt}
          className={`w-full h-full object-cover ${imageClasses}`}
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
      <div className="absolute top-1/5 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center text-white">
        <h1>{h1}</h1>
      </div>
    </section>
  );
}
