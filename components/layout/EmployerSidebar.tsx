"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// 1. Define your TypeScript interface
interface NavItem {
  name: string;
  icon: string;
  path: string;
}

const navItems: NavItem[] = [
  { name: 'Dashboard', icon: 'dashboard', path: '/employer/dashboard' },
  { name: 'Jobs', icon: 'work', path: '/employer/jobs' },
  // ... other items
];

export default function EmployerSidebar() {
  const pathname = usePathname(); // Get current route from Next.js

  return (
    <aside className="fixed left-0 top-0 h-screen w-[280px] bg-surface-container-low border-r flex flex-col p-4 z-50">
      {/* ... logo code ... */}
      
      <nav className="flex-1 space-y-1 overflow-y-auto mt-4">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.path);
          
          return (
            <Link
              key={item.name}
              href={item.path}
              className={`w-full flex items-center gap-4 px-3 py-2.5 rounded-lg font-medium transition-all ${
                isActive 
                  ? 'bg-secondary-container text-on-secondary-container' 
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              <span className="material-symbols-outlined">{item.icon}</span> 
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}