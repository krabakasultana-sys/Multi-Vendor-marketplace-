import {
  FaThLarge, FaLaptop, FaKeyboard, FaMobileAlt, FaHeadphones,
  FaPlug, FaGamepad, FaCamera, FaTv, FaClock, FaMapMarkerAlt, FaHeartbeat, FaTag,
} from "react-icons/fa";

// Full category list to fall back on if the backend hasn't been seeded yet,
// so category UI still looks complete during development. These must match
// the exact category strings used in backend/seed.js, or filtering silently
// returns nothing.
export const FALLBACK_CATEGORIES = [
  "Computer & Laptop", "Computer Accessories", "SmartPhone", "Headphone",
  "Mobile Accessories", "Gaming Console", "Camera & Photo",
  "TV & Home Appliances", "Watches & Accessories", "GPS & Navigation",
  "Wearable Technology",
];

// One icon per category, matched by exact string. Falls back to a generic
// tag icon for anything not listed here (e.g. a brand-new category someone
// adds later through the admin page).
export const CATEGORY_ICONS = {
  "Computer & Laptop": FaLaptop,
  "Computer Accessories": FaKeyboard,
  "SmartPhone": FaMobileAlt,
  "Headphone": FaHeadphones,
  "Mobile Accessories": FaPlug,
  "Gaming Console": FaGamepad,
  "Camera & Photo": FaCamera,
  "TV & Home Appliances": FaTv,
  "Watches & Accessories": FaClock,
  "GPS & Navigation": FaMapMarkerAlt,
  "Wearable Technology": FaHeartbeat,
};

// Icon used for the top-level "Electronics Devices" entry, which represents
// "show everything" rather than a real single category.
export const ALL_CATEGORIES_ICON = FaThLarge;
export const DEFAULT_CATEGORY_ICON = FaTag;
