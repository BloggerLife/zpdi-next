"use client";
import { useWindScreenowSize } from "@/hooks/useWindowSize";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
export const TestimonialsCarousel = (users: any) => {
  const size = useWindScreenowSize();

  return (
    <Carousel
      stopOnHover
      showThumbs={false}
      showStatus={false}
      interval={4500}
      showArrows={false}
      autoPlay
      showIndicators={false}
      centerMode
      centerSlidePercentage={
        (size.width < 640 && 85) || (size.width < 1024 && 40) || 33
      }
      infiniteLoop
      useKeyboardArrows
      className="cursor-disable w-screen max-w-7xl overflow-hidden  duration-300"
    >
      {users.users.Testimonials.map((user: any, index: number) => {
        return (
          <div
            key={index}
            className="w-full shrink-0  rounded-3xl bg-primary-400 p-10 sm:col-span-1"
          >
            <p className="min-h-[180px] text-left">{user.excerpt}</p>
            <div className="flex flex-col items-center gap-6 sm:flex-row ">
              <div className="relative h-[56px] w-[56px] shrink-0">
                <Image
                  src={user.image}
                  alt="Expert Image"
                  width={90}
                  height={90}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <div className="flex w-full flex-col justify-between gap-2 sm:flex-row">
                <div className="flex flex-col text-black ">
                  <h3 className="text-sub-title">{user.heading}</h3>
                  <p className="text-sm text-black opacity-90">
                    {user.tagline}{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};
