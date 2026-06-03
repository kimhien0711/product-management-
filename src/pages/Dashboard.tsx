import { useState } from "react";
import Header from "../components/Header";
import ProductModal from "../components/ProductModal";
import EditProduct from "../components/EditProduct";
import ConfirmDialog from "../components/ConfirmDialog";
import ProductTable from "../components/ProductTable";
import StatsCard from "../components/StatsCard";
import { initialProducts } from "../data/products";
import type { Product } from "../types/product";

interface ConfirmDelete {
  id: number;
  name: string;
}

export default function Dashboard() {
  const [products, setProducts] = useState(initialProducts);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<ConfirmDelete | null>(null);
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleDeleteClick = (id: number, name: string) => {
    setConfirmDelete({ id, name });
  };

  const handleConfirmDelete = () => {
    if (confirmDelete) {
      setProducts(
        products.filter((product) => product.id !== confirmDelete.id),
      );
      setConfirmDelete(null);
    }
  };

  const handleAdd = (product: Product) => {
    setProducts([...products, product]);
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
  };

  const handleSaveEdit = (updatedProduct: Product) => {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product,
      ),
    );
    setEditingProduct(null);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchKeyword.toLowerCase()),
  );

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
                Product Management Dashboard
              </p>
              <h1 className="text-3xl font-semibold text-slate-900">
                Table Control Panel
              </h1>
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center justify-center rounded-3xl bg-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-700"
            >
              + Add Product
            </button>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_320px]">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 shadow-sm">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                Summary
              </p>
              <p className="mt-3 text-3xl font-semibold text-slate-900">
                {searchKeyword ? filteredProducts.length : products.length}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 shadow-sm">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                Search Products
              </p>
              <input
                type="text"
                placeholder="Search products..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              />
            </div>
          </div>
        </section>

        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
          <ProductTable
            products={filteredProducts}
            onDelete={(id) => {
              const product = products.find((p) => p.id === id);
              if (product) {
                handleDeleteClick(id, product.name);
              }
            }}
            onEdit={handleEdit}
          />
        </div>

        {showModal && (
          <ProductModal
            onClose={() => setShowModal(false)}
            onSave={handleAdd}
          />
        )}

        {editingProduct && (
          <EditProduct
            product={editingProduct}
            onClose={() => setEditingProduct(null)}
            onSave={handleSaveEdit}
          />
        )}

        {confirmDelete && (
          <ConfirmDialog
            title="Confirm Product Deletion"
            message={`Are you sure you want to delete the product "${confirmDelete.name}"? This action cannot be undone.`}
            confirmText="Delete"
            cancelText="Cancel"
            isDestructive={true}
            onConfirm={handleConfirmDelete}
            onCancel={() => setConfirmDelete(null)}
          />
        )}
      </div>
    </div>
  );
}
