import Link from "next/link";

export default async function Users() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-amber-900 flex flex-col items-center py-10 font-sans text-gray-800 dark:text-white">
      <h2 className="text-4xl font-bold mb-6">Users List</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl px-4">
        {users.map((user) => (
          <Link href={`/user/${user.id}`}
            key={user.id}
            className="bg-white dark:bg-amber-700 shadow-md rounded-2xl p-5 hover:scale-105 transition-transform duration-200"
          >
            <h3 className="text-xl font-semibold">{user.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-200">{user.email}</p>
            <p className="text-sm mt-1">{user.phone}</p>
            <p className="text-sm text-gray-300">{user.company.name}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
}
