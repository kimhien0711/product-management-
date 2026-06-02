import { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";

import { initialProducts } from "../data/products";
import { getProducts, saveProducts } from "../services/productService";

function ProductPage() {
  const [products, setProducts] = useState(() => {
    try {
      const data = getProducts();
      return data && data.length > 0 ? data : initialProducts;
    } catch {
      return initialProducts;
    }
  });

  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const data = getProducts();
    if (!data || data.length === 0) {
      saveProducts(initialProducts);
    }
  }, []);

  const handleAdd = (product) => {
    const updated = [...products, product];

    setProducts(updated);
    saveProducts(updated);
  };

  const handleDelete = (id) => {
    const updated = products.filter((p) => p.id !== id);

    setProducts(updated);
    saveProducts(updated);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(keyword.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="rounded-[32px] border border-cyan-200 bg-gradient-to-r from-cyan-600 via-sky-500 to-indigo-600 px-8 py-10 shadow-xl text-white">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-100">
              Quản lý sản phẩm
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Bảng điều khiển sản phẩm
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-cyan-100/85">
              Quản lý danh sách sản phẩm với giao diện trực quan, chuyên nghiệp
              và dễ thao tác.
            </p>
          </div>
        </header>

        <main className="mt-8 grid gap-6 xl:grid-cols-[420px_minmax(0,1fr)]">
          <div className="space-y-6">
            <ProductForm onAdd={handleAdd} />
          </div>

          <section className="space-y-6">
            <div className="rounded-[32px] border border-slate-200 bg-white px-6 py-6 shadow-sm">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                    Tổng quan
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-slate-900">
                    Danh sách sản phẩm
                  </h2>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-50 px-4 py-3 text-center">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                      Tổng sản phẩm
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-slate-900">
                      {products.length}
                    </p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 px-4 py-3 text-center">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                      Đang hiển thị
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-slate-900">
                      {filteredProducts.length}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <SearchBar keyword={keyword} setKeyword={setKeyword} />
              </div>
            </div>

            <ProductList products={filteredProducts} onDelete={handleDelete} />
          </section>
        </main>
      </div>
    </div>
  );
}

export default ProductPage;
