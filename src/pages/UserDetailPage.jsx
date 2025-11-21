import { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export default function UserDetailPage() {
  const { id } = useParams(); // ambil :id dari URL
  const location = useLocation();
  const initialUser = location.state?.user || null;

  const [user, setUser] = useState(initialUser);
  const [loading, setLoading] = useState(!initialUser);
  const [error, setError] = useState('');

  // Kalau datang tanpa state (misal user refresh page), fetch dari API
  useEffect(() => {
    if (user) return; // sudah ada data dari state, tidak perlu fetch

    let cancelled = false;

    async function fetchUser() {
      try {
        setLoading(true);
        setError('');
        const res = await fetch(`${API_URL}/${id}`);
        if (!res.ok) {
          throw new Error('Gagal mengambil data user');
        }
        const data = await res.json();
        if (!cancelled) {
          setUser(data);
        }
      } catch (err) {
        if (!cancelled) {
          console.error(err);
          setError('Terjadi kesalahan saat memuat data user.');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchUser();

    return () => {
      cancelled = true;
    };
  }, [id, user]);

  return (
    <section className="bg-white/90 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-700 rounded-2xl shadow-sm p-4">
      {/* breadcrumb + back */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
            <Link
              to="/"
              className="text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              Dashboard
            </Link>{' '}
            / Detail User
          </p>
          <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">Detail User #{id}</h2>
        </div>

        <Link
          to="/"
          className="text-xs px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          ⬅ Kembali ke dashboard
        </Link>
      </div>

      {loading && <p className="text-sm text-slate-500 dark:text-slate-400">Memuat data user...</p>}

      {error && <p className="text-sm text-red-500 mb-2">{error}</p>}

      {!loading && !error && user && (
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
            <span className="font-semibold text-slate-700 dark:text-slate-100">Telepon:</span> <span className="text-slate-700 dark:text-slate-100">{user.phone}</span>
          </p>

          <p>
            <span className="font-semibold text-slate-700 dark:text-slate-100">Website:</span> <span className="text-slate-700 dark:text-slate-100">{user.website}</span>
          </p>

          <p>
            <span className="font-semibold text-slate-700 dark:text-slate-100">Alamat:</span>{' '}
            <span className="text-slate-700 dark:text-slate-100">
              {user.address?.street}, {user.address?.suite}, {user.address?.city}
            </span>
          </p>

          <p>
            <span className="font-semibold text-slate-700 dark:text-slate-100">Perusahaan:</span>{' '}
            <span className="text-slate-700 dark:text-slate-100">
              {user.company?.name} — {user.company?.bs}
            </span>
          </p>
        </div>
      )}
    </section>
  );
}
