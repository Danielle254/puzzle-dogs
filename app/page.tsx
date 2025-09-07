import Hero from "./components/Hero";
import Intro from "./components/Intro";
import StayConnected from "./components/StayConnected";
import UpcomingLitters from "./components/UpcomingLitters";

export default function Home() {
  return (
    <div>
      <Hero image="/images/pan_hero_2.jpg" />
      <Intro />
      <UpcomingLitters />
      <StayConnected />
    </div>
  );
}
