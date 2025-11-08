export default function Loading() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-amber-900 flex flex-col items-center py-10 font-sans text-gray-800 dark:text-white">
      <h2 className="text-4xl font-bold mb-6">Loading Users...</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl px-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <li
            key={i}
            className="bg-white dark:bg-amber-700 shadow-md rounded-2xl p-5 animate-pulse"
          >
            <div className="h-6 w-3/4 bg-gray-300 dark:bg-amber-600 rounded mb-4"></div>
            <div className="h-4 w-1/2 bg-gray-200 dark:bg-amber-500 rounded mb-2"></div>
            <div className="h-4 w-2/3 bg-gray-200 dark:bg-amber-500 rounded"></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
