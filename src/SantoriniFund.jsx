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
            Why I Created Echo League
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
              <p className="font-semibold text-[#2d5c7f]">Origin Story</p>
              <p style={{ color: '#000000' }}>Meg and I were talking one day about places we would go if we could go anywhere, and Santorini, Greece was our decision.</p>
              <p style={{ color: '#000000' }}>This clothing is my first step towards making our dream trip a reality.</p>
              <p style={{ color: '#000000' }}>Some of the pieces were inspired by that conversation (Narcissus) and other conversations Meg and I have had.</p>
              <p style={{ color: '#000000' }}>Others are just from my crazy imagination. But, I am using a portion of all proceeds to make our Santorini trip real.</p>
              <p className="mt-4 text-xl font-bold text-[#2d5c7f]"></p>
            </div>
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
