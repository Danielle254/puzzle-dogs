import Hero from "@/components/Hero";
import Intro from "./components/Intro";
import StayConnected from "./components/StayConnected";
import UpcomingLitters from "./components/UpcomingLitters";
import FAQ from "./components/FAQ";
import Celebrations from "./components/Celebrations";

export default function Home() {
  return (
    <div>
      <Hero
        image="/images/pan_hero_2.jpg"
        alt="small brown and white dog runs across a grass field"
        h1="Puzzle Dogs"
        imageClasses="object-center"
      />
      <Intro />
      <UpcomingLitters />
      <FAQ />
      <Celebrations />
      <StayConnected />
    </div>
  );
}
