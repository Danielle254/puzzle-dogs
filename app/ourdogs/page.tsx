import Hero from "@/components/Hero";
import CardList from "./components/CardList";
import { promises as fs } from "fs";
import path from "path";
import { filterData } from "@/lib/utils";
import { DogDetailsType, Gender, Status } from "../types/types";

export default async function OurDogs() {
  const filePath = path.join(process.cwd(), "app/data/dogData.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  const data: DogDetailsType[] = JSON.parse(fileContents);
  return (
    <>
      <Hero
        image="/images/boys.jpg"
        alt="two small dogs stand outside facing towards the camera"
        h1="Our Dogs"
        imageClasses=""
      />
      <section className="max-w-[1000px] mx-auto py-12 px-4">
        <h2>Active Girls</h2>
        <CardList
          dogs={filterData(data, "female" as Gender, "active" as Status)}
        />
      </section>
      <section className="max-w-[1000px] mx-auto py-12 px-4">
        <h2>Active Boys</h2>
        <CardList
          dogs={filterData(data, "male" as Gender, "active" as Status)}
        />
      </section>
    </>
  );
}
