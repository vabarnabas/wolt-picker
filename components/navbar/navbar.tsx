"use client";
import useAddressStore from "@/stores/address.store";
import useModalStore from "@/stores/modal.store";
import { ModalTypes } from "@/types/modal.types";
import React from "react";
import { HiChevronDown } from "react-icons/hi";

export default function Navbar() {
  const openModal = useModalStore((state) => state.openModal);
  const currentModal = useModalStore((state) => state.currentModal);
  const currentAddress = useAddressStore((state) => state.currentAddress);

  console.log(currentModal);

  return (
    <div className="fixed inset-x-0 top-0 h-16 flex items-center justify-center shadow-sm border-b bg-white z-10">
      <div className="flex w-full max-w-[1600px] items-center justify-between px-4 md:px-6">
        <p className="font-omnes text-3xl font-semibold font-wolt">
          <span className="inline text-wolt-blue">Wolt</span> Picker
        </p>
        <button
          onClick={() => {
            openModal(ModalTypes.ADDRESS);
          }}
          className="flex cursor-pointer items-center gap-x-2"
        >
          <div className="text-sm">
            <p className="w-max opacity-[56%]">Current Location</p>
            <p className="-mt-0.5 font-medium text-wolt-blue text-end">
              {currentAddress.name}
            </p>
          </div>

          <HiChevronDown className="text-2xl text-wolt-blue" />
        </button>
      </div>
    </div>
  );
}
