import clsx from "clsx";
import React from "react";
import { HiOfficeBuilding, HiPlus } from "react-icons/hi";

import useModalStore from "@/stores/modal.store";
import BaseModal from "./base-modal";
import useAddressStore from "@/stores/address.store";
import Input from "../form/input";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function NewAddressModal() {
  const closeModal = useModalStore((state) => state.closeModal);

  const form = useForm({
    // resolver: zodResolver(),
  });
  const { control } = form;

  return (
    <BaseModal title="Add New Address" onClose={closeModal}>
      <FormProvider {...form}>
        <form className="mt-4 w-full flex flex-col gap-y-2">
          <Controller
            name="address"
            render={({ field }) => (
              <Input {...field} placeholder="Street name and number" />
            )}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            className="font-medium text-wolt-blue hover:opacity-90 text-left text-sm my-2"
          >
            Validate Address
          </button>
          <button className="bg-wolt-blue rounded-lg px-4 py-2.5 text-sm font-semibold hover:opacity-90 transition-all ease-in-out duration-150 text-white">
            Continue
          </button>
        </form>
      </FormProvider>
    </BaseModal>
  );
}
