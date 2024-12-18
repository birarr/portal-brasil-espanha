import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { NewsItemsProps } from "@/types";
import Link from "next/link";

type CarouselSizeProps = {
  data: NewsItemsProps[] | undefined;
};

export function CarouselSize({ data }: CarouselSizeProps) {
  console.log({ data });
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {data?.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent
                  className="flex flex-col justify-end aspect-square items-center p-6"
                  style={{
                    backgroundImage: `url(${item?.urlToImage})`,
                    backgroundPosition: "center",
                  }}
                >
                  <Link href={`${item?.url}`} target="_blank">
                    <span className="text-lg font-semibold bg-slate-600">
                      {item?.title}
                    </span>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}