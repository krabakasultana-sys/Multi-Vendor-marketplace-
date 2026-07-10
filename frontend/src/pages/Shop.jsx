import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { getProducts, getCategories } from "../api";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import Pagination from "../components/Pagination";

const PAGE_SIZE = 8;

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const activeCategory = searchParams.get("category") || "All";
  const search = searchParams.get("search") || "";
  const minPrice = searchParams.get("minPrice") || "";
  const maxPrice = searchParams.get("maxPrice") || "";
  const activeBrand = searchParams.get("brand") || "";
  const [sort, setSort] = useState("newest");
  const [page, setPage] = useState(1);
  const [searchBox, setSearchBox] = useState(search);

  // Keep the search box in sync if the URL changes some other way
  // (e.g. clicking a popular tag in the sidebar).
  useEffect(() => {
    setSearchBox(search);
  }, [search]);

  useEffect(() => {
    getCategories().then(setCategories).catch(() => {});
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getProducts({ category: activeCategory, search, sort, minPrice, maxPrice, brand: activeBrand })
      .then(setProducts)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [activeCategory, search, sort, minPrice, maxPrice, activeBrand]);

  // Whenever a filter changes, jump back to page 1 — staying on page 4 of a
  // now-shorter filtered list would just show a blank page.
  useEffect(() => {
    setPage(1);
  }, [activeCategory, search, sort, minPrice, maxPrice, activeBrand]);

  const totalPages = Math.max(1, Math.ceil(products.length / PAGE_SIZE));
  const visibleProducts = products.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  // Small helper: update one query param while keeping the others intact.
  function updateParam(key, value) {
    const next = new URLSearchParams(searchParams);
    if (value) next.set(key, value);
    else next.delete(key);
    setSearchParams(next);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row gap-6 items-start">
      <Sidebar
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={(cat) => updateParam("category", cat === "All" ? "" : cat)}
        minPrice={minPrice}
        maxPrice={maxPrice}
        onPriceChange={({ minPrice, maxPrice }) => {
          const next = new URLSearchParams(searchParams);
          minPrice ? next.set("minPrice", minPrice) : next.delete("minPrice");
          maxPrice ? next.set("maxPrice", maxPrice) : next.delete("maxPrice");
          setSearchParams(next);
        }}
        activeBrand={activeBrand}
        onBrandChange={(brand) => updateParam("brand", brand)}
        onTagClick={(tag) => updateParam("search", tag)}
      />

      <main className="flex-1 w-full">
        <nav className="text-xs text-slate-500 mb-3 flex items-center gap-1.5">
          <span>🏠</span>
          <span>Home</span>
          <span>›</span>
          <span>Shop</span>
          <span>›</span>
          <span>Shop Grid</span>
          {activeCategory !== "All" && (
            <>
              <span>›</span>
              <span className="text-primary">{activeCategory}</span>
            </>
          )}
        </nav>

        <div className="bg-white border rounded p-3 mb-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              updateParam("search", searchBox);
            }}
            className="flex-1"
          >
            <div className="flex border rounded overflow-hidden">
              <input
                value={searchBox}
                onChange={(e) => setSearchBox(e.target.value)}
                placeholder="Search for anything..."
                className="flex-1 px-3 py-2 text-sm outline-none"
              />
              <button className="px-4 text-slate-500 hover:text-primary">🔍</button>
            </div>
          </form>

          <label className="flex items-center gap-2 text-sm text-slate-500 shrink-0">
            Sort by:
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border rounded px-2 py-2 text-sm outline-none text-slate-700"
            >
              <option value="newest">Most Popular</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="rating">Best Rating</option>
            </select>
          </label>
        </div>

        <div className="bg-slate-50 border rounded px-3 py-2 mb-4 flex flex-wrap items-center gap-2 text-sm">
          <span className="text-slate-500">Active Filters:</span>
          {activeCategory !== "All" && (
            <button
              onClick={() => updateParam("category", "")}
              className="bg-white border rounded-full px-3 py-1 text-xs flex items-center gap-1.5 hover:border-primary"
            >
              {activeCategory} <span className="text-slate-400">×</span>
            </button>
          )}
          {activeBrand && (
            <button
              onClick={() => updateParam("brand", "")}
              className="bg-white border rounded-full px-3 py-1 text-xs flex items-center gap-1.5 hover:border-primary"
            >
              {activeBrand} <span className="text-slate-400">×</span>
            </button>
          )}
          {search && (
            <button
              onClick={() => updateParam("search", "")}
              className="bg-white border rounded-full px-3 py-1 text-xs flex items-center gap-1.5 hover:border-primary"
            >
              "{search}" <span className="text-slate-400">×</span>
            </button>
          )}
          {(minPrice || maxPrice) && (
            <button
              onClick={() => {
                const next = new URLSearchParams(searchParams);
                next.delete("minPrice");
                next.delete("maxPrice");
                setSearchParams(next);
              }}
              className="bg-white border rounded-full px-3 py-1 text-xs flex items-center gap-1.5 hover:border-primary"
            >
              ${minPrice || 0} - ${maxPrice || "10,000"} <span className="text-slate-400">×</span>
            </button>
          )}
          {activeCategory === "All" && !activeBrand && !search && !minPrice && !maxPrice && (
            <span className="text-slate-400 text-xs">None — showing everything</span>
          )}
          <span className="ml-auto text-slate-500 whitespace-nowrap">
            <span className="font-semibold text-slate-800">{products.length.toLocaleString()}</span> Results found
          </span>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 text-sm p-3 rounded mb-4">
            Couldn't reach the backend: {error}. Make sure the API server is running (see README).
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {visibleProducts.map((p) => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>

        {!loading && products.length === 0 && !error && (
          <p className="text-center text-slate-400 py-12">No products found.</p>
        )}

        <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      </main>
    </div>
  );
}
