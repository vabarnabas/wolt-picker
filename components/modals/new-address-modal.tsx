import clsx from "clsx";
import React from "react";
import { HiOfficeBuilding, HiPlus } from "react-icons/hi";

import useModalStore from "@/stores/modal.store";
import BaseModal from "./base-modal";
import useAddressStore from "@/stores/address.store";
import Input from "../form/input";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useSWRMutation from "swr/mutation";

type FormData = {
  address: string;
  streetLine: string;
  name: string;
  lon: number;
  lat: number;
};

export default function NewAddressModal() {
  const closeModal = useModalStore((state) => state.closeModal);
  const createAddress = useAddressStore((state) => state.createAddress);

  const form = useForm<FormData>({
    // resolver: zodResolver(),
  });
  const { control, getValues, watch, setValue, handleSubmit } = form;

  const { trigger, data } = useSWRMutation(
    "/api/addresses",
    async (url, { arg: address }: { arg: string }) => {
      const response = await fetch(
        `${url}?${new URLSearchParams(`?address=${address}`)}`
      );
      const data = await response.json();
      setValue(
        "name",
        data.name
          ? data.name
          : `${data.address.road} ${data.address.house_number}`
      );
      setValue("lon", data.lon);
      setValue("lat", data.lat);
      setValue("streetLine", data.display_name);
      return data;
    }
  );

  const onSubmit = handleSubmit((formData) => {
    createAddress({
      lat: formData.lat,
      lon: formData.lon,
      name: formData.name,
      streetLine: formData.streetLine,
      canBeDeleted: true,
    });
    closeModal();
  });

  watch();

  return (
    <BaseModal title="Add New Address" onClose={closeModal}>
      <FormProvider {...form}>
        <form onSubmit={onSubmit} className="w-full flex flex-col gap-y-2">
          <div className="w-full flex gap-x-2 items-center">
            <div className="w-full">
              <Controller
                control={control}
                name="address"
                render={({ field }) => (
                  <Input {...field} placeholder="Street name and number" />
                )}
              />
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                if (getValues("address") && getValues("address").length >= 3) {
                  trigger(getValues("address"));
                }
              }}
              className="text-wolt-blue text-sm font-medium hover:opacity-90 transition-all ease-in-out duration-150 w-max"
            >
              Validate Address
            </button>
          </div>
          {data ? (
            <div className="bg-wolt-blue/[8%] text-wolt-blue p-2 rounded-lg text-sm">
              {data.display_name}
            </div>
          ) : null}
          <button
            disabled={!data}
            className="bg-wolt-blue rounded-lg px-4 py-2.5 text-sm font-semibold hover:opacity-90 transition-all ease-in-out duration-150 text-white disabled:bg-light-gray/[16%] disabled:cursor-not-allowed"
          >
            Continue
          </button>
        </form>
      </FormProvider>
    </BaseModal>
  );
}
