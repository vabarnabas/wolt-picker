import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment, ReactNode, useEffect } from "react";

import Spinner from "../spinner/spinner";

interface Props {
  title?: string;
  titleIcon?: JSX.Element;
  children: JSX.Element;
  onClose: () => void;
  className?: string;
  isFetching?: boolean;
}

export default function BaseModal({
  children,
  onClose,
  title,
  isFetching,
}: Props) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <Transition as={Fragment} appear show>
      <Dialog
        as="div"
        className="scrollbar-hide text-foreground-primary relative z-10 select-none"
        onClose={onClose}
      >
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[#202125] bg-opacity-80 backdrop-blur-sm" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="scrollbar-hide mx-4 w-full max-w-md transform rounded-2xl bg-white p-4 text-left align-middle shadow-xl transition-all">
                {title ? (
                  <DialogTitle>
                    <p className="mt-2 font-wolt text-3xl font-semibold">
                      {title}
                    </p>
                  </DialogTitle>
                ) : null}
                <div className="scrollbar-hide flex h-full min-h-[80px] w-full">
                  {!isFetching ? (
                    children
                  ) : (
                    <div className="flex min-h-full w-full items-center justify-center">
                      <Spinner className="text-xl" />
                    </div>
                  )}
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
