import React from "react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/10 bg-ivory">
      <div className="max-page py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="text-xl font-serif">EchoLeague</div>
          <p className="mt-2 text-gray-600 max-w-sm">Small-batch graphics. Printed on demand to reduce waste. Built to last.</p>
        </div>
        <div>
          <div className="font-semibold">Explore</div>
          <ul className="mt-3 space-y-2">
            <li><a className="hover:opacity-80" href="#/pages/santorini">Why We Design</a></li>
            <li><a className="hover:opacity-80" href="#shop">Shop</a></li>
            <li><a className="hover:opacity-80" href="#about">About</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Elsewhere</div>
          <ul className="mt-3 space-y-2">
            <li><a className="hover:opacity-80" target="_blank" href="https://www.etsy.com/shop/EchoLeague?utm_source=site&utm_medium=footer&utm_campaign=primary">Etsy</a></li>
            <li><a className="hover:opacity-80" target="_blank" href="https://instagram.com/">Instagram</a></li>
            <li><a className="hover:opacity-80" target="_blank" href="https://x.com/">X (Twitter)</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 py-6">© {new Date().getFullYear()} EchoLeague. All rights reserved.</div>
    </footer>
  );
}
