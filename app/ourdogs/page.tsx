import Hero from "@/components/Hero";
import CardList from "./components/CardList";
import { promises as fs } from "fs";
import path from "path";
import { DogDetailsType } from "../types/types";

export default async function OurDogs() {
  const filePath = path.join(process.cwd(), "app/data/dogData.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  const data: DogDetailsType[] = JSON.parse(fileContents);
  return (
    <>
      <Hero
        image="/images/hero/boys.jpg"
        alt="two small dogs stand outside facing towards the camera"
        h1="Our Dogs"
        imageClasses=""
      />
      <section className="max-w-[1000px] mx-auto py-12 px-4">
        <h2>The Girls</h2>
        <CardList dogs={data.filter((dog) => dog.gender === "female")} />
      </section>
      <section className="max-w-[1000px] mx-auto py-12 px-4">
        <h2>The Boys</h2>
        <CardList dogs={data.filter((dog) => dog.gender === "male")} />
      </section>
    </>
  );
}
