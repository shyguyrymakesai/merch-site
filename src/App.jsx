
import React, { useState } from 'react';
import echoLeagueBanner from './assets/Echo-League Banner.png';
import img404SoulNotFound from './assets/Echo League Designs/404 Soul Not Found.png';
import imgArchangel from './assets/Echo League Designs/Archangel.png';
import imgBrahmanShiva from './assets/Echo League Designs/Brahman and Shiva Do a Jig.png';
import imgCowWantsToBelieve from './assets/Echo League Designs/Cow Wants to Believe.png';
import imgDevilDancesToo from './assets/Echo League Designs/Devil Dances Too.png';
import imgExcalibur from './assets/Echo League Designs/Excalibur.png';
import imgJester from './assets/Echo League Designs/Jester.png';
import imgNarcisus1 from './assets/Echo League Designs/Narcisus 1.png';
import imgNarcisus2 from './assets/Echo League Designs/Narcisus 2.png';
import imgPrayingToAlgo from './assets/Echo League Designs/Praying to the Algo.png';
import imgSaintSundown from './assets/Echo League Designs/Saint Sundown.png';
import imgShyguy from './assets/Echo League Designs/Shyguy.png';
import imgMeditationModernHeigths from './assets/Echo League Designs/Meditation on Modern Heigths.png';
import imgStewardTheEarth from './assets/Echo League Designs/Steward The Earth.png';

function GlitchImage({ children }) {
  return (
    <div className="relative group">
      <div
        className="absolute inset-0 animate-glitch opacity-70 group-hover:opacity-100"
        style={{ filter: 'blur(2px) brightness(1.5) contrast(2) hue-rotate(30deg)', pointerEvents: 'none' }}
      >
        {children}
      </div>
      <div className="relative">
        {children}
      </div>
    </div>
  );
}

const products = [
  {
    name: '404 Soul Not Found',
    description: 'A digital echo of lost souls. Futuristic and bold.',
    image: img404SoulNotFound,
  },
  {
    name: 'Archangel',
    description: 'Celestial glitch meets neon league.',
    image: imgArchangel,
  },
  {
    name: 'Brahman and Shiva Do a Jig',
    description: 'Divine dance in a neon echo.',
    image: imgBrahmanShiva,
  },
  {
    name: 'Cow Wants to Believe',
    description: 'Surreal, modern, and playful.',
    image: imgCowWantsToBelieve,
  },
  {
    name: 'Devil Dances Too',
    description: 'Even devils join the echo league.',
    image: imgDevilDancesToo,
  },
  {
    name: 'Excalibur',
    description: 'Legendary blade, legendary style.',
    image: imgExcalibur,
  },
  {
    name: 'Jester',
    description: 'Glitchy fun for the bold.',
    image: imgJester,
  },
  {
    name: 'Narcisus 1',
    description: 'Reflections in neon.',
    image: imgNarcisus1,
  },
  {
    name: 'Narcisus 2',
    description: 'Reflections in neon, part two.',
    image: imgNarcisus2,
  },
  {
    name: 'Praying to the Algo',
    description: 'Worship at the altar of code.',
    image: imgPrayingToAlgo,
  },
  {
    name: 'Saint Sundown',
    description: 'Saintly vibes at sunset.',
    image: imgSaintSundown,
  },
  {
    name: 'Shyguy',
    description: 'The league’s mysterious mascot.',
    image: imgShyguy,
  },
  {
    name: 'Meditation on Modern Heigths',
    description: 'A reflection on modernity and peace.',
    image: imgMeditationModernHeigths,
  },
  {
    name: 'Steward The Earth',
    description: 'Guardianship and care for our planet.',
    image: imgStewardTheEarth,
  },
];

function App() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % products.length);
  const prev = () => setCurrent((current - 1 + products.length) % products.length);

  const product = products[current];

  return (
    <div id="top" className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white font-sans">
      <header className="flex flex-col items-center justify-center py-8">
        <h1 className="text-6xl font-extrabold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#00fff0] via-[#ff00ea] to-[#fff200] drop-shadow-[0_2px_24px_rgba(0,255,255,0.7)] animate-pulse">echo-league</h1>
        <div className="flex justify-center items-center mb-2" style={{ width: '100%' }}>
          <img
            src={echoLeagueBanner}
            alt="Echo League Banner"
            className="h-10 w-auto max-w-xs rounded-lg shadow-lg animate-glitch"
            style={{ objectFit: 'contain', background: 'transparent', maxWidth: '12.5rem' }}
          />
        </div>
        <p className="text-xl text-[#00fff0] mb-8 max-w-xl text-center font-mono animate-glitch-text glitch-text">
          Futuristic, neon, and glitched-out merch for the next league of creators. Stand out. Be bold. Join the echo.
        </p>
        <div className="text-2xl font-bold text-[#ff00ea] mb-2 underline decoration-[#ff00ea] decoration-4 underline-offset-4 section-title">Designs</div>
      </header>
      <main className="container">
        <section id="shop" className="flex flex-col items-center py-12">
          <div className="w-full flex items-center justify-center mb-8 relative" style={{ minHeight: '18.75rem' }}>
            <button
              onClick={prev}
              className="px-4 py-2 bg-gradient-to-r from-[#ff00ea] to-[#00fff0] text-black rounded-full font-bold shadow-lg hover:from-[#fff200] hover:to-[#ff00ea] transition hover:shadow-[0_0_24px_8px_#ff00ea] hover:animate-pulse"
              style={{ position: 'absolute', left: '-3.75rem', top: '50%', transform: 'translateY(-50%)' }}
            >&#8592;</button>
            <div className="flex-1 flex flex-col items-center mx-4">
              <div className="shop-item design-card flex flex-col items-center border-2 border-[#ff00ea] w-full">
                <GlitchImage>
                  <div className="h-48 w-full flex items-center justify-center">
                    <span className="text-7xl text-[#fff200] drop-shadow-[0_2px_24px_rgba(255,242,0,0.7)]">{product.icon}</span>
                  </div>
                </GlitchImage>
                <div className="p-6 w-full flex flex-col items-center">
                  <h2 className="text-2xl font-bold mb-2 text-[#ff00ea]">{product.name}</h2>
                  {/* Product image below name */}
                  <div className="mb-2 w-full flex justify-center">
                    <img
                      src={product.image}
                      alt={product.name + ' image'}
                      className="rounded-lg shadow-md object-contain h-10 w-auto bg-black/30"
                      style={{ maxWidth: '12.5rem' }}
                    />
                  </div>
                  <p className="text-[#00fff0] mb-4 text-center font-mono">{product.description}</p>
                </div>
              </div>
            </div>
            <button
              onClick={next}
              className="px-4 py-2 bg-gradient-to-r from-[#ff00ea] to-[#00fff0] text-black rounded-full font-bold shadow-lg hover:from-[#fff200] hover:to-[#ff00ea] transition hover:shadow-[0_0_24px_8px_#00fff0] hover:animate-pulse"
              style={{ position: 'absolute', right: '-3.75rem', top: '50%', transform: 'translateY(-50%)' }}
            >&#8594;</button>
          </div>
          <button className="button-buy mt-4 px-16 py-5 text-2xl font-extrabold shadow-2xl">Buy this piece</button>
        </section>
      </main>
      <footer className="text-center py-8 text-[#00fff0] border-t border-[#ff00ea] mt-12 font-mono">
        &copy; {new Date().getFullYear()} echo-league. All rights reserved.
      </footer>
      <a href="#top" className="back-to-top fixed bottom-4 right-4">&#8679;</a>
    </div>
  );
}

export default App;
