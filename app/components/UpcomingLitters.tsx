import { Button } from "@/components/ui/button";

export default function UpcomingLitters() {
  return (
    <section className="py-12 px-4 bg-primary/10">
      <div className="max-w-[1000px] mx-auto ">
        <h2>Upcoming Litters</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <article>
            <img
              src="/images/puppy_running.jpg"
              className="shadow rounded-sm w-full h-60 object-cover object-center"
            />
            <h3 className="font-bold text-xl py-4">Biz x Stud Fall 2025</h3>
            <p className="text-lg pb-8">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget
            </p>
            <Button>Facebook Group</Button>
          </article>
          <article>
            <img
              src="/images/biz_profile.jpg"
              className="shadow rounded-sm w-full h-60 object-cover object-center"
            />
            <h3 className="font-bold text-xl py-4">Biz x Stud Summer 2026</h3>
            <p className="text-lg pb-8">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget
            </p>
            <Button>Learn More</Button>
          </article>
        </div>
      </div>
    </section>
  );
}
