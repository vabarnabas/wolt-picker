import { Restaurant } from "@/types/restaurant.types";
import Image from "next/image";
import React from "react";

interface Props {
  restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: Props) {
  return (
    <div
      key={restaurant.title}
      // onClick={() => {
      //   router.push(
      //     `https://wolt.com/en/hun/budapest/restaurant/${restaurant.track_id.replace(
      //       "venue-",
      //       ""
      //     )}`
      //   );
      // }}
      className="relative flex h-max w-full min-w-0 max-w-full cursor-pointer flex-col rounded-lg bg-white shadow-md transition-all duration-300 ease-out hover:scale-[103%]"
    >
      <div className="relative h-[60%] min-h-[10rem] overflow-hidden rounded-t-lg">
        <Image
          src={restaurant.image.url}
          layout="fill"
          alt=""
          objectFit="cover"
          priority
        />
        {!restaurant.venue.online ? (
          <div className="absolute inset-0 flex items-center justify-center bg-light-gray/[56%]">
            <p className="text-lg text-white">Closed</p>
          </div>
        ) : null}
      </div>
      <div className="flex w-full justify-between gap-x-4 border-b border-dashed p-4">
        <div className="w-[80%]">
          <p className="truncate text-lg font-medium">{restaurant.title}</p>
          <p className="min-w-0 truncate text-sm opacity-[64%] ">
            {restaurant.venue.short_description}
          </p>
        </div>
        <div className="ml-auto flex w-max flex-col items-center justify-center rounded-lg bg-wolt-blue/[8%] px-2 py-1 text-wolt-blue">
          <p className="w-max text-sm">{restaurant.venue.estimate_range}</p>
          <p className="text-xs opacity-[64%]">min</p>
        </div>
      </div>
      <div className="flex h-8 items-center px-4">
        <p className="text-xs opacity-[64%]">
          {restaurant.venue.delivery_price}
        </p>
      </div>
    </div>
  );
}
