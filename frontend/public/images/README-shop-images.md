# Put your product images here

This folder is intentionally empty — drop your 30 product images directly
here, with no subfolders.

## Naming
Name your files `1st.png`, `2nd.png`, `3rd.png`, `4th.png` ... `30th.png` —
one per product, in the same order they appear in `backend/seed.js`. All
lowercase, no spaces. `.png`/`.jpg`/`.webp` are all fine as long as the
extension in the filename matches what's written in `seed.js`.

## How they get used
Each product in `backend/seed.js` has an `image` field like:

```js
image: "/images/1st.png",
```

That path is relative to this folder. Once you add a file here named
`1st.png`, that line will make it show up on the product card.

After adding/renaming images, re-run the seed script from the backend folder
so MongoDB Atlas gets updated:

```
npm run seed
```

Then refresh your browser — no restart needed for the frontend.

## Adding products beyond the first 30
Use the Admin page (`/admin` in your app, linked in the footer) — you can
upload an image file directly there (it gets embedded in the product
document) or type a path like `/images/31st.png` if you'd rather drop the
file in here yourself.

## One extra image outside the product catalog
`32nd.png` is used specifically for the "Apple Watch Series 7" promo banner
at the bottom of the category sidebar (`frontend/src/components/Sidebar.jsx`)
— it's not tied to any single product, just decorative. If it's missing, the
banner still works fine, it just won't show that image.
