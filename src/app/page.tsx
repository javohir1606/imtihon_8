import * as React from "react";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Banner } from "@/components/Banner/banner";
import fetchWrapper from "@/config/fetch";
import { CarouselWrapper } from "@/components/Caroulsel/Caroulsel";
// import { CarouselWrapper } from "@/components/Carousel/carousel-wrapper";

export interface ResponseTodoT {
  title?: string;
  description: string;
  image: string;
  id: number;
}

export interface BannerDataType {
  results?: ResponseTodoT[];
}

export default async function Home() {
  // API ma'lumotlarini olish
  const data = await fetchWrapper<BannerDataType>("/banner", {
    next: { revalidate: 86400 },
  });

  return (
    <div className="container">
      <div className="flex justify-end">
        {/* CarouselWrapper komponenti */}
        <CarouselWrapper className="w-full max-w-[870px]">
          <CarouselContent>
            {/* API'dan kelgan ma'lumotlarni xaritalash */}
            {data?.results?.map((item: ResponseTodoT) => (
              <CarouselItem key={item.id}>
                <Banner key={item.id} {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </CarouselWrapper>
      </div>
    </div>
  );
}
