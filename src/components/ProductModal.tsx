import type { Product } from "../types/product";
import type { FormEvent } from "react";
import { useState } from "react";

interface Props {
  onClose: () => void;
  onSave: (product: Product) => void;
}

export default function ProductModal({ onClose, onSave }: Props) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [image, setImage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSave({
      id: Date.now(),
      name,
      category,
      price,
      stock,
      image,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl rounded-[28px] bg-white p-6 shadow-2xl"
      >
        <div className="flex items-center justify-between gap-4 mb-5">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Add New Product
            </h2>
            <p className="text-sm text-slate-500">
              Enter all required information to save the product.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-2xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
          >
            Close
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="block text-sm font-medium text-slate-700">
            Product Name
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter product name"
              className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              required
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Category
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter category"
              className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              required
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Price
            <input
              type="number"
              value={price === 0 ? "" : price}
              onChange={(e) => setPrice(Number(e.target.value))}
              placeholder="Enter price"
              className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              required
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Stock
            <input
              type="number"
              value={stock === 0 ? "" : stock}
              onChange={(e) => setStock(Number(e.target.value))}
              placeholder="Enter stock quantity"
              className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              required
            />
          </label>

          <label className="block text-sm font-medium text-slate-700 md:col-span-2">
            Product image URL
            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Enter product image URL"
              className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
            />
          </label>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="submit"
            className="w-full rounded-2xl bg-cyan-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-cyan-700 transition sm:w-auto"
          >
            Save Product
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-2xl bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-200 transition sm:w-auto"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
