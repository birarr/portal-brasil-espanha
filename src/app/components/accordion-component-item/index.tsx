import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AccordionDataProps } from "@/types";
import Image from "next/image";

export const AccordionComponentItem = ({ data }: AccordionDataProps) => {
  return (
    <div>
      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <TooltipTrigger>
            <Image
              src={data?.image as string}
              alt="logo"
              height={60}
              width={60}
              className="rounded-lg"
            />
            <p className="md:hidden">{data?.name}</p>
          </TooltipTrigger>
          <TooltipContent>
            <p>{data?.name}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
