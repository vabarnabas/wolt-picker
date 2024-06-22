import { Category } from "@/types/category.types";
import Image from "next/image";
import React from "react";

interface Props {
  category: Category;
}

export default function CategoryCard({ category }: Props) {
  return (
    <button
      key={category.title}
      className="h-max w-full min-w-[200px] cursor-pointer rounded-lg bg-white hover:shadow-md shadow transition-all duration-300 ease-out hover:scale-[103%] text-left"
    >
      <div className="relative h-[60%] min-h-[10rem] overflow-hidden rounded-t-lg">
        <Image
          src={category.image.url}
          layout="fill"
          alt=""
          objectFit="cover"
        />
      </div>
      <div className="w-full p-4">
        <p className="text-lg font-medium">{category.title}</p>
        <p className="mt-1 text-sm opacity-[56%]">{category.quantity_str}</p>
      </div>
    </button>
  );
}
