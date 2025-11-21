import { useNavigate } from 'react-router-dom';

export default function UserDetail({ user }) {
  const navigate = useNavigate();

  if (!user) {
    return <p className="text-sm text-slate-500 dark:text-slate-400">Belum ada user yang dipilih. Klik salah satu baris di tabel untuk melihat detailnya.</p>;
  }

  return (
    <div className="space-y-3 text-sm">
      <p>
        <span className="font-semibold text-slate-700 dark:text-slate-100">Nama:</span> <span className="text-slate-700 dark:text-slate-100">{user.name}</span>
      </p>

      <p>
        <span className="font-semibold text-slate-700 dark:text-slate-100">Username:</span> <span className="text-slate-700 dark:text-slate-100">{user.username}</span>
      </p>

      <p>
        <span className="font-semibold text-slate-700 dark:text-slate-100">Email:</span> <span className="text-slate-700 dark:text-slate-100">{user.email}</span>
      </p>

      <p>
        <span className="font-semibold text-slate-700 dark:text-slate-100">Perusahaan:</span> <span className="text-slate-700 dark:text-slate-100">{user.company?.name}</span>
      </p>

      {/* Tombol ke halaman detail */}
      <button
        type="button"
        onClick={() =>
          navigate(`/user/${user.id}`, {
            state: { user }, // kirim data user supaya nggak perlu fetch kalau tidak perlu
          })
        }
        className="
          mt-3 inline-flex items-center justify-center
          rounded-full px-3 py-1.5 text-xs font-medium
          bg-emerald-600 text-white hover:bg-emerald-700
          focus:outline-none focus:ring-2 focus:ring-emerald-400
          transition
        "
      >
        Buka halaman detail
      </button>
    </div>
  );
}
