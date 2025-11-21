import { NavLink } from 'react-router-dom';

export default function Navbar() {
  // helper class biar nggak copy-paste panjang
  const baseLink = 'inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition';

  const getClassName = (isActive) =>
    baseLink +
    ' ' +
    (isActive ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-500/30' : 'bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-100 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800');

  return (
    <nav className="mb-6 flex flex-wrap items-center justify-between gap-3">
      {/* Keterangan kecil di kiri */}
      <div className="flex items-center gap-2 text-[11px] md:text-xs text-slate-500 dark:text-slate-400">
        <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Navigation</span>
      </div>

      {/* Pill nav di kanan */}
      <div className="flex items-center gap-2 bg-white/70 dark:bg-slate-900/70 border border-slate-100 dark:border-slate-800 rounded-full px-1 py-1 shadow-sm backdrop-blur">
        <NavLink
          to="/"
          end
          className={({ isActive }) => getClassName(isActive)}
        >
          <span>🏠</span>
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => getClassName(isActive)}
        >
          <span>📄</span>
          <span>About</span>
        </NavLink>
      </div>
    </nav>
  );
}
