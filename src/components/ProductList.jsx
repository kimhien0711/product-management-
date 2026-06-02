import ProductItem from "./ProductItem";

function ProductList({ products, onDelete }) {
  return (
    <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-slate-100 px-6 py-4">
        <h2 className="text-lg font-semibold text-slate-900">
          Danh sách sản phẩm
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Quản lý sản phẩm hiện có và thực hiện thao tác xóa.
        </p>
      </div>

      <div className="overflow-x-auto rounded-[24px] border border-slate-200 bg-white">
        <table className="min-w-full divide-y divide-slate-200 text-sm text-slate-700">
          <thead className="bg-cyan-50 text-cyan-700 uppercase tracking-[0.12em] text-xs">
            <tr>
              <th className="px-6 py-4 text-left font-semibold">ID</th>
              <th className="px-6 py-4 text-left font-semibold">Tên</th>
              <th className="px-6 py-4 text-left font-semibold">Danh mục</th>
              <th className="px-6 py-4 text-left font-semibold">Giá</th>
              <th className="px-6 py-4 text-left font-semibold">Hành động</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200 bg-white">
            {products.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="px-6 py-12 text-center text-slate-500"
                >
                  Không tìm thấy sản phẩm.
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <ProductItem
                  key={product.id}
                  product={product}
                  onDelete={onDelete}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductList;
