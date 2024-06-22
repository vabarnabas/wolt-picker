import { Address } from "@/types/address.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AddressStore {
  addresses: Address[];
  currentAddress: Address;
  selectAddress: (input: Address) => void;
  createAddress: (input: Address) => void;
  deleteAddress: () => void;
}

const useAddressStore = create<AddressStore>()(
  persist(
    (set) => ({
      addresses: [
        {
          name: "Budapest XI.",
          streetLine: "District XI.",
          lat: 47.4836,
          lon: 19.053601,
          canBeDeleted: false,
        },
        {
          name: "Helsinki",
          streetLine: "Central",
          lat: 60.169267,
          lon: 24.942221,
          canBeDeleted: false,
        },
      ],
      currentAddress: {
        name: "Budapest XI.",
        streetLine: "District XI.",
        lat: 47.4836,
        lon: 19.053601,
        canBeDeleted: false,
      },
      selectAddress: (input: Address) => set(() => ({ currentAddress: input })),
      createAddress: (input: Address) =>
        set((state) => ({ addresses: [...state.addresses, input] })),
      deleteAddress: () => {},
    }),
    {
      name: "wolt-picker-address-storage",
    }
  )
);

export default useAddressStore;
