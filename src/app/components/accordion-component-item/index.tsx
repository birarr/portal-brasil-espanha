import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AccordionDataProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export const AccordionComponentItem = ({ data }: AccordionDataProps) => {
  return (
    <div>
      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <TooltipTrigger>
            <Link href={data?.href} target="_blank">
              <Image
                src={data?.image as string}
                alt="logo"
                height={60}
                width={60}
                className="rounded-lg"
              />
              <p className="md:hidden">{data?.name}</p>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>{data?.name}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
