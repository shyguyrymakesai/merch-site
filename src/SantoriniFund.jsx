import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import santoriniPhoto from './assets/santorini/ryan-meg.jpg';

const SHEET_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vQrxFiLyGbmQf8sy45FZ_JV_TMHObkrN6Ndv0tAVhm6MxKRUcfbNFEzMEHBw3HNI8fyYaJpHbVz9sPx/pub?output=csv';

export default function SantoriniFund() {
  const [savings, setSavings] = useState(null);

  useEffect(() => {
    fetch(SHEET_URL)
      .then((res) => res.text())
      .then((csv) => {
        const value = csv.split(',')[0].replace(/[^\d.]/g, '');
        setSavings(parseFloat(value));
      })
      .catch(() => setSavings(null));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e3e6f3] to-[#fce4ec] text-[#222d3d] font-sans flex flex-col items-center justify-center p-0">
      <div className="w-full flex flex-col items-center py-10 px-4">
        <div className="max-w-2xl w-full bg-white/95 rounded-3xl shadow-2xl p-10 flex flex-col items-center border border-[#e3e6f3]">
          <h1 className="text-5xl font-extrabold mb-6 text-[#2d5c7f] tracking-tight drop-shadow-lg">
            The Santorini Fund
          </h1>

          <div className="mb-8 w-full flex flex-col items-center">
            <div className="w-full flex justify-center mb-4">
              <img
                src={santoriniPhoto}
                alt="Ryan and Meg"
                className="rounded-full shadow-xl object-cover w-56 h-56 border-4 border-[#e3e6f3]"
                style={{ maxWidth: '14rem', maxHeight: '14rem' }}
              />
            </div>

<div className="text-center space-y-4 text-base leading-relaxed text-black">

              <p className="font-semibold text-[#2d5c7f]">This is a vow.</p>
<p style={{ color: '#000000' }}>                Meg and I have been together for two years, but we've never taken a trip together — not even to new states, let alone to a foreign country.
                This fund marks the beginning of a new chapter in our story: one where we get to explore, celebrate, and rest in the light of all we're building together.
              </p>
              <p style={{ color: '#000000' }}>Every shirt, every dollar is a step closer to the island where our next story begins.</p>
              <p className="mt-4 text-xl font-bold text-[#2d5c7f]">We’re going to Santorini.</p>
            </div>
          </div>

          <div className="flex flex-col items-center mb-8">
            <span className="text-3xl font-bold text-[#222d3d] mb-2">Saved so far:</span>
            <span className="text-4xl font-extrabold text-[#2d5c7f] bg-[#e3e6f3] px-6 py-2 rounded-2xl shadow border border-[#e3e6f3]">
              {savings !== null ? `$${savings.toFixed(2)}` : 'Loading...'}
            </span>
          </div>

          <a
            href="https://echoleague.etsy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-10 py-4 bg-gradient-to-r from-[#2d5c7f] to-[#e3e6f3] text-white font-bold rounded-2xl shadow-lg hover:from-[#222d3d] hover:to-[#fce4ec] transition text-xl"
          >
            Shop the Capsule
          </a>

          <Link
            to="/"
            className="mt-4 text-[#2d5c7f] underline font-medium text-base hover:text-[#1e3a5f] transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
