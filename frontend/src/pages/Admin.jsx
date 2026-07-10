import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts, createProduct, updateProduct, deleteProduct } from "../api";
import { FALLBACK_CATEGORIES as CATEGORY_SUGGESTIONS } from "../categoryIcons";

const BLANK_FORM = {
  name: "", brand: "", category: "", sku: "", price: "", oldPrice: "",
  discountPercent: "", image: "", images: "", rating: "4.5", reviewCount: "0",
  stock: "100", description: "", features: "", badge: "",
  colorOptions: "", sizeOptions: "", memoryOptions: "", storageOptions: "",
};

// Turns a comma-separated string like "a, b, c" into ["a","b","c"], dropping
// empty entries — used for every list-style field below.
function splitList(str) {
  return str.split(",").map((s) => s.trim()).filter(Boolean);
}

// The reverse — used when loading a product back into the form for editing.
function joinList(arr) {
  return (arr || []).join(", ");
}

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null); // null = "adding new"
  const [form, setForm] = useState(BLANK_FORM);
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  function loadProducts() {
    setLoading(true);
    getProducts({})
      .then(setProducts)
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    loadProducts();
  }, []);

  function startAdd() {
    setEditingId(null);
    setForm(BLANK_FORM);
    setShowForm(true);
    setError(null);
  }

  function startEdit(p) {
    setEditingId(p._id);
    setForm({
      name: p.name || "",
      brand: p.brand || "",
      category: p.category || "",
      sku: p.sku || "",
      price: p.price ?? "",
      oldPrice: p.oldPrice ?? "",
      discountPercent: p.discountPercent ?? "",
      image: p.image || "",
      images: joinList(p.images),
      rating: p.rating ?? "4.5",
      reviewCount: p.reviewCount ?? "0",
      stock: p.stock ?? "100",
      description: p.description || "",
      features: joinList(p.features),
      badge: p.badge || "",
      colorOptions: joinList(p.colorOptions),
      sizeOptions: joinList(p.sizeOptions),
      memoryOptions: joinList(p.memoryOptions),
      storageOptions: joinList(p.storageOptions),
    });
    setShowForm(true);
    setError(null);
  }

  function updateField(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      const payload = {
        name: form.name,
        brand: form.brand,
        category: form.category,
        sku: form.sku,
        price: Number(form.price) || 0,
        oldPrice: form.oldPrice ? Number(form.oldPrice) : null,
        discountPercent: Number(form.discountPercent) || 0,
        image: form.image,
        images: splitList(form.images),
        rating: Number(form.rating) || 4.5,
        reviewCount: Number(form.reviewCount) || 0,
        stock: Number(form.stock) || 0,
        description: form.description,
        features: splitList(form.features),
        badge: form.badge,
        colorOptions: splitList(form.colorOptions),
        sizeOptions: splitList(form.sizeOptions),
        memoryOptions: splitList(form.memoryOptions),
        storageOptions: splitList(form.storageOptions),
      };

      if (editingId) {
        await updateProduct(editingId, payload);
      } else {
        await createProduct(payload);
      }
      setShowForm(false);
      loadProducts();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id) {
    if (!confirm("Delete this product? This can't be undone.")) return;
    await deleteProduct(id);
    loadProducts();
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-xl font-semibold">Admin — Manage Products</h1>
          <p className="text-sm text-slate-500">
            Add new products, edit existing ones (including category), or remove them. Changes save straight to
            MongoDB Atlas and show up on the shop immediately.
          </p>
        </div>
        <button
          onClick={startAdd}
          className="bg-accent hover:bg-accent-dark text-white text-sm rounded px-4 py-2 shrink-0"
        >
          + Add Product
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white border rounded p-5 mb-6 space-y-4">
          <h2 className="font-semibold text-sm">{editingId ? "Edit Product" : "New Product"}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="text-sm">
              Name
              <input
                required
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                className="border rounded w-full px-3 py-2 mt-1 text-sm outline-none"
              />
            </label>

            <label className="text-sm">
              Category
              <input
                required
                list="category-suggestions"
                value={form.category}
                onChange={(e) => updateField("category", e.target.value)}
                placeholder="Pick an existing one or type a new category"
                className="border rounded w-full px-3 py-2 mt-1 text-sm outline-none"
              />
              <datalist id="category-suggestions">
                {CATEGORY_SUGGESTIONS.map((c) => (
                  <option key={c} value={c} />
                ))}
              </datalist>
            </label>

            <label className="text-sm">
              Brand
              <input
                value={form.brand}
                onChange={(e) => updateField("brand", e.target.value)}
                className="border rounded w-full px-3 py-2 mt-1 text-sm outline-none"
              />
            </label>

            <label className="text-sm">
              SKU
              <input
                value={form.sku}
                onChange={(e) => updateField("sku", e.target.value)}
                className="border rounded w-full px-3 py-2 mt-1 text-sm outline-none"
              />
            </label>

            <label className="text-sm">
              Price ($)
              <input
                required
                type="number"
                step="0.01"
                value={form.price}
                onChange={(e) => updateField("price", e.target.value)}
                className="border rounded w-full px-3 py-2 mt-1 text-sm outline-none"
              />
            </label>

            <label className="text-sm">
              Old Price ($) — leave blank if not on sale
              <input
                type="number"
                step="0.01"
                value={form.oldPrice}
                onChange={(e) => updateField("oldPrice", e.target.value)}
                className="border rounded w-full px-3 py-2 mt-1 text-sm outline-none"
              />
            </label>

            <label className="text-sm">
              Discount %
              <input
                type="number"
                value={form.discountPercent}
                onChange={(e) => updateField("discountPercent", e.target.value)}
                className="border rounded w-full px-3 py-2 mt-1 text-sm outline-none"
              />
            </label>

            <label className="text-sm">
              Badge
              <select
                value={form.badge}
                onChange={(e) => updateField("badge", e.target.value)}
                className="border rounded w-full px-3 py-2 mt-1 text-sm outline-none"
              >
                <option value="">None</option>
                <option value="SALE">SALE</option>
                <option value="NEW">NEW</option>
                <option value="HOT">HOT</option>
                <option value="OUT OF STOCK">OUT OF STOCK</option>
              </select>
            </label>

            <label className="text-sm">
              Stock
              <input
                type="number"
                value={form.stock}
                onChange={(e) => updateField("stock", e.target.value)}
                className="border rounded w-full px-3 py-2 mt-1 text-sm outline-none"
              />
            </label>

            <label className="text-sm">
              Rating (0–5)
              <input
                type="number"
                step="0.1"
                min="0"
                max="5"
                value={form.rating}
                onChange={(e) => updateField("rating", e.target.value)}
                className="border rounded w-full px-3 py-2 mt-1 text-sm outline-none"
              />
            </label>

            <label className="text-sm">
              Review Count
              <input
                type="number"
                value={form.reviewCount}
                onChange={(e) => updateField("reviewCount", e.target.value)}
                className="border rounded w-full px-3 py-2 mt-1 text-sm outline-none"
              />
            </label>

            <label className="text-sm sm:col-span-2">
              Main Image — upload a file, or type a path like /images/31st.png
              <div className="flex items-center gap-3 mt-1">
                {form.image && (
                  <img
                    src={form.image}
                    alt="Preview"
                    className="w-14 h-14 object-contain border rounded shrink-0 bg-white"
                    onError={(e) => {
                      e.currentTarget.style.visibility = "hidden";
                    }}
                    onLoad={(e) => {
                      e.currentTarget.style.visibility = "visible";
                    }}
                  />
                )}
                <input
                  required
                  value={form.image}
                  onChange={(e) => updateField("image", e.target.value)}
                  placeholder="/images/31st.png"
                  className="border rounded flex-1 px-3 py-2 text-sm outline-none"
                />
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  // Read the file as a base64 data URL and store that directly
                  // as the image field — no separate backend upload endpoint
                  // needed, and it still renders/saves exactly like a normal
                  // image path would.
                  const reader = new FileReader();
                  reader.onload = () => updateField("image", reader.result);
                  reader.readAsDataURL(file);
                }}
                className="text-xs text-slate-500 mt-2"
              />
              <p className="text-xs text-slate-400 mt-1">
                Uploading a file embeds the image directly in the product (works immediately, no extra setup).
                Typing a path instead expects a matching file in <code>frontend/public/images/</code>.
              </p>
            </label>

            <label className="text-sm sm:col-span-2">
              Extra Gallery Images (comma-separated paths)
              <input
                value={form.images}
                onChange={(e) => updateField("images", e.target.value)}
                className="border rounded w-full px-3 py-2 mt-1 text-sm outline-none"
              />
            </label>

            <label className="text-sm sm:col-span-2">
              Description
              <textarea
                value={form.description}
                onChange={(e) => updateField("description", e.target.value)}
                rows={3}
                className="border rounded w-full px-3 py-2 mt-1 text-sm outline-none"
              />
            </label>

            <label className="text-sm sm:col-span-2">
              Features (comma-separated)
              <input
                value={form.features}
                onChange={(e) => updateField("features", e.target.value)}
                placeholder="Free 1 Year Warranty, 24/7 Customer support"
                className="border rounded w-full px-3 py-2 mt-1 text-sm outline-none"
              />
            </label>

            <label className="text-sm">
              Color Options (comma-separated hex codes)
              <input
                value={form.colorOptions}
                onChange={(e) => updateField("colorOptions", e.target.value)}
                placeholder="#111827, #f5f5f0"
                className="border rounded w-full px-3 py-2 mt-1 text-sm outline-none"
              />
            </label>

            <label className="text-sm">
              Size Options (comma-separated)
              <input
                value={form.sizeOptions}
                onChange={(e) => updateField("sizeOptions", e.target.value)}
                className="border rounded w-full px-3 py-2 mt-1 text-sm outline-none"
              />
            </label>

            <label className="text-sm">
              Memory Options (comma-separated)
              <input
                value={form.memoryOptions}
                onChange={(e) => updateField("memoryOptions", e.target.value)}
                className="border rounded w-full px-3 py-2 mt-1 text-sm outline-none"
              />
            </label>

            <label className="text-sm">
              Storage Options (comma-separated)
              <input
                value={form.storageOptions}
                onChange={(e) => updateField("storageOptions", e.target.value)}
                className="border rounded w-full px-3 py-2 mt-1 text-sm outline-none"
              />
            </label>
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={saving}
              className="bg-accent hover:bg-accent-dark text-white text-sm rounded px-5 py-2 disabled:opacity-50"
            >
              {saving ? "Saving..." : editingId ? "Save Changes" : "Create Product"}
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="border rounded px-5 py-2 text-sm text-slate-600"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="bg-white border rounded overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-slate-500">
            <tr>
              <th className="p-3">Image</th>
              <th className="p-3">Name</th>
              <th className="p-3">Category</th>
              <th className="p-3">Price</th>
              <th className="p-3">Stock</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr><td colSpan={6} className="p-6 text-center text-slate-400">Loading...</td></tr>
            )}
            {!loading && products.length === 0 && (
              <tr><td colSpan={6} className="p-6 text-center text-slate-400">No products yet.</td></tr>
            )}
            {products.map((p) => (
              <tr key={p._id} className="border-t">
                <td className="p-3">
                  <img src={p.image} alt="" className="w-10 h-10 object-contain" />
                </td>
                <td className="p-3">
                  <Link to={`/product/${p._id}`} className="hover:text-primary">{p.name}</Link>
                </td>
                <td className="p-3 text-slate-500">{p.category}</td>
                <td className="p-3">${p.price?.toFixed(2)}</td>
                <td className="p-3">{p.stock}</td>
                <td className="p-3 flex gap-2">
                  <button onClick={() => startEdit(p)} className="text-primary hover:underline text-xs">Edit</button>
                  <button onClick={() => handleDelete(p._id)} className="text-red-500 hover:underline text-xs">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
