import { useState } from "react";

function ProductForm({ onAdd }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      name,
      category,
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
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="mb-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-600 font-semibold">
              Thêm sản phẩm
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              Nhập thông tin sản phẩm
            </h2>
          </div>
          <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-700">
            Nhanh chóng
          </span>
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-500">
          Điền tên, danh mục và giá để thêm sản phẩm vào danh sách một cách
          chính xác.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">
          Tên sản phẩm
          <input
            className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100"
            placeholder="Nhập tên sản phẩm"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label className="block text-sm font-medium text-slate-700">
          Danh mục
          <input
            className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100"
            placeholder="Nhập danh mục"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-slate-700">
          Giá
          <input
            type="number"
            className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100"
            placeholder="Nhập giá sản phẩm"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button className="w-full rounded-2xl bg-cyan-600 px-5 py-3 text-white transition hover:bg-cyan-700 sm:w-auto">
          Thêm sản phẩm
        </button>
        <p className="text-sm text-slate-500">
          Lưu ý: Giá phải là số và không được để trống.
        </p>
      </div>
    </form>
  );
}

export default ProductForm;
