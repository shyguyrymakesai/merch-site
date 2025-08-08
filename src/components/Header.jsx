import React from "react";

export default function Header() {
  return (
    <header className="bg-ivory/90 backdrop-blur supports-[backdrop-filter]:bg-ivory/80 border-b border-black/5">
      <div className="max-page py-4 flex items-center justify-between">
        <a href="#/" className="inline-flex items-baseline gap-2">
          <span className="text-2xl font-serif tracking-tight">EchoLeague</span>
          <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
            Designs worn to inspire
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#shop" className="hover:opacity-80">Shop</a>
          <a href="#/pages/santorini" className="hover:opacity-80">Why We Design</a>
        </nav>
      </div>
    </header>
  );
}
