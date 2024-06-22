import useRestaurants from "@/hooks/useRestaurants";
import React from "react";
import RestaurantCard from "../restaurant-card/restaurant-card";
import { IoRestaurant } from "react-icons/io5";
import { IoMdRefresh } from "react-icons/io";
import Spinner from "../spinner/spinner";

export default function RestaurantSection() {
  const {
    data: restaurants,
    error: restaurantError,
    isValidating: restaurantIsValidating,
    getRandomRestaurants,
    mutate: resort,
  } = useRestaurants();

  return (
    <>
      <div className="mt-8 flex items-center justify-between">
        <p className="font-wolt text-3xl font-semibold">Our Random Picks</p>
        <button
          className="text-wolt-blue flex gap-x-1 items-center"
          onClick={() => resort()}
        >
          <IoMdRefresh className="text-xl" />
          Refresh
        </button>
      </div>
      {restaurantIsValidating ? (
        <div className="flex flex-col justify-center items-center h-full flex-grow">
          <Spinner />
        </div>
      ) : restaurantError || !restaurants ? (
        <div className="flex flex-col justify-center items-center h-full flex-grow">
          <div className="h-24 w-24 bg-wolt-blue/[8%] rounded-full flex justify-center items-center">
            <IoRestaurant className="text-wolt-blue text-6xl" />
          </div>
          <p className="font-semibold font-wolt text-3xl mt-4">
            Failed to Load Restaurants
          </p>
          <p className="opacity-60 mt-0.5">
            Please check your address or try again later
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {getRandomRestaurants(6).map((restaurant) => (
            <RestaurantCard key={restaurant.track_id} restaurant={restaurant} />
          ))}
        </div>
      )}
    </>
  );
}
