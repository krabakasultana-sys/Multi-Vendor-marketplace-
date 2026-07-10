import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBrands } from "../api";
import { FALLBACK_CATEGORIES, CATEGORY_ICONS, ALL_CATEGORIES_ICON, DEFAULT_CATEGORY_ICON } from "../categoryIcons";

const POPULAR_TAGS = [
  "Game", "iPhone", "TV", "Watch", "MacBook", "Speaker", "GoPro",
  "Headphone", "Power Bank", "SmartTV", "Tablet", "Microwave", "Samsung",
];

const PRICE_SLIDER_MAX = 10000;

// Preset ranges shown as radio options below the slider, same as the reference design.
const PRICE_PRESETS = [
  { label: "All Price", min: "", max: "" },
  { label: "Under $20", min: 0, max: 20 },
  { label: "$25 to $100", min: 25, max: 100 },
  { label: "$100 to $300", min: 100, max: 300 },
  { label: "$300 to $500", min: 300, max: 500 },
  { label: "$500 to $1,000", min: 500, max: 1000 },
  { label: "$1,000 to $10,000", min: 1000, max: 10000 },
];

// Shared thumb styling for both range inputs so they both look like a small
// white-and-orange circular handle, matching the reference slider.
const RANGE_THUMB_CLASSES =
  "pointer-events-none absolute w-full appearance-none bg-transparent " +
  "[&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none " +
  "[&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full " +
  "[&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-primary " +
  "[&::-webkit-slider-thumb]:shadow [&::-webkit-slider-thumb]:cursor-pointer " +
  "[&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none " +
  "[&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full " +
  "[&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-primary " +
  "[&::-moz-range-thumb]:cursor-pointer";

