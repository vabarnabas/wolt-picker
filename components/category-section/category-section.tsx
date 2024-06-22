import useCategories from "@/hooks/useCategories";
import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import CategoryCard from "../category-card/category-card";
import { Category } from "@/types/category.types";
import { IoRestaurant } from "react-icons/io5";
import Spinner from "../spinner/spinner";

export default function CategorySection() {
  const {
    data: categories,
    error: categoryError,
    isValidating: categoryIsValidating,
  } = useCategories();

  return (
    <>
      <p className="font-wolt text-3xl font-semibold">Categories</p>
      <ScrollContainer className="mt-2 flex h-max w-full gap-x-2 overflow-visible px-1 pb-2 pt-2">
        {categoryIsValidating ? (
          <div className="flex flex-col justify-center items-center h-full flex-grow">
            <Spinner />
          </div>
        ) : categoryError || !categories ? (
          <div className="flex flex-col justify-center items-center h-full flex-grow">
            <div className="h-24 w-24 bg-wolt-blue/10 rounded-full flex justify-center items-center">
              <IoRestaurant className="text-wolt-blue text-6xl" />
            </div>
            <p className="font-semibold font-wolt text-3xl mt-4">
              Failed to Load Restaurants
            </p>
            <p className="opacity-60 mt-0.5">
              Please check your address or try again later
            </p>
          </div>
        ) : (
          categories.map((category: Category) => (
            <CategoryCard
              key={`category_${category.content_id}`}
              category={category}
            />
          ))
        )}
      </ScrollContainer>
    </>
  );
}
