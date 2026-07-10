import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { getSessionId, getCompare, addToCompareApi, removeCompareItem, clearCompareApi } from "./api";

const CompareContext = createContext(null);
const MAX_COMPARE = 4;

// Compare now lives in MongoDB Atlas, same as Cart and Wishlist — one row per
// (sessionId, product) pair, so it persists and stays consistent with the
// rest of the app instead of being tied to a single browser's storage.
export function CompareProvider({ children }) {
  const [compareItems, setCompareItems] = useState([]);
  const sessionId = getSessionId();

  const refreshCompare = useCallback(async () => {
    try {
      const items = await getCompare(sessionId);
      setCompareItems(items);
    } catch (e) {
      console.error("Failed to load compare list", e);
    }
  }, [sessionId]);

  useEffect(() => {
    refreshCompare();
  }, [refreshCompare]);

  // Defensive filter — the backend now cleans out orphaned rows itself, but
  // this guards against a stale cached response ever crashing the app.
  const compareIds = compareItems.filter((item) => item.product).map((item) => item.product._id);

  async function addToCompare(productId) {
    if (compareIds.includes(productId)) return;
    if (compareItems.length >= MAX_COMPARE) {
      alert(`You can compare up to ${MAX_COMPARE} products at a time. Remove one first.`);
      return;
    }
    try {
      await addToCompareApi(productId);
      refreshCompare();
    } catch (e) {
      alert(e.message);
    }
  }

  async function removeFromCompare(productId) {
    const item = compareItems.find((i) => i.product._id === productId);
    if (!item) return;
    await removeCompareItem(item._id);
    refreshCompare();
  }

  async function toggleCompare(productId) {
    if (compareIds.includes(productId)) {
      await removeFromCompare(productId);
    } else {
      await addToCompare(productId);
    }
  }

  async function clearCompare() {
    await clearCompareApi(sessionId);
    refreshCompare();
  }

  return (
    <CompareContext.Provider
      value={{
        compareItems,
        compareIds,
        addToCompare,
        removeFromCompare,
        toggleCompare,
        clearCompare,
        refreshCompare,
        MAX_COMPARE,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const ctx = useContext(CompareContext);
  if (!ctx) throw new Error("useCompare must be used inside <CompareProvider>");
  return ctx;
}
