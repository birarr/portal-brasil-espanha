"use client";

import { newsApi } from "@/app/api";
import { NewsItemsProps } from "@/types";
import { useCallback, useEffect, useState } from "react";
import { CarouselSize } from "../carousel";

export const NewsComponent = () => {
  const [news, setNews] = useState<NewsItemsProps[]>();

  const fetchData = useCallback(async () => {
    const response = await newsApi();
    const data = response as NewsItemsProps[];

    setNews(data?.splice(0, 5));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  console.log({ news });
  return (
    <div>
      <CarouselSize data={news} />
    </div>
  );
};
