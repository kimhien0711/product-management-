import type { Product } from "../types/product";

interface Props {
  products: Product[];
  onDelete: (id: number) => void;
  onEdit: (product: Product) => void;
}

export default function ProductTable({ products, onDelete, onEdit }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-slate-100">
            <th className="p-4">Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b hover:bg-slate-50">
              <td className="p-4">
                <img
                  src={product.image}
                  alt=""
                  className="w-14 h-14 rounded-lg object-cover"
                />
              </td>

              <td>{product.name}</td>

              <td>{product.category}</td>

              <td>${product.price}</td>

              <td>{product.stock}</td>

              <td>
                <button
                  onClick={() => onEdit(product)}
                  className="mr-3 text-blue-600"
                >
                  Edit
                </button>

                <button
                  onClick={() => onDelete(product.id)}
                  className="text-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
