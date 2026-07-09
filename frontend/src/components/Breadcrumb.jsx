const Breadcrumb = ({ items }) => (
  <div className="bg-gray-50 px-5 py-2 text-xs text-gray-400 flex items-center gap-1.5">
    {items.map((item, i) => (
      <span key={i} className="flex items-center gap-1.5">
        {i > 0 && <span>›</span>}
        {i === items.length - 1
          ? <span className="text-orange-500">{item}</span>
          : <a href="#" className="text-gray-500 no-underline hover:text-orange-500">{item}</a>}
      </span>
    ))}
  </div>
);
export default Breadcrumb;
