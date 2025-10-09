import CustomAccordion from "@/components/CustomAccordion";

export default function WhyMutts() {
  return (
    <section className="bg-primary/10">
      <div className="max-w-[1000px] mx-auto py-12 px-4">
        <h2>Why Mutts?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          <CustomAccordion data={whyMuttsData} customClasses="" />
          <img
            src="/images/iroh.jpg"
            className="rounded-sm shadow col-span-1 max-w-[400px]"
          />
        </div>
      </div>
    </section>
  );
}

const whyMuttsData = [
  {
    question: "Open gene pools",
    answer:
      "Closed gene pools shrink generation after generation, and can result in inbreeding depression and an increased risk of recessive health disorders over time. Health-tested dogs with known lineages and performance titles can be found in many breeds and mixes. What we give up in “type” is made up for in diversity and a wealth of breeding options!",
  },
  {
    question: "Community",
    answer:
      "Some of our most beloved pure breeds are facing a need for outcross programs. We welcome like-minded breeders to collaborate in order to bring much-needed diversity to pure breeds who would benefit from outcrossing!",
  },
  {
    question: "They’re unique",
    answer:
      "One of the coolest things about breeding mutts is seeing the similarities in our dogs (they’re freeze babies, they’re never right-side-up, many of them are “smilers,” most of them hug and like to snuggle under covers…) and also seeing all of the unique ways that their genetic backgrounds and socialization/environment combine to make for a truly one-of-a-kind dog.",
  },
  {
    question: "I’m a nerd",
    answer:
      "Yes, really! I’m a card-carrying, punnett-square-writing, Google-scholar-searching dog nerd. As a kid, I memorized the AKC breeds… all of them. Then I found the UKC. Then the FCI. So many breeds! As an adult, I think that mixed breeds are the dog of the future. Genetic diversity, versatility, and a lessening of selective pressure towards extremes are all important for the modern dog.",
  },
];
