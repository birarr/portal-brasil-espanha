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
          <div className="flex flex-wrap gap-1">
            {data?.map((item2, index) => (
              <AccordionComponentItem data={item2} key={index} />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
