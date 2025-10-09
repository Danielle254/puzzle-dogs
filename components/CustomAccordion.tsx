import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type AccordionDataType = {
  question: string;
  answer: string;
};

export default function CustomAccordion({
  data,
  customClasses,
}: {
  data: AccordionDataType[];
  customClasses: string;
}) {
  const accordionItemStyling =
    "bg-background px-2 rounded mb-2 border-primary border-[1px] shadow";
  return (
    <Accordion
      type="single"
      collapsible
      className="col-span-2"
      defaultValue={data[0].question}
    >
      {data.map((item) => (
        <AccordionItem
          value={item.question}
          className={`${accordionItemStyling} ${customClasses}`}
          key={item.question}
        >
          <AccordionTrigger className="cursor-pointer">
            <h3 className="text-xl">{item.question}</h3>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-lg">{item.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
