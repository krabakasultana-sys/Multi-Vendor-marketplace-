export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="w-9 h-9 rounded-full border flex items-center justify-center text-slate-500 disabled:opacity-30 disabled:cursor-not-allowed hover:border-primary hover:text-primary transition-colors"
        aria-label="Previous page"
      >
        ←
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={`w-9 h-9 rounded-full text-sm flex items-center justify-center border transition-colors ${
            p === currentPage
              ? "bg-accent text-white border-accent font-semibold"
              : "text-slate-600 border-slate-300 hover:border-primary hover:text-primary"
          }`}
        >
          {String(p).padStart(2, "0")}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="w-9 h-9 rounded-full border flex items-center justify-center text-slate-500 disabled:opacity-30 disabled:cursor-not-allowed hover:border-primary hover:text-primary transition-colors"
        aria-label="Next page"
      >
        →
      </button>
    </div>
  );
}
