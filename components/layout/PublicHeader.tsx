"use client"; // Marks this as a Client Component

import { useState } from 'react';
import Link from 'next/link';

export default function PublicHeader() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <header className="bg-surface border-b border-outline-variant sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <Link href="/" className="font-bold text-lg flex items-center gap-2 group">
          <span className="material-symbols-outlined text-3xl">shield_person</span>
          SkillShield
        </Link>
        
        <div className="hidden md:flex items-center gap-4 relative">
          <button onClick={() => setShowLogin(!showLogin)} className="hover:text-primary transition-colors">
            Sign In
          </button>
          
          {showLogin && (
            <div className="absolute top-10 right-32 w-48 bg-white border rounded shadow-lg flex flex-col z-50">
              <Link href="/employer/dashboard" onClick={() => setShowLogin(false)} className="px-4 py-3 hover:bg-gray-100 border-b">
                Employer Login
              </Link>
              <Link href="/candidate/portal" onClick={() => setShowLogin(false)} className="px-4 py-3 hover:bg-gray-100">
                Candidate Login
              </Link>
            </div>
          )}
          
          <Link href="/employer/dashboard" className="bg-slate-900 text-white px-6 py-2.5 rounded font-semibold hover:bg-opacity-90">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}