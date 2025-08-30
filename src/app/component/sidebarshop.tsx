"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function ShopSideBar() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="inline-block border border-gray-200 rounded p-4">
      <h1 className="text-lg font-semibold mb-2">Filter</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <div>
          <h2 className="font-medium">Categories</h2>
          <label className="flex items-center gap-2">
            <input type="checkbox" {...register("electronic")} />
            Electronic
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" {...register("sport")} />
            Sport
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" {...register("home&garden")} />
            Home & Garden
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" {...register("fashion")} />
            Fashion
          </label>
        </div>
        <div>
          <h2 className="font-medium">Price Range</h2>

          <label className="flex items-center gap-2">
            <input type="checkbox" {...register("priceUnder50")} />
            Under $50
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" {...register("price50to100")} />
            $50 - $100
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" {...register("price100to200")} />
            $100 - $200
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" {...register("price200to500")} />
            $200 - $500
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" {...register("priceAbove500")} />
            Above $500
          </label>
        </div>
        <button
          type="submit"
          className="bg-red-500 text-white px-3 py-1 rounded self-center text-sm"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
