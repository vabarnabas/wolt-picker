import clsx from "clsx";
import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export default function Input({ ...rest }: Props) {
  return (
    <input
      className={clsx(
        "box-border w-full border-2 py-2 px-[0.875rem] rounded-lg text-sm hover:border-wolt-blue focus:border-wolt-blue appearance-none outline-none transition-all duration-150 ease-out"
      )}
      {...rest}
    />
  );
}
