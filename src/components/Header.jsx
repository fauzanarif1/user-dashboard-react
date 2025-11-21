export default function Header({ theme, onToggleTheme }) {
  const isDark = theme === 'dark';

  return (
    <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100">User Dashboard</h1>

        <p className="text-sm text-slate-500 dark:text-slate-400">Menampilkan daftar user dari API publik dan detail user yang dipilih.</p>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onToggleTheme}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-600 text-xs bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-100 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition"
        >
          <span className="text-lg">{isDark ? '🌙' : '☀️'}</span>
          <span>{isDark ? 'Dark mode' : 'Light mode'}</span>
        </button>

        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50/80 dark:bg-emerald-900/40 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-800">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Terhubung ke API
        </span>
      </div>
    </header>
  );
}
