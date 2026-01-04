import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Litters() {
  return (
    <section className="py-12 px-4 bg-primary/10">
      <div className="max-w-[1000px] mx-auto ">
        <h2>Litters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {litters.map((litter) => (
            <div
              className="border border-foreground/20 rounded shadow p-4 bg-background"
              key={litter.name}
            >
              <img
                src={litter.img}
                className="shadow rounded-sm w-full h-60 object-cover object-center"
                alt={litter.alt}
              />
              <h3 className="font-bold text-xl py-4">{litter.name}</h3>
              <p className="text-lg pb-8">
                {litter.parents} <br />
                born {litter.date}
              </p>
              <Button asChild>
                <Link href={litter.link} target="_blank">
                  LEARN MORE
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const litters: LittersType[] = [
  {
    name: "The Happy Pills",
    parents: "Rivet x Biz",
    date: "9/18/25",
    img: "/images/litters/rivetXbiz.jpg",
    alt: "mother dog Biz and father dog Rivet laying side by side in the grass open mouth panting",
    link: "https://www.facebook.com/groups/1284773736438170/",
  },
  {
    name: "The Happy Meal",
    parents: "Bender x Biz",
    date: "5/16/24",
    img: "/images/litters/benderXbiz.jpg",
    alt: "mother dog Biz and father dog Bender sitting side by side on a red couch while looking at the camera",
    link: "https://www.facebook.com/groups/1356433388403830/",
  },
  {
    name: "The Happy Dance",
    parents: "Benny x Biz",
    date: "7/15/22",
    img: "/images/litters/bennyXbiz.jpg",
    alt: "mother dog Biz and father dog Benny each being held by their owners standing outside in the sun",
    link: "https://www.facebook.com/groups/719326152466386/",
  },
];

type LittersType = {
  name: string;
  parents: string;
  date: string;
  img: string;
  alt: string;
  link: string;
};
