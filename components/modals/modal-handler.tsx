"use client";
import useModalStore from "@/stores/modal.store";
import React from "react";
import AddressSelectorModal from "./address-modal";
import { ModalTypes } from "@/types/modal.types";
import NewAddressModal from "./new-address-modal";

export default function ModalHandler() {
  const currentModal = useModalStore((state) => state.currentModal);

  if (currentModal.modal === ModalTypes.ADDRESS)
    return <AddressSelectorModal />;

  return null;
}
