"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function GalleryCarousel({ images }: { images: { url: string }[] }) {
  return (
    <Carousel
      swipeable
      stopOnHover
      showStatus={false}
      interval={6000}
      showArrows={false}
      useKeyboardArrows={true}
      emulateTouch
      infiniteLoop
      autoPlay
      centerSlidePercentage={90}
      className="m-0 h-full cursor-grabbing p-0"
    >
      {images?.map((item: any, index: number) => {
        return (
          <div key={index} className="h-[450px] w-full  sm:h-[450px]">
            <Image
              src={item?.url}
              alt="About Us Image"
              width={320}
              className="h-full w-full rounded-3xl object-cover"
              height={450}
            />
          </div>
        );
      })}
    </Carousel>
  );
}

export default GalleryCarousel;
