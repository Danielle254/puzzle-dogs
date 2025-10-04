import DogCard from "./DogCard";
import type { DogDetailsType } from "@/app/types/types";

export default function CardList({ dogs }: { dogs: DogDetailsType[] }) {
  return (
    <div className="flex flex-col gap-8">
      {dogs.map((dog) => (
        <DogCard dog={dog} key={dog.kennelName} />
      ))}
    </div>
  );
}
