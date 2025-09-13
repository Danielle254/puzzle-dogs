import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function WhyMutts() {
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
                <h3 className="text-xl">They're awesome</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-lg">
                  Further explanation and detail goes here.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className={accordionItemStyling}>
              <AccordionTrigger className="cursor-pointer">
                <h3 className="text-xl">They're awesome</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-lg">
                  Further explanation and detail goes here.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className={accordionItemStyling}>
              <AccordionTrigger className="cursor-pointer">
                <h3 className="text-xl">They're awesome</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-lg">
                  Further explanation and detail goes here.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className={accordionItemStyling}>
              <AccordionTrigger className="cursor-pointer">
                <h3 className="text-xl">They're awesome</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-lg">
                  Further explanation and detail goes here.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <img
            src="/images/iroh.jpg"
            className="rounded-sm shadow col-span-1"
          />
        </div>
      </div>
    </section>
  );
}
