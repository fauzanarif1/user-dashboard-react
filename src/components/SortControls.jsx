export default function SortControls({ sortOrder, onChange }) {
  return (
    <div className="flex items-center gap-2 text-xs md:text-sm">
      <span className="text-slate-500">Urutkan:</span>
      <button
        type="button"
        onClick={() => onChange('asc')}
        className={'px-2 py-1 rounded-full border text-xs ' + (sortOrder === 'asc' ? 'bg-emerald-100 border-emerald-300 text-emerald-800' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50')}
      >
        Nama A → Z
      </button>
      <button
        type="button"
        onClick={() => onChange('desc')}
        className={'px-2 py-1 rounded-full border text-xs ' + (sortOrder === 'desc' ? 'bg-emerald-100 border-emerald-300 text-emerald-800' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50')}
      >
        Nama Z → A
      </button>
    </div>
  );
}
