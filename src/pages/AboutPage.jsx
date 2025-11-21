export default function AboutPage() {
  return (
    <section className="bg-white/90 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-700 rounded-2xl shadow-sm p-4">
      <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Tentang Project Ini</h2>
      <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
        Ini adalah dashboard sederhana yang menampilkan data user dari API publik <code className="px-1 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[11px]">jsonplaceholder.typicode.com</code>.
      </p>
      <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">Fitur yang sudah ada:</p>
      <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 space-y-1 mb-3">
        <li>Fetch data user dari API (client-side fetch)</li>
        <li>Pencarian user berdasarkan nama</li>
        <li>Sorting nama A → Z dan Z → A</li>
        <li>Pagination (5 user per halaman)</li>
        <li>Detail user di panel samping</li>
        <li>Dark mode dengan toggle dan penyimpanan di localStorage</li>
        <li>Skeleton loading untuk tabel user</li>
      </ul>
      <p className="text-sm text-slate-600 dark:text-slate-300">
        Project ini dibuat sebagai belajar membentuk portofolio, karena sudah mencakup konsep dasar seperti state management, pemanggilan API, styling dengan Tailwind, dan routing menggunakan React Router.
      </p>
    </section>
  );
}
