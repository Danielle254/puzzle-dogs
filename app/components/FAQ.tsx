import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const accordionItemStyling =
    "bg-background px-2 rounded mb-2 border-primary border-[1px] shadow";
  return (
    <section className="bg-primary/10">
      <div className="max-w-[1000px] mx-auto py-12 px-4">
        <h2>Why Mutts?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          <Accordion type="single" collapsible className="col-span-2">
            <AccordionItem value="item-1" className={accordionItemStyling}>
              <AccordionTrigger className="cursor-pointer">
                <h3 className="text-xl">Open gene pools</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-lg">
                  Closed gene pools shrink generation after generation, and can
                  result in inbreeding depression and an increased risk of
                  recessive health disorders over time. Health-tested dogs with
                  known lineages and performance titles can be found in many
                  breeds and mixes. What we give up in “type” is made up for in
                  diversity and a wealth of breeding options!
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className={accordionItemStyling}>
              <AccordionTrigger className="cursor-pointer">
                <h3 className="text-xl">Community</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-lg">
                  Some of our most beloved pure breeds are facing a need for
                  outcross programs. We welcome like-minded breeders to
                  collaborate in order to bring much-needed diversity to pure
                  breeds who would benefit from outcrossing!
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className={accordionItemStyling}>
              <AccordionTrigger className="cursor-pointer">
                <h3 className="text-xl">They’re unique</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-lg">
                  One of the coolest things about breeding mutts is seeing the
                  similarities in our dogs (they’re freeze babies, they’re never
                  right-side-up, many of them are “smilers,” most of them hug
                  and like to snuggle under covers…) and also seeing all of the
                  unique ways that their genetic backgrounds and
                  socialization/environment combine to make for a truly
                  one-of-a-kind dog.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className={accordionItemStyling}>
              <AccordionTrigger className="cursor-pointer">
                <h3 className="text-xl">I’m a nerd</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-lg">
                  Yes, really! I’m a card-carrying, punnett-square-writing,
                  Google-scholar-searching dog nerd. As a kid, I memorized the
                  AKC breeds… all of them. Then I found the UKC. Then the FCI.
                  So many breeds! As an adult, I think that mixed breeds are the
                  dog of the future. Genetic diversity, versatility, and a
                  lessening of selective pressure towards extremes are all
                  important for the modern dog.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <img
            src="/images/iroh.jpg"
            className="rounded-sm shadow col-span-1 max-w-[400px]"
          />
        </div>
      </div>
    </section>
  );
}
