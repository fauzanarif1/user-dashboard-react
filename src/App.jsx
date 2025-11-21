import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ErrorBanner from './components/ErrorBanner';
import UserTable from './components/UserTable';
import UserDetail from './components/UserDetail';
import SortControls from './components/SortControls';
import Pagination from './components/Pagination';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import UserDetailPage from './pages/UserDetailPage';

const API_URL = 'https://jsonplaceholder.typicode.com/users';
const PAGE_SIZE = 5;

export default function App() {
  // ----- STATE -----
  const [allUsers, setAllUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);

  // theme (light / dark)
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    return localStorage.getItem('theme') || 'light';
  });

  // ----- EFFECT: FETCH DATA SEKALI DI AWAL -----
  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        setError('');

        const res = await fetch(API_URL);
        if (!res.ok) {
          throw new Error('Gagal mengambil data. Status: ' + res.status);
        }

        const data = await res.json();
        setAllUsers(data);
      } catch (err) {
        console.error(err);
        setError('Terjadi kesalahan saat memuat data user.');
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  // ----- EFFECT: RESET HALAMAN SAAT SEARCH / SORT BERUBAH -----
  useEffect(() => {
    setCurrentPage(1);
  }, [search, sortOrder]);

  // ----- EFFECT: SINKRONKAN THEME DENGAN <html class="dark"> -----
  useEffect(() => {
    const root = document.documentElement; // <html>

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  // ----- FILTER + SORT -----
  const filteredUsers = useMemo(() => {
    const keyword = search.toLowerCase().trim();

    // 1. filter
    let result = keyword ? allUsers.filter((user) => user.name.toLowerCase().includes(keyword)) : [...allUsers];

    // 2. sort
    result.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (nameA < nameB) return sortOrder === 'asc' ? -1 : 1;
      if (nameA > nameB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    return result;
  }, [allUsers, search, sortOrder]);

  // ----- PAGINATION -----
  const totalPages = Math.max(1, Math.ceil(filteredUsers.length / PAGE_SIZE));

  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    return filteredUsers.slice(startIndex, endIndex);
  }, [filteredUsers, currentPage]);

  // ----- RENDER -----
  return (
    <BrowserRouter>
      <div
        className="
        min-h-screen p-4 md:p-8
        bg-gradient-to-br from-slate-50 via-white to-emerald-50
        dark:bg-slate-950 dark:bg-none
        transition-colors duration-300
      "
      >
        <div className="max-w-6xl mx-auto">
          {/* Header tetap */}
          <div
            className="
            sticky top-0 z-40 pb-4
            bg-gradient-to-b
            from-white/95 via-white/90 to-white/0
            dark:from-slate-950/95 dark:via-slate-950/90 dark:to-slate-950/0
            backdrop-blur
      "
          ></div>
          <Header
            theme={theme}
            onToggleTheme={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
          />

          {/* NAV MENU */}
          <Navbar />

          {/* ROUTER: berubah tergantung URL */}
          <Routes>
            {/* Dashboard */}
            <Route
              path="/"
              element={
                <>
                  <SearchBar
                    value={search}
                    onChange={setSearch}
                  />
                  <ErrorBanner message={error} />

                  <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* TABEL USER */}
                    <section className="lg:col-span-2 bg-white/90 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-700 rounded-2xl shadow-sm p-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                        <h2 className="text-base md:text-lg font-semibold text-slate-800 dark:text-slate-100">Daftar User</h2>

                        <div className="flex items-center gap-4 justify-between md:justify-end">
                          <span className="text-xs text-slate-500 dark:text-slate-400">{loading ? 'Memuat data...' : `${filteredUsers.length} user ditemukan`}</span>

                          <SortControls
                            sortOrder={sortOrder}
                            onChange={setSortOrder}
                          />
                        </div>
                      </div>

                      <UserTable
                        users={paginatedUsers}
                        loading={loading}
                        selectedUser={selectedUser}
                        onSelectUser={setSelectedUser}
                      />

                      <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                      />
                    </section>

                    {/* DETAIL */}
                    <aside className="bg-white/90 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-700 rounded-2xl shadow-sm p-4">
                      <h2 className="text-base md:text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3">Detail User</h2>
                      <UserDetail user={selectedUser} />
                    </aside>
                  </main>
                </>
              }
            />

            {/* Halaman About */}
            <Route
              path="/about"
              element={<AboutPage />}
            />

            {/* 🔥 Route baru untuk halaman detail user */}
            <Route
              path="/user/:id"
              element={<UserDetailPage />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
