// Base URL of the backend API. Set VITE_API_URL in a .env file for production.
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// Every visitor gets a random "session id" stored in localStorage so their
// cart/wishlist persist across page reloads without needing a login system.
export function getSessionId() {
  let id = localStorage.getItem("clicon_session_id");
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem("clicon_session_id", id);
  }
  return id;
}

async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `Request failed: ${res.status}`);
  }
  return res.json();
}

// ---- Products ----
export const getProducts = (params = {}) => {
  const query = new URLSearchParams(params).toString();
  return request(`/products${query ? `?${query}` : ""}`);
};
export const getCategories = () => request("/products/categories");
export const getBrands = () => request("/products/brands");
export const getProduct = (id) => request(`/products/${id}`);
export const createProduct = (data) => request("/products", { method: "POST", body: JSON.stringify(data) });
export const updateProduct = (id, data) => request(`/products/${id}`, { method: "PUT", body: JSON.stringify(data) });
export const deleteProduct = (id) => request(`/products/${id}`, { method: "DELETE" });

// ---- Cart ----
export const getCart = (sessionId) => request(`/cart/${sessionId}`);
export const addToCart = (productId, quantity = 1) =>
  request("/cart", {
    method: "POST",
    body: JSON.stringify({ sessionId: getSessionId(), productId, quantity }),
  });
export const updateCartItem = (id, quantity) =>
  request(`/cart/${id}`, { method: "PUT", body: JSON.stringify({ quantity }) });
export const removeCartItem = (id) => request(`/cart/${id}`, { method: "DELETE" });

// ---- Wishlist ----
export const getWishlist = (sessionId) => request(`/wishlist/${sessionId}`);
export const addToWishlist = (productId) =>
  request("/wishlist", {
    method: "POST",
    body: JSON.stringify({ sessionId: getSessionId(), productId }),
  });
export const removeWishlistItem = (id) => request(`/wishlist/${id}`, { method: "DELETE" });

// ---- Compare ----
export const getCompare = (sessionId) => request(`/compare/${sessionId}`);
export const addToCompareApi = (productId) =>
  request("/compare", {
    method: "POST",
    body: JSON.stringify({ sessionId: getSessionId(), productId }),
  });
export const removeCompareItem = (id) => request(`/compare/${id}`, { method: "DELETE" });
export const clearCompareApi = (sessionId) => request(`/compare/session/${sessionId}`, { method: "DELETE" });

// ---- Orders ----
export const placeOrder = (payload) =>
  request("/orders", { method: "POST", body: JSON.stringify({ ...payload, sessionId: getSessionId() }) });
export const trackOrder = (orderNumber, email) =>
  request(`/orders/track?orderNumber=${encodeURIComponent(orderNumber)}&email=${encodeURIComponent(email || "")}`);
export const getOrder = (id) => request(`/orders/${id}`);
export const updateOrderStatus = (id, status) =>
  request(`/orders/${id}/status`, { method: "PUT", body: JSON.stringify({ status }) });
