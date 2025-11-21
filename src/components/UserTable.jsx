export default function UserTable({ users, loading, selectedUser, onSelectUser }) {
  // 🔹 Skeleton saat loading
  if (loading) {
    const skeletonRows = Array.from({ length: 5 });

    return (
      <div className="overflow-hidden rounded-xl border border-slate-100 dark:border-slate-700 bg-white/80 dark:bg-slate-900/60">
        <div className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-4 py-2">
          <div className="h-3 w-32 rounded-full bg-slate-200 dark:bg-slate-700 animate-pulse" />
        </div>

        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {skeletonRows.map((_, idx) => (
            <div
              key={idx}
              className="flex items-center px-4 py-3 gap-4 animate-pulse"
            >
              <div className="flex-1 h-3 rounded-full bg-slate-200 dark:bg-slate-700" />
              <div className="flex-1 h-3 rounded-full bg-slate-200 dark:bg-slate-700" />
              <div className="flex-1 h-3 rounded-full bg-slate-200 dark:bg-slate-700" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 🔹 Kalau nggak ada data
  if (!users || users.length === 0) {
    return <p className="text-sm text-slate-500 dark:text-slate-400">Tidak ada user yang cocok dengan pencarian.</p>;
  }

  // 🔹 Tabel normal
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-100 dark:border-slate-700 bg-white/80 dark:bg-slate-900/60">
      <table className="w-full text-sm">
        <thead className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
          <tr>
            <th className="text-left px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-200">Nama</th>
            <th className="text-left px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-200">Email</th>
            <th className="text-left px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-200">Perusahaan</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => {
            const isSelected = selectedUser && selectedUser.id === user.id;

            return (
              <tr
                key={user.id}
                onClick={() => onSelectUser(user)}
                className={'cursor-pointer transition ' + (isSelected ? 'bg-emerald-50 dark:bg-emerald-900/50 hover:bg-emerald-100 dark:hover:bg-emerald-800' : 'hover:bg-emerald-50 dark:hover:bg-slate-800')}
              >
                <td className="px-4 py-2 text-slate-700 dark:text-slate-100">{user.name}</td>
                <td className="px-4 py-2 text-slate-600 dark:text-slate-200">{user.email}</td>
                <td className="px-4 py-2 text-slate-600 dark:text-slate-200">{user.company?.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
