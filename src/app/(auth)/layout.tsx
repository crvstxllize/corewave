// src/app/auth/layout.tsx
import React, { ReactNode } from "react";

export const metadata = { title: "Auth – CoreWave" };

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#ECEFF1]">
      {/* Центрируем форму */}
      <div className="flex-grow flex items-center justify-center px-4">
        {children}
      </div>

      {/* Футер по низу */}
      <footer className="w-full bg-white shadow-[0_-4px_8px_rgba(0,0,0,0.05)]">
        <div className="max-w-[400px] mx-auto flex items-center justify-between px-6 py-4 text-sm">
          <span className="text-gray-600">©2025 CoreWave</span>
          <nav className="flex items-center space-x-4 text-purple-600">
            <a href="/about" className="hover:underline">About us</a>
            <span className="text-gray-300">|</span>
            <a href="/catalog" className="hover:underline">Catalog</a>
            <span className="text-gray-300">|</span>
            <a href="/contact" className="hover:underline">Contact</a>
            <span className="text-gray-300">|</span>
            <a href="/" className="hover:underline">Landing</a>
          </nav>
          <div className="flex items-center space-x-2">
            <img src="/flags/kz.svg" alt="KZ" className="w-5 h-5" />
            <span className="text-gray-600">Kazakhstan</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
