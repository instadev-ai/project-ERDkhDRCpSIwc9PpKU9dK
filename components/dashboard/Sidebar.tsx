import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-xl">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">SaaS Dashboard</h1>
      </div>
      <nav className="mt-6">
        <ul className="space-y-2">
          <li>
            <Link href="/dashboard" className="block px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors duration-200">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/dashboard/weather" className="block px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors duration-200">
              Weather
            </Link>
          </li>
          <li>
            <Link href="/dashboard/cities" className="block px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors duration-200">
              Cities List
            </Link>
          </li>
        </ul>
      </nav>
      <div className="absolute bottom-0 w-full p-6">
        <button className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Logout
        </button>
      </div>
    </aside>
  );
}