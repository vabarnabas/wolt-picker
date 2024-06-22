import useAddressStore from "@/stores/address.store";
import { Restaurant } from "@/types/restaurant.types";
import { useCallback, useMemo } from "react";
import useSWR from "swr";

export default function useRestaurants() {
  const lat = useAddressStore((state) => state.currentAddress.lat);
  const lon = useAddressStore((state) => state.currentAddress.lon);

  const response = useSWR<Restaurant[]>(
    `/api/proxy/restaurants?lat=${lat}&lon=${lon}`,
    async (url) => {
      const response = await fetch(url);
      return await response.json();
    },
    {
      refreshInterval: 0,
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnMount: true,
    }
  );

  const getRandomRestaurants = useCallback(
    (take: number) => {
      return response
        .data!.filter((restaurant) => restaurant.venue.online)
        .filter((restaurant) => restaurant.venue.delivers)
        .sort(() => 0.5 - Math.random())
        .slice(0, take);
    },
    [response.data]
  );

  return { ...response, getRandomRestaurants };
}
