import { FaSearch } from "react-icons/fa";

interface Props {
  keyword: string;
  setKeyword: (value: string) => void;
}

export default function SearchBar({ keyword, setKeyword }: Props) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-slate-50 px-4 py-4 shadow-sm transition hover:shadow-md">
      <label htmlFor="product-search" className="sr-only">
        Tìm kiếm sản phẩm
      </label>
      <div className="flex items-center gap-3">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-600 text-white shadow">
          <FaSearch />
        </span>
        <input
          id="product-search"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Tìm kiếm theo tên sản phẩm..."
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
        />
      </div>
    </div>
  );
}
