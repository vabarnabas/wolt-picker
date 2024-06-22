import useAddressStore from "@/stores/address.store";
import useSWR from "swr";

export default function useCategories() {
  const lat = useAddressStore((state) => state.currentAddress.lat);
  const lon = useAddressStore((state) => state.currentAddress.lon);

  const response = useSWR(
    `/api/proxy/categories?lat=${lat}&lon=${lon}`,
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

  return response;
}
