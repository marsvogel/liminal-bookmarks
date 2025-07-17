import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Terminal, Cpu, Zap, 
  Cat, Dog, Rabbit, Bird, Fish, 
  Turtle, Squirrel, Bug, Snail, Rat
} from 'lucide-react';
import { NewsCard } from './components/NewsCard';
import { ScanLines } from './components/ScanLines';
import { GlitchText } from './components/GlitchText';
import { newsData } from './data/newsData';
import './styles/globals.css';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const { scrollY } = useScroll();
  
  // Parallax transforms
  const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
  
  // Animal icons array
  const animalIcons = [
    Terminal, Cat, Dog, Rabbit, Bird, Fish, 
    Turtle, Squirrel, Bug, Snail, Rat
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Random icon rotation effect with erratic timing
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const changeIcon = () => {
      setCurrentIconIndex((prevIndex) => {
        const newIndex = Math.floor(Math.random() * animalIcons.length);
        // Ensure we don't get the same icon twice in a row
        return newIndex === prevIndex 
          ? (newIndex + 1) % animalIcons.length 
          : newIndex;
      });
      
      // Random interval between 1.5 and 6 seconds
      const nextInterval = Math.random() * 4500 + 1500;
      timeoutId = setTimeout(changeIcon, nextInterval);
    };
    
    // Start with initial change
    timeoutId = setTimeout(changeIcon, 2000);

    return () => clearTimeout(timeoutId);
  }, [animalIcons.length]);

  // Update favicon when icon changes
  useEffect(() => {
    const iconPaths: { [key: string]: string } = {
      terminal: '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',
      cat: '<path d="M12 5C6.5 5 2 10 2 16c0 3 1 5 3 6.5c1.5 1 3.5 1.5 7 1.5s5.5-.5 7-1.5c2-1.5 3-3.5 3-6.5c0-6-4.5-11-10-11z"/><path d="M8 14h.01"/><path d="M16 14h.01"/><path d="M12 16v2"/><path d="M7 2l3 5"/><path d="M17 2l-3 5"/>',
      dog: '<path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5"/><path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"/><path d="M8 14v.5"/><path d="M16 14v.5"/><path d="M11.25 16.25h1.5L12 17l-.75-.75Z"/><path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309"/><path d="M9 12v-2"/><path d="M15 12v-2"/>',
      rabbit: '<path d="M20 8.54V4a2 2 0 1 0-4 0v3"/><path d="M7.612 3.461a1.93 1.93 0 0 0-2.975 2.462L7.612 12"/><path d="M16 8V5"/><path d="M8 8V5"/><circle cx="12" cy="13" r="8"/><path d="M8 14v.01"/><path d="M16 14v.01"/><path d="M13 17v-1h-2v1"/><path d="M12 17v4"/>',
      bird: '<path d="M16 7h.01"/><path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"/><path d="m20 7 2 .5-2 .5"/><path d="M10 18v3"/><path d="M14 17.75V21"/><path d="M7 18a6 6 0 0 0 3.84-10.61"/>',
      fish: '<path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"/><path d="M18 12v.5"/><path d="M16 17.93a9.77 9.77 0 0 1 0-11.86"/><path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"/><path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"/>',
      turtle: '<path d="m12 2 8 4v8l-8 4-8-4V6l8-4Z"/><path d="M12 22v-6"/><path d="M7 12h.01"/><path d="M17 12h.01"/><path d="M8 10v-.5"/><path d="M16 10v-.5"/>',
      squirrel: '<path d="M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10"/><path d="M16 14h.01"/><path d="M20 9a4 4 0 0 0-4 4V6a4 4 0 0 0-4 4"/>',
      bug: '<path d="m8 2 1.88 1.88"/><path d="M14.12 3.88 16 2"/><path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"/><path d="M12 20v-9"/><path d="M6.53 9C4.6 8.8 3 7.1 3 5"/><path d="M6 13H2"/><path d="M3 21c0-2.1 1.7-3.9 3.8-4"/><path d="M20.97 5c0 2.1-1.6 3.8-3.5 4"/><path d="M22 13h-4"/><path d="M17.2 17c2.1.1 3.8 1.9 3.8 4"/>',
      snail: '<path d="M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"/><circle cx="10" cy="13" r="8"/><path d="M2 21h12c4.4 0 8-3.6 8-8v-7a2 2 0 1 0-4 0v2"/><path d="M18 3l1.1 2.2"/><path d="M22 3l-1.1 2.2"/>',
      rat: '<path d="M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7v0c0 2.2 1.8 4 4 4"/><path d="M16.8 3.9c.3-.3.6-.5 1-.7 1.5-.6 3.3.1 3.9 1.6.6 1.5-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1-.2.8-.9 1.2-1.7 1.1 0 0-1.6-.3-2.7-.6H17c-1.7 0-3 1.3-3 3"/><path d="M13.2 18a3 3 0 0 0-2.2-5"/><path d="M13 22H4a2 2 0 0 1 0-4h12"/><path d="M16 9h.01"/>'
    };
    
    const currentIconPath = iconPaths[Object.keys(iconPaths)[currentIconIndex]] || iconPaths.terminal;
    const faviconEl = document.getElementById('favicon') as HTMLLinkElement;
    
    if (faviconEl) {
      // Create SVG favicon dynamically with dark background
      const svgFavicon = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <rect width="24" height="24" fill="%231e293b" rx="4"/>
        <g fill="none" stroke="%2300ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          ${currentIconPath}
        </g>
      </svg>`;
      
      const encodedSvg = encodeURIComponent(svgFavicon);
      faviconEl.href = `data:image/svg+xml,${encodedSvg}`;
    }
  }, [currentIconIndex]);

  const headerVariants = {
    initial: { opacity: 0, y: -50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative">
      {/* Digital noise background */}
      <div className="fixed inset-0 digital-noise" />
      
      {/* Scan lines overlay */}
      <ScanLines />
      
      {/* Mouse follower effect */}
      <motion.div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(0, 255, 128, 0.03) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-20">
        {/* Header */}
        <motion.header
          className="relative"
          variants={headerVariants}
          initial="initial"
          animate="animate"
          style={{ y: y1 }}
        >
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    key={currentIconIndex}
                    initial={{ 
                      scale: 0, 
                      rotate: Math.random() > 0.5 ? -360 : 360,
                      opacity: 0,
                      x: Math.random() * 40 - 20,
                      y: Math.random() * 40 - 20,
                    }}
                    animate={{ 
                      scale: 1, 
                      rotate: 0,
                      opacity: 1,
                      x: 0,
                      y: 0,
                    }}
                    exit={{ 
                      scale: 0, 
                      rotate: Math.random() > 0.5 ? 270 : -270,
                      opacity: 0,
                      x: Math.random() * 40 - 20,
                      y: Math.random() * 40 - 20,
                    }}
                    transition={{ 
                      duration: 0.6 + Math.random() * 0.4,
                      ease: [0.68, -0.25, 0.265, 1.25], // Erratic but smooth bezier curve
                      scale: {
                        type: "spring",
                        damping: 15,
                        stiffness: 200,
                      }
                    }}
                  >
                    {React.createElement(animalIcons[currentIconIndex], {
                      className: "w-8 h-8 text-cyan-400",
                    })}
                  </motion.div>
                  <h1 className="text-2xl font-bold font-mono">
                    <GlitchText intensity="high">
                      Liminal Feed
                    </GlitchText>
                  </h1>
                </motion.div>
              </div>

            </div>
          </div>
        </motion.header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 py-12">
          {/* News Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {newsData.map((news, index) => (
              <motion.div
                key={news.id}
                className="break-inside-avoid"
                style={{
                  y: useTransform(scrollY, [0, 2000], [0, index % 2 === 0 ? -50 : -100]),
                }}
              >
                <NewsCard news={news} index={index} />
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <motion.footer
            className="mt-24 pt-12 border-t border-slate-800/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <div className="text-center">
              <p className="text-slate-500 font-mono text-sm">
                <GlitchText intensity="low">
                  Liminal Feed v2.4.7 // Neural Architecture by Agentic Friends
                </GlitchText>
              </p>
              <motion.div
                className="mt-4 flex justify-center gap-4"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <span className="text-xs text-slate-600 font-mono">SYS_STATUS: OPERATIONAL</span>
                <span className="text-xs text-slate-600 font-mono">|</span>
                <span className="text-xs text-slate-600 font-mono">AI_CONFIDENCE: 99.7%</span>
                <span className="text-xs text-slate-600 font-mono">|</span>
                <span className="text-xs text-slate-600 font-mono">HUMAN_OVERSIGHT: MINIMAL</span>
              </motion.div>
            </div>
          </motion.footer>
        </main>
      </div>
    </div>
  );
}

export default App;