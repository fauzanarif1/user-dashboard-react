export default function SearchBar({ value, onChange }) {
  return (
    <section className="mb-6">
      <div
        className="
          bg-white/90 dark:bg-slate-900/80 
          border border-slate-200 dark:border-slate-700 
          rounded-2xl shadow-sm p-4
          flex flex-col md:flex-row md:items-center md:justify-between gap-3
        "
      >
        {/* Input Box */}
        <div className="flex-1">
          <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">CARI USER</label>

          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Ketik nama user..."
            className="
              w-full px-3 py-2 rounded-xl border text-sm
              bg-white dark:bg-slate-900
              border-slate-200 dark:border-slate-700
              text-slate-800 dark:text-slate-100
              placeholder-slate-400 dark:placeholder-slate-500
              focus:outline-none focus:ring-2 focus:ring-emerald-400
            "
          />
        </div>

        {/* Sumber data */}
        <p className="text-[11px] text-right text-slate-400 dark:text-slate-500">Sumber data: jsonplaceholder.typicode.com/users</p>
      </div>
    </section>
  );
}
