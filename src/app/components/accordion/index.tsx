import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AccordionComponentItem } from "../accordion-component-item";
import { AccordionProps } from "@/types";

export const AccordionComponent = ({ type, data }: AccordionProps) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>{type}</AccordionTrigger>
        <AccordionContent className="flex gap-2">
          {data?.map((item2, index) => (
            <AccordionComponentItem data={item2} key={index} />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
