import Hero from "@/components/Hero";
import Intro from "./components/Intro";
import StayConnected from "./components/StayConnected";
import UpcomingLitters from "./components/UpcomingLitters";

export default function Home() {
  return (
    <div>
      <Hero
        image="/images/hero/pan_hero_2.jpg"
        alt="small brown and white dog runs across a grass field"
        h1="Puzzle Dogs"
        imageClasses="object-center"
      />
      <Intro />
      <UpcomingLitters />
      <StayConnected />
    </div>
  );
}
