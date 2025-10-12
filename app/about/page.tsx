import AboutSara from "./components/AboutSara";
import BreedingPhilosophy from "./components/BreedingPhilosophy";
import Community from "./components/Community";
import Origin from "./components/Origin";
import WhyMutts from "./components/WhyMutts";
import Hero from "@/components/Hero";

export default function About() {
  return (
    <div>
      <Hero
        image="/images/hero/philosophy.jpg"
        alt="two small brown and white dogs play tug with a frisbee while female owner walks nearby"
        h1="About Us"
        imageClasses="object-top"
      />
      <BreedingPhilosophy />
      <AboutSara />
      <Origin />
      <WhyMutts />
      <Community />
    </div>
  );
}
