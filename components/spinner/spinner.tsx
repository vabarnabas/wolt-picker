import clsx from "clsx";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface Props {
  className?: string;
}

export default function Spinner({ className }: Props) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <AiOutlineLoading3Quarters
        className={clsx("animate-spin text-3xl", className)}
      />
    </div>
  );
}
