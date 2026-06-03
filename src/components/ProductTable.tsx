import type { Product } from "../types/product";

interface Props {
  products: Product[];
  onDelete: (id: number) => void;
  onEdit: (product: Product) => void;
}

export default function ProductTable({ products, onDelete, onEdit }: Props) {
  if (products.length === 0) {
    return (
      <div className="bg-white rounded-[32px] border border-slate-200 p-12 text-center shadow-sm">
        <p className="text-slate-500 text-lg">No products to display.</p>
      </div>
    );
  }

  return (
    <div className="rounded-[32px] border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200">
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                Image
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                Product Name
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                Category
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                Price
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                Stock
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200">
            {products.map((product, index) => (
              <tr
                key={product.id}
                className={`transition hover:bg-slate-50 ${
                  index % 2 === 0 ? "bg-white" : "bg-slate-50/40"
                }`}
              >
                <td className="px-6 py-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 rounded-xl object-cover shadow-sm border border-slate-200"
                  />
                </td>

                <td className="px-6 py-4">
                  <p className="font-medium text-slate-900">{product.name}</p>
                </td>

                <td className="px-6 py-4">
                  <span className="inline-flex items-center rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-700">
                    {product.category}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <p className="text-sm font-semibold text-slate-900">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                      maximumFractionDigits: 0,
                    }).format(product.price)}
                  </p>
                </td>

                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div
                      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
                        product.stock > 5
                          ? "bg-green-100 text-green-700"
                          : product.stock > 0
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                      }`}
                    >
                      {product.stock}
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => onEdit(product)}
                      className="inline-flex items-center rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-100"
                    >
                      ✏️ Edit
                    </button>

                    <button
                      onClick={() => onDelete(product.id)}
                      className="inline-flex items-center rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-100"
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
