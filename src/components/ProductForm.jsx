import { useState } from "react";
import { FaBox, FaTag, FaDollarSign } from "react-icons/fa";

function ProductForm({ onAdd }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !category.trim() || !price.trim()) {
      setError("Vui lòng điền đầy đủ thông tin");
      return;
    }

    if (Number(price) <= 0) {
      setError("Giá phải lớn hơn 0");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: name.trim(),
      category: category.trim(),
      price: Number(price),
    };

    onAdd(newProduct);

    setName("");
    setCategory("");
    setPrice("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm"
    >
      <div className="mb-6 border-b border-slate-200 pb-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-600 to-sky-600 text-white">
                <FaBox className="text-base" />
              </div>
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-600 font-semibold">
                Thêm sản phẩm
              </p>
            </div>
            <h2 className="text-xl font-semibold text-slate-900">
              Nhập thông tin sản phẩm mới
            </h2>
          </div>
        </div>
        <p className="mt-3 text-sm text-slate-600">
          Điền đầy đủ các trường bắt buộc để thêm sản phẩm vào hệ thống.
        </p>
      </div>

      {error && (
        <div className="mb-4 rounded-2xl bg-red-50 border border-red-200 px-4 py-3">
          <p className="text-sm font-medium text-red-700">{error}</p>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 mb-4">
        <label className="block text-sm font-medium text-slate-700">
          <div className="flex items-center gap-2 mb-3">
            <FaTag className="text-cyan-600 text-xs" />
            Tên sản phẩm <span className="text-red-500">*</span>
          </div>
          <input
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 focus:bg-white"
            placeholder="VD: iPhone 15 Pro"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label className="block text-sm font-medium text-slate-700">
          <div className="flex items-center gap-2 mb-3">
            <FaBox className="text-cyan-600 text-xs" />
            Danh mục <span className="text-red-500">*</span>
          </div>
          <input
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 focus:bg-white"
            placeholder="VD: Điện thoại"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </label>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-slate-700">
          <div className="flex items-center gap-2 mb-3">
            <FaDollarSign className="text-cyan-600 text-xs" />
            Giá (VND) <span className="text-red-500">*</span>
          </div>
          <input
            type="number"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 focus:bg-white"
            placeholder="VD: 15000000"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            min="0"
          />
        </label>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
        <button
          type="submit"
          className="w-full rounded-2xl bg-gradient-to-r from-cyan-600 to-sky-600 px-6 py-3 text-white font-semibold shadow-sm transition hover:shadow-md hover:from-cyan-700 hover:to-sky-700 sm:w-auto"
        >
          + Thêm sản phẩm
        </button>
      </div>
    </form>
  );
}

export default ProductForm;
