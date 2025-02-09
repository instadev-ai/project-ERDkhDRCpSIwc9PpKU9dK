import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md">
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <Link href="/dashboard" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/dashboard/weather" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">
              Weather
            </Link>
          </li>
          <li>
            <Link href="/dashboard/cities" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">
              Cities List
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 mt-auto">
        <Button className="w-full" variant="destructive">Logout</Button>
      </div>
    </aside>
  );
}