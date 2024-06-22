import useSWR from "swr";

export default function useCategories() {
  const response = useSWR(
    "/api/proxy/categories?lat=47.53825885969044&lon=19.14128898827805",
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
