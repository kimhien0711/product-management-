import type { Product } from "../types/product";
import type { FormEvent } from "react";
import { useState } from "react";
import { FaBox, FaTag, FaDollarSign, FaImage, FaBoxes } from "react-icons/fa";

interface Props {
  product: Product;
  onClose: () => void;
  onSave: (product: Product) => void;
}

export default function EditProduct({ product, onClose, onSave }: Props) {
  const [name, setName] = useState(product.name);
  const [category, setCategory] = useState(product.category);
  const [price, setPrice] = useState(product.price);
  const [stock, setStock] = useState(product.stock);
  const [image, setImage] = useState(product.image);
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!name.trim() || !category.trim() || price <= 0 || stock < 0) {
      setError("Please fill in all fields and check the values");
      return;
    }

    onSave({
      id: product.id,
      name: name.trim(),
      category: category.trim(),
      price,
      stock,
      image: image.trim(),
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl rounded-[32px] bg-white p-8 shadow-2xl"
      >
        <div className="flex items-center justify-between gap-4 mb-6 border-b border-slate-200 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
                <FaBox className="text-base" />
              </div>
              <p className="text-xs uppercase tracking-[0.25em] font-semibold text-blue-600">
                Edit product
              </p>
            </div>
            <h2 className="text-xl font-semibold text-slate-900">
              Update product information
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-2xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
          >
            Close
          </button>
        </div>

        {error && (
          <div className="mb-4 rounded-2xl bg-red-50 border border-red-200 px-4 py-3">
            <p className="text-sm font-medium text-red-700">{error}</p>
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-2">
          <label className="block text-sm font-medium text-slate-700">
            <div className="flex items-center gap-2 mb-3">
              <FaTag className="text-blue-600 text-xs" />
              Product name <span className="text-red-500">*</span>
            </div>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter product name"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:bg-white"
              required
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            <div className="flex items-center gap-2 mb-3">
              <FaBox className="text-blue-600 text-xs" />
              Category <span className="text-red-500">*</span>
            </div>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter category"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:bg-white"
              required
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            <div className="flex items-center gap-2 mb-3">
              <FaDollarSign className="text-blue-600 text-xs" />
              Price (VND) <span className="text-red-500">*</span>
            </div>
            <input
              type="number"
              value={price === 0 ? "" : price}
              onChange={(e) => setPrice(Number(e.target.value))}
              placeholder="Enter price"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:bg-white"
              required
              min="0"
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            <div className="flex items-center gap-2 mb-3">
              <FaBoxes className="text-blue-600 text-xs" />
              Stock <span className="text-red-500">*</span>
            </div>
            <input
              type="number"
              value={stock === 0 ? "" : stock}
              onChange={(e) => setStock(Number(e.target.value))}
              placeholder="Enter quantity"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:bg-white"
              required
              min="0"
            />
          </label>

          <label className="block text-sm font-medium text-slate-700 md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <FaImage className="text-blue-600 text-xs" />
              Product image URL
            </div>
            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Enter image URL"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:bg-white"
            />
          </label>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow hover:shadow-md transition hover:from-blue-700 hover:to-cyan-700 sm:w-auto"
          >
            Save changes
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-2xl bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-200 transition sm:w-auto"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
