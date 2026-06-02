import { useState } from "react";
import Header from "../components/Header";
import ProductModal from "../components/ProductModal";
import ProductTable from "../components/ProductTable";
import StatsCard from "../components/StatsCard";
import { initialProducts } from "../data/products";
import type { Product } from "../types/product";

export default function Dashboard() {
  const [products, setProducts] = useState(initialProducts);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleAdd = (product: Product) => {
    setProducts([...products, product]);
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Header />

        <div className="grid md:grid-cols-4 gap-6 my-6">
          <StatsCard title="Products" value={products.length} />
          <StatsCard title="Revenue" value="$50,000" />
          <StatsCard title="Orders" value="350" />
          <StatsCard title="Categories" value="12" />
        </div>

        <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm mb-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                Trình quản lý sản phẩm
              </p>
              <h1 className="text-3xl font-semibold text-slate-900">
                Bảng điều khiển sản phẩm
              </h1>
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center justify-center rounded-3xl bg-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-700"
            >
              + Thêm sản phẩm
            </button>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_320px]">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 shadow-sm">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                Tổng sản phẩm
              </p>
              <p className="mt-3 text-3xl font-semibold text-slate-900">
                {products.length}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 shadow-sm">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                Tìm sản phẩm
              </p>
              <input
                type="text"
                placeholder="Nhập tên sản phẩm..."
                className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              />
            </div>
          </div>
        </section>

        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
          <ProductTable
            products={products}
            onDelete={handleDelete}
            onEdit={() => {}}
          />
        </div>

        {showModal && (
          <ProductModal
            onClose={() => setShowModal(false)}
            onSave={handleAdd}
          />
        )}
      </div>
    </div>
  );
}
