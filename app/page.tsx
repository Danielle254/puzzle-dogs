import Hero from "./components/Hero";
import Intro from "./components/Intro";
import StayConnected from "./components/StayConnected";
import UpcomingLitters from "./components/UpcomingLitters";

export default function Home() {
  return (
    <div>
      <Hero />
      <Intro />
      <UpcomingLitters />
      <StayConnected />
    </div>
  );
}
