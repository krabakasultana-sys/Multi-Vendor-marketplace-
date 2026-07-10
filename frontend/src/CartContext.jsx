import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { getSessionId, getCart, getWishlist } from "./api";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const sessionId = getSessionId();

  const refreshCart = useCallback(async () => {
    try {
      const items = await getCart(sessionId);
      setCartItems(items);
    } catch (e) {
      console.error("Failed to load cart", e);
    }
  }, [sessionId]);

  const refreshWishlist = useCallback(async () => {
    try {
      const items = await getWishlist(sessionId);
      setWishlistItems(items);
    } catch (e) {
      console.error("Failed to load wishlist", e);
    }
  }, [sessionId]);

  useEffect(() => {
    refreshCart();
    refreshWishlist();
  }, [refreshCart, refreshWishlist]);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cartItems, wishlistItems, cartCount, refreshCart, refreshWishlist }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
