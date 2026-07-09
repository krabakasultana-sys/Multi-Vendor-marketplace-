const badgeColors = {
  'HOT':        'bg-orange-500',
  'BEST DEALS': 'bg-blue-700',
  'SALE':       'bg-green-600',
  'SOLD OUT':   'bg-gray-400',
  '25% OFF':    'bg-yellow-500',
};

const ProductCard = ({ product }) => (
  <div className="bg-white rounded-md p-3 relative cursor-pointer hover:shadow-md transition-shadow">
    {product.badge && (
      <span className={`absolute top-2 left-2 ${badgeColors[product.badge]} text-white text-[10px] font-semibold px-2 py-0.5 rounded`}>
        {product.badge}
      </span>
    )}

    <img
      src={product.image}
      alt={product.name}
      className="w-full h-24 object-contain mb-2"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = 'https://placehold.co/150x100?text=No+Image';
      }}
    />

    <div className="text-orange-400 text-xs">
      {'★'.repeat(Math.floor(product.rating))}
      {'☆'.repeat(5 - Math.floor(product.rating))}
    </div>
    <span className="text-[10px] text-gray-400 ml-1">({product.reviews})</span>
    <div className="text-xs text-gray-600 mt-1 leading-snug">{product.name}</div>
    <div className="flex gap-2 items-center mt-1">
      {product.oldPrice && (
        <span className="text-[11px] text-gray-400 line-through">{product.oldPrice}</span>
      )}
      <span className="text-orange-500 font-semibold text-xs">{product.price}</span>
    </div>
  </div>
);

export default ProductCard;