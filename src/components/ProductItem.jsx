function ProductItem({ product, onDelete }) {
  return (
    <tr className="transition hover:bg-slate-50">
      <td className="px-6 py-4 text-slate-600">{product.id}</td>
      <td className="px-6 py-4 font-medium text-slate-900">{product.name}</td>
      <td className="px-6 py-4 text-slate-500">{product.category}</td>
      <td className="px-6 py-4 text-slate-600">
        {new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
          maximumFractionDigits: 0,
        }).format(product.price)}
      </td>
      <td className="px-6 py-4">
        <button
          onClick={() => onDelete(product.id)}
          className="rounded-lg bg-rose-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-rose-600"
        >
          Xóa
        </button>
      </td>
    </tr>
  );
}

export default ProductItem;
