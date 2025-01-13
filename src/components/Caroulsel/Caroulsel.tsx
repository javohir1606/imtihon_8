"use client";
import React from "react";
import { Carousel, CarouselNext, CarouselPrevious } from "../ui/carousel";
// import Autoplay from "embla-carousel-autoplay";

interface CrouselWrapperType {
  children: React.ReactNode;
  className?: string | undefined;
}
export function CarouselWrapper({ children, className }: CrouselWrapperType) {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      className={className}
      // plugins={[
      //   Autoplay({
      //     delay: 2000,
      //   }),
      // ]}
    >
      {children}
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  );
}
