
import React, { useEffect } from 'react';
import echoLeagueBanner from './assets/banners/First Bloom Banner.png';
import beamMeUpBessie from './assets/merch mockups/Beam Me Up, Bessie Mockup.png';
import ivlDropout from './assets/merch mockups/IVL Dropout Mockup.png';
import jesterMockup from './assets/merch mockups/Jester Mockup.png';
import narcisusV2 from './assets/merch mockups/Narcisus v2 Mokcup.png';
import stewardTheEarth from './assets/merch mockups/Steward The Earth mockup.png';

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


function App() {
  useEffect(() => {
    // Inject Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-SPPTLR2M79';
    document.head.appendChild(script);

    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-SPPTLR2M79');
    `;
    document.head.appendChild(inlineScript);
    return () => {
      document.head.removeChild(script);
      document.head.removeChild(inlineScript);
    };
  }, []);
  // Product grid data

  const gridProducts = [
    {
      name: 'Beam Me Up, Bessie',
      tagline: 'Cow-core meets cosmic absurdity. Moo-ve over, reality. (A cult classic in the making. Playful and ironic.)',
      image: beamMeUpBessie,
      hoverImage: beamMeUpBessie,
      etsy: 'https://www.etsy.com/listing/4342099879/beam-me-up-bessie-tee',
    },
    {
      name: 'You’re a Liar (Jester Hoodie)',
      tagline: 'Court jesters speak in riddles. This one doesn’t. (Piercing and bold — truth wrapped in satire.)',
      image: jesterMockup,
      hoverImage: jesterMockup,
      etsy: 'https://www.etsy.com/listing/4342090418/youre-a-liar-jester-hoodie',
    },
    {
      name: 'Ivy League Dropout',
      tagline: 'Academia couldn’t handle the glitch. (Defiant, clean, and instantly iconic.)',
      image: ivlDropout,
      hoverImage: ivlDropout,
      etsy: 'https://www.etsy.com/listing/4342094845/ivy-league-dropout-tee',
    },
    {
      name: 'Steward the Earth',
      tagline: 'Sacred duty. Soft thread. Signal green. (Grounded, earnest — balances the louder pieces with purpose.)',
      image: stewardTheEarth,
      hoverImage: stewardTheEarth,
      etsy: 'https://www.etsy.com/listing/4342088402/steward-the-earth-tee',
    },
    {
      name: 'Narcisus v2',
      tagline: '100K likes. Zero reflection. (Biting, mythic, hypermodern. Speaks for itself.)',
      image: narcisusV2,
      hoverImage: narcisusV2,
      etsy: 'https://www.etsy.com/listing/4342085592/narcissus-v2',
    },
  ];

  return (
    <div id="top" className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white font-sans">
      <header className="flex flex-col items-center justify-center py-8">
        <h1 className="text-6xl font-extrabold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#00fff0] via-[#ff00ea] to-[#fff200] drop-shadow-[0_2px_24px_rgba(0,255,255,0.7)] animate-pulse">echo-league</h1>
        <div className="flex justify-center items-center mb-2 gap-4" style={{ width: '100%' }}>
          <img
            src={echoLeagueBanner}
            alt="Echo League Banner"
            className="h-10 w-auto max-w-xs rounded-lg shadow-lg animate-glitch"
            style={{ objectFit: 'contain', background: 'transparent', maxWidth: '12.5rem' }}
          />
          <a
  href="/#/santorini"
  className="ml-4 px-5 py-2 rounded-full bg-[#0f0c29] border-2 border-[#ff00ea] text-[#ff00ea] font-mono font-semibold tracking-wide transition duration-300 hover:bg-[#ff00ea]/10 hover:text-white hover:shadow-[0_0_12px_#ff00ea] backdrop-blur-md"
>
  💒 Our Story 
</a>

        </div>
        <p className="text-xl text-[#00fff0] mb-8 max-w-xl text-center font-mono animate-glitch-text glitch-text">
          Futuristic, neon, and glitched-out merch for the next league of creators. Stand out. Be bold. Join the echo.
        </p>
        <div className="text-2xl font-bold text-[#ff00ea] mb-2 underline decoration-[#ff00ea] decoration-4 underline-offset-4 section-title">Designs</div>
      </header>
      <main className="container">
        <section id="shop" className="py-12">
          {/* First row */}
          <div className="flex flex-wrap gap-8 mb-8 justify-center">
            {gridProducts.slice(0,2).map((prod) => (
              <div key={prod.name} className="shop-item design-card border-2 border-[#ff00ea] rounded-xl bg-black/40 shadow-lg overflow-hidden group w-full sm:w-[48%] max-w-md">
                <div className="w-full flex justify-center items-center relative">
                  <img
                    src={prod.image}
                    alt={prod.name + ' mockup'}
                    className="rounded-lg shadow-md object-contain w-full h-48 transition duration-300 group-hover:opacity-0"
                    style={{ background: 'black', maxWidth: '100%' }}
                  />
                  <img
                    src={prod.hoverImage}
                    alt={prod.name + ' zoom'}
                    className="absolute inset-0 rounded-lg shadow-md object-contain w-full h-48 opacity-0 group-hover:opacity-100 transition duration-300"
                    style={{ background: 'black', maxWidth: '100%' }}
                  />
                </div>
                <div className="p-6 w-full flex flex-col items-center">
                  <h2 className="text-2xl font-bold mb-2 text-[#ff00ea]">{prod.name}</h2>
                  <p className="text-[#00fff0] mb-4 text-center font-mono">{prod.tagline}</p>
                  <a href={prod.etsy} target="_blank" rel="noopener noreferrer" className="button-buy mt-2 px-8 py-3 text-lg font-extrabold shadow-2xl">Buy on Etsy</a>
                </div>
              </div>
            ))}
          </div>
          {/* Second row */}
          <div className="flex flex-wrap gap-8 mb-8 justify-center">
            {gridProducts.slice(2,4).map((prod) => (
              <div key={prod.name} className="shop-item design-card border-2 border-[#ff00ea] rounded-xl bg-black/40 shadow-lg overflow-hidden group w-full sm:w-[48%] max-w-md">
                <div className="w-full flex justify-center items-center relative">
                  <img
                    src={prod.image}
                    alt={prod.name + ' mockup'}
                    className="rounded-lg shadow-md object-contain w-full h-48 transition duration-300 group-hover:opacity-0"
                    style={{ background: 'black', maxWidth: '100%' }}
                  />
                  <img
                    src={prod.hoverImage}
                    alt={prod.name + ' zoom'}
                    className="absolute inset-0 rounded-lg shadow-md object-contain w-full h-48 opacity-0 group-hover:opacity-100 transition duration-300"
                    style={{ background: 'black', maxWidth: '100%' }}
                  />
                </div>
                <div className="p-6 w-full flex flex-col items-center">
                  <h2 className="text-2xl font-bold mb-2 text-[#ff00ea]">{prod.name}</h2>
                  <p className="text-[#00fff0] mb-4 text-center font-mono">{prod.tagline}</p>
                  <a href={prod.etsy} target="_blank" rel="noopener noreferrer" className="button-buy mt-2 px-8 py-3 text-lg font-extrabold shadow-2xl">Buy on Etsy</a>
                </div>
              </div>
            ))}
          </div>
          {/* Third row, centered item */}
          <div className="flex justify-center">
            <div className="shop-item design-card border-2 border-[#ff00ea] rounded-xl bg-black/40 shadow-lg overflow-hidden group w-full sm:w-1/2 max-w-md">
              <div className="w-full flex justify-center items-center relative">
                <img
                  src={gridProducts[4].image}
                  alt={gridProducts[4].name + ' mockup'}
                  className="rounded-lg shadow-md object-contain w-full h-48 transition duration-300 group-hover:opacity-0"
                  style={{ background: 'black', maxWidth: '100%' }}
                />
                <img
                  src={gridProducts[4].hoverImage}
                  alt={gridProducts[4].name + ' zoom'}
                  className="absolute inset-0 rounded-lg shadow-md object-contain w-full h-48 opacity-0 group-hover:opacity-100 transition duration-300"
                  style={{ background: 'black', maxWidth: '100%' }}
                />
              </div>
              <div className="p-6 w-full flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-2 text-[#ff00ea]">{gridProducts[4].name}</h2>
                <p className="text-[#00fff0] mb-4 text-center font-mono">{gridProducts[4].tagline}</p>
                <a href={gridProducts[4].etsy} target="_blank" rel="noopener noreferrer" className="button-buy mt-2 px-8 py-3 text-lg font-extrabold shadow-2xl">Buy on Etsy</a>
              </div>
            </div>
          </div>
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
