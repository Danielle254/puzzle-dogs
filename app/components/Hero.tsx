export default function Hero({ image }: { image: string }) {
  return (
    <section>
      <img
        src={image}
        alt="small brown and white dog runs across a grass field"
        className="w-full h-[calc(100vh-80px)]"
      />
    </section>
  );
}
