import clsx from "clsx";
import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: string;
}

export default function Input({ error, ...rest }: Props) {
  return (
    <div>
      <input
        className={clsx(
          "box-border w-full border-2 py-2 px-[0.875rem] rounded-lg text-sm  appearance-none outline-none transition-all duration-150 ease-out",
          error
            ? "border-rose-400"
            : "hover:border-wolt-blue focus:border-wolt-blue"
        )}
        {...rest}
      />
      {error ? <p className=" text-rose-400 text-xs mt-1">{error}</p> : null}
    </div>
  );
}
