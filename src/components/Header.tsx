import { FaBox } from "react-icons/fa";

export default function Header() {
  return (
    <header className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-600 to-sky-600 text-white">
              <FaBox className="text-base" />
            </div>
            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-cyan-600">
              Hệ thống quản lý
            </p>
          </div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Bảng điều khiển sản phẩm
          </h1>
          <p className="text-sm text-slate-600">
            Quản lý toàn bộ sản phẩm và tồn kho một cách hiệu quả
          </p>
        </div>
      </div>
    </header>
  );
}