export default function Sidebar({
  categories = [],
  activeCategory,
  onCategoryChange,
  minPrice,
  maxPrice,
  onPriceChange,
  activeBrand,
  onBrandChange,
  onTagClick,
}) {
  const [brands, setBrands] = useState([]);
  const [localMin, setLocalMin] = useState(minPrice || "");
  const [localMax, setLocalMax] = useState(maxPrice || "");
  const navigate = useNavigate();

  useEffect(() => {
    getBrands().then(setBrands).catch(() => {});
  }, []);

  // Keep local slider state in sync if the parent (e.g. URL params) resets it.
  useEffect(() => {
    setLocalMin(minPrice || "");
    setLocalMax(maxPrice || "");
  }, [minPrice, maxPrice]);

  const categoryList = categories.length ? categories : FALLBACK_CATEGORIES;

  // If a page (e.g. Wishlist, Track Order) drops <Sidebar /> in without passing
  // handlers, fall back to navigating to the shop page with that filter applied,
  // instead of doing nothing.
  const handleCategoryChange =
    onCategoryChange || ((cat) => navigate(cat === "All" ? "/" : `/?category=${encodeURIComponent(cat)}`));
  const handleBrandChange = onBrandChange || ((brand) => navigate(`/?brand=${encodeURIComponent(brand)}`));
  const handleTagClick = onTagClick || ((tag) => navigate(`/?search=${encodeURIComponent(tag)}`));

  function commitPrice(min, max) {
    onPriceChange?.({ minPrice: min, maxPrice: max });
  }

  const sliderMin = localMin === "" ? 0 : Number(localMin);
  const sliderMax = localMax === "" ? PRICE_SLIDER_MAX : Number(localMax);
  const leftPct = (sliderMin / PRICE_SLIDER_MAX) * 100;
  const rightPct = 100 - (sliderMax / PRICE_SLIDER_MAX) * 100;

  function onMinSlider(e) {
    const val = Math.min(Number(e.target.value), sliderMax - 10);
    setLocalMin(val);
  }
  function onMaxSlider(e) {
    const val = Math.max(Number(e.target.value), sliderMin + 10);
    setLocalMax(val);
  }

  return (
    // sticky + self-start keeps this column pinned in the viewport while the
    // page scrolls, instead of scrolling away with the product grid.
    <aside className="w-full md:w-64 shrink-0 sticky top-4 self-start space-y-4 max-h-[calc(100vh-2rem)] overflow-y-auto">
      <div className="bg-white border rounded p-4">
        <h3 className="font-semibold text-sm mb-3 text-slate-800 tracking-wide">CATEGORY</h3>
        <ul className="space-y-3 text-sm">
          {[{ label: "Electronics Devices", value: "All", Icon: ALL_CATEGORIES_ICON }, ...categoryList.map((cat) => ({
            label: cat,
            value: cat,
            Icon: CATEGORY_ICONS[cat] || DEFAULT_CATEGORY_ICON,
          }))].map(({ label, value, Icon }) => {
            const checked = activeCategory === value || (value === "All" && !activeCategory);
            return (
              <li key={label}>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="category"
                    checked={checked}
                    onChange={() => handleCategoryChange(value)}
                    className="accent-accent w-4 h-4 shrink-0"
                  />
                  <Icon className={`shrink-0 ${checked ? "text-accent" : "text-slate-400"}`} size={15} />
                  <span
                    className={
                      checked ? "text-slate-900 font-semibold" : "text-slate-600 group-hover:text-primary"
                    }
                  >
                    {label}
                  </span>
                </label>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="bg-white border rounded p-4">
        <h3 className="font-semibold text-sm mb-4 text-slate-800 tracking-wide">PRICE RANGE</h3>

        {/* Dual-handle slider: two overlapping range inputs with a filled bar between them */}
        <div className="relative h-4 mb-4">
          <div className="absolute top-1/2 -translate-y-1/2 w-full h-1 bg-slate-200 rounded-full" />
          <div
            className="absolute top-1/2 -translate-y-1/2 h-1 bg-primary rounded-full"
            style={{ left: `${leftPct}%`, right: `${rightPct}%` }}
          />
          <input
            type="range"
            min="0"
            max={PRICE_SLIDER_MAX}
            step="10"
            value={sliderMin}
            onChange={onMinSlider}
            onMouseUp={() => commitPrice(localMin, localMax)}
            onTouchEnd={() => commitPrice(localMin, localMax)}
            className={`${RANGE_THUMB_CLASSES} top-1/2 -translate-y-1/2 h-4`}
          />
          <input
            type="range"
            min="0"
            max={PRICE_SLIDER_MAX}
            step="10"
            value={sliderMax}
            onChange={onMaxSlider}
            onMouseUp={() => commitPrice(localMin, localMax)}
            onTouchEnd={() => commitPrice(localMin, localMax)}
            className={`${RANGE_THUMB_CLASSES} top-1/2 -translate-y-1/2 h-4`}
          />
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            commitPrice(localMin, localMax);
          }}
          className="flex items-center gap-2 text-sm mb-4"
        >
          <input
            type="number"
            min="0"
            placeholder="Min price"
            value={localMin}
            onChange={(e) => setLocalMin(e.target.value)}
            className="border rounded px-2 py-1.5 w-full outline-none text-sm"
          />
          <span className="text-slate-400">–</span>
          <input
            type="number"
            min="0"
            placeholder="Max price"
            value={localMax}
            onChange={(e) => setLocalMax(e.target.value)}
            className="border rounded px-2 py-1.5 w-full outline-none text-sm"
          />
          <button type="submit" className="bg-primary text-white text-xs rounded px-3 py-1.5 shrink-0">
            Go
          </button>
        </form>

        <ul className="space-y-2.5 text-sm text-slate-600">
          {PRICE_PRESETS.map((preset) => {
            const isChecked = String(localMin) === String(preset.min) && String(localMax) === String(preset.max);
            return (
              <li key={preset.label}>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="pricePreset"
                    checked={isChecked}
                    onChange={() => {
                      setLocalMin(preset.min);
                      setLocalMax(preset.max);
                      commitPrice(preset.min, preset.max);
                    }}
                    className="accent-primary w-4 h-4"
                  />
                  <span className={isChecked ? "text-primary font-medium" : ""}>{preset.label}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="bg-white border rounded p-4">
        <h3 className="font-semibold text-sm mb-3 text-slate-800 tracking-wide">POPULAR BRANDS</h3>
        <ul className="space-y-2 text-sm text-slate-600">
          {(brands.length ? brands : ["Apple", "Samsung", "Sony", "Microsoft", "Dell", "HP"]).map((b) => (
            <li key={b} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={activeBrand === b}
                onChange={() => handleBrandChange(activeBrand === b ? "" : b)}
                className="accent-primary"
              />
              <span className={activeBrand === b ? "text-primary font-medium" : ""}>{b}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white border rounded p-4">
        <h3 className="font-semibold text-sm mb-3 text-slate-800 tracking-wide">POPULAR TAG</h3>
        <div className="flex flex-wrap gap-2">
          {POPULAR_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className="text-xs border rounded px-2.5 py-1 text-slate-600 hover:border-primary hover:text-primary"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded p-5 text-center">
        <img
          src="/images/32nd.png"
          alt="Apple Watch Series 7"
          className="mx-auto mb-3 w-28 h-28 object-contain"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <p className="text-sm font-semibold tracking-wide mb-0.5"> WATCH</p>
        <p className="text-xs text-accent font-semibold mb-2">SERIES 7</p>
        <p className="font-semibold mb-3">
          Heavy on Features.
          <br />
          Light on Price.
        </p>
        <p className="text-xs text-slate-400 mb-4">
          Only for <span className="text-accent font-semibold">$299 USD</span>
        </p>
        <div className="space-y-2">
          <button
            onClick={() => handleCategoryChange("Watches & Accessories")}
            className="w-full bg-accent hover:bg-accent-dark text-white text-xs font-medium rounded px-4 py-2 flex items-center justify-center gap-2"
          >
            🛒 ADD TO CART
          </button>
          <button
            onClick={() => handleCategoryChange("Watches & Accessories")}
            className="w-full border border-slate-600 hover:border-slate-400 text-white text-xs rounded px-4 py-2"
          >
            VIEW DETAILS →
          </button>
        </div>
      </div>
    </aside>
  );
}
