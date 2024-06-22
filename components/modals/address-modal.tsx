import clsx from "clsx";
import React from "react";
import { HiOfficeBuilding, HiPlus } from "react-icons/hi";

import useModalStore from "@/stores/modal.store";
import BaseModal from "./base-modal";
import useAddressStore from "@/stores/address.store";

export default function AddressSelectorModal() {
  const addresses = useAddressStore((state) => state.addresses);
  const currentAddress = useAddressStore((state) => state.currentAddress);
  const selectAddress = useAddressStore((state) => state.selectAddress);

  const closeModal = useModalStore((state) => state.closeModal);

  return (
    <BaseModal title="Select Address" onClose={closeModal}>
      <div className="mt-4 w-full divide-y">
        {addresses.map((address, idx) => (
          <div
            key={`${address.name}-${idx}`}
            className="flex w-full items-center justify-between py-3"
          >
            <div className="flex items-center gap-x-4">
              <div
                className={clsx(
                  "flex h-10 w-10 items-center justify-center rounded-full ",
                  currentAddress.name === address.name
                    ? "bg-wolt-blue/[8%]"
                    : "bg-light-gray/[8%]"
                )}
              >
                <HiOfficeBuilding
                  className={clsx(
                    "text-xl",
                    currentAddress.name === address.name
                      ? "text-wolt-blue"
                      : null
                  )}
                />
              </div>
              <div className="">
                <p
                  className={clsx("font-medium", {
                    "text-wolt-blue": currentAddress.name === address.name,
                  })}
                >
                  {address.name}
                </p>
                <p className="text-sm opacity-[64%]">{address.streetLine}</p>
              </div>
            </div>
            {currentAddress.name !== address.name ? (
              <button
                onClick={() => {
                  selectAddress(address);
                  closeModal();
                }}
                className="flex items-center justify-center gap-x-2 rounded-lg bg-wolt-blue/[8%] px-6 py-3 text-wolt-blue transition-all duration-100 ease-out hover:bg-wolt-blue/[12%]"
              >
                Choose
              </button>
            ) : null}
          </div>
        ))}
        <div className="flex w-full cursor-pointer items-center justify-between py-3">
          <div className="hover:text-wolt-blue transition-all ease-in-out duration-150 w-full flex items-center gap-x-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full">
              <HiPlus className="text-xl" />
            </div>
            <div className="">
              <p className="font-medium">Add new Address (WIP)</p>
            </div>
          </div>
        </div>
      </div>
    </BaseModal>
  );
}
