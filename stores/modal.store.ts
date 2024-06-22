import { create } from "zustand";

import { Modal, ModalTypes } from "@/types/modal.types";

interface ModalStore {
  currentModal: Modal;
  openModal: (modal: ModalTypes, options?: Omit<Modal, "modal">) => void;
  closeModal: () => void;
}

const useModalStore = create<ModalStore>()((set) => ({
  currentModal: { modal: "" },
  openModal: (modal, options) =>
    set(() => ({ currentModal: { ...options, modal } })),
  closeModal: () => set(() => ({ currentModal: { modal: "" } })),
}));

export default useModalStore;
