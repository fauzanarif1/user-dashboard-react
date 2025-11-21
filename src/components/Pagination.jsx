export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null; // kalau cuma 1 halaman, nggak usah tampilkan

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="flex items-center justify-between mt-4 text-xs md:text-sm">
      <span className="text-slate-500">
        Halaman {currentPage} dari {totalPages}
      </span>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded-full border text-xs disabled:opacity-40 disabled:cursor-not-allowed bg-white border-slate-200 hover:bg-slate-50"
        >
          Prev
        </button>
        <button
          type="button"
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded-full border text-xs disabled:opacity-40 disabled:cursor-not-allowed bg-white border-slate-200 hover:bg-slate-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
