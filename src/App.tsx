import React, { useEffect, useState, useMemo } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, Variants } from 'framer-motion';
import { 
  Terminal, Cat, Dog, Rabbit, Bird, Fish, 
  Turtle, Squirrel, Bug, Snail, Rat,
  Coffee, Pizza, Apple, Cherry, Grape, Carrot, Cookie, IceCream2,
  TreePine, Flower, Leaf, Mountain, Waves, Palmtree, Trees, Sprout,
  Sun, Cloud, CloudRain, Snowflake, Wind, CloudSnow, Rainbow, Zap
} from 'lucide-react';
import { NewsCard } from './components/NewsCard';
import { ScanLines } from './components/ScanLines';
import { GlitchText } from './components/GlitchText';
import { newsData } from './data/newsData';
import { useMasonry } from './hooks/useMasonry';
import './styles/globals.css';
import './styles/masonry.css';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const { scrollY } = useScroll();
  const masonryRef = useMasonry({ mobile: 1, tablet: 2, desktop: 3 }, 24);
  
  // Parallax transforms
  const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
  
  // All icons array with names
  const allIcons = [
    // Default
    Terminal,
    // Animals
    Cat, Dog, Rabbit, Bird, Fish, Turtle, Squirrel, Bug, Snail, Rat,
    // Food & Beverage
    Coffee, Pizza, Apple, Cherry, Grape, Carrot, Cookie, IceCream2,
    // Nature
    TreePine, Flower, Leaf, Mountain, Waves, Palmtree, Trees, Sprout,
    // Weather
    Sun, Cloud, CloudRain, Snowflake, Wind, CloudSnow, Rainbow, Zap
  ];
  
  const allNames = useMemo(() => [
    // Default
    'Bookmarks',
    // Animals
    'Cats', 'Dogs', 'Rabbits', 'Birds', 'Fish', 'Turtles', 'Squirrels', 'Bugs', 'Snails', 'Rats',
    // Food & Beverage
    'Coffee', 'Pizza', 'Apples', 'Cherries', 'Grapes', 'Carrots', 'Cookies', 'IceCream',
    // Nature
    'Trees', 'Flowers', 'Leaves', 'Mountains', 'Waves', 'Palms', 'Forest', 'Sprouts',
    // Weather
    'Sun', 'Clouds', 'Rain', 'Snow', 'Blizzard', 'Rainbows', 'Lightning'
  ], []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Random icon rotation effect with erratic timing
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    
    const changeIcon = () => {
      setCurrentIconIndex((prevIndex) => {
        const newIndex = Math.floor(Math.random() * allIcons.length);
        // Ensure we don't get the same icon twice in a row
        return newIndex === prevIndex 
          ? (newIndex + 1) % allIcons.length 
          : newIndex;
      });
      
      // Random interval - halved when hovering
      const baseInterval = Math.random() * 4500 + 1500;
      const nextInterval = isHovering ? baseInterval / 2 : baseInterval;
      timeoutId = setTimeout(changeIcon, nextInterval);
    };
    
    // Start with initial change
    const initialDelay = isHovering ? 1000 : 2000;
    timeoutId = setTimeout(changeIcon, initialDelay);

    return () => clearTimeout(timeoutId);
  }, [allIcons.length, isHovering]);

  // Set simple black square favicon once
  useEffect(() => {
    const faviconEl = document.getElementById('favicon') as HTMLLinkElement;
    
    if (faviconEl) {
      // Create simple black square SVG favicon
      const svgFavicon = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
        <rect width="32" height="32" fill="%23000000"/>
      </svg>`;
      
      const encodedSvg = encodeURIComponent(svgFavicon);
      faviconEl.href = `data:image/svg+xml,${encodedSvg}`;
    }
  }, []);
  
  // Update page title when icon changes
  useEffect(() => {
    document.title = `Liminal ${allNames[currentIconIndex]}`;
  }, [currentIconIndex, allNames]);

  const headerVariants: Variants = {
    initial: { opacity: 0, y: -50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
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
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  onHoverStart={() => setIsHovering(true)}
                  onHoverEnd={() => setIsHovering(false)}
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
                      duration: isHovering ? (0.6 + Math.random() * 0.4) / 2 : 0.6 + Math.random() * 0.4,
                      ease: [0.68, -0.25, 0.265, 1.25], // Erratic but smooth bezier curve
                      scale: {
                        type: "spring",
                        damping: isHovering ? 20 : 15,
                        stiffness: isHovering ? 300 : 200,
                      }
                    }}
                  >
                    {React.createElement(allIcons[currentIconIndex], {
                      className: "w-8 h-8 text-cyan-400",
                    })}
                  </motion.div>
                  <h1 className="text-xl font-bold font-mono flex items-baseline">
                    <span>Liminal&nbsp;</span>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentIconIndex}
                        className="inline-flex items-baseline"
                        initial={{ width: 0 }}
                        animate={{ width: "auto" }}
                        exit={{ 
                          opacity: 0,
                          width: 0,
                        }}
                        transition={{
                          width: { duration: isHovering ? allNames[currentIconIndex].length * 0.025 : allNames[currentIconIndex].length * 0.05 },
                          opacity: { duration: isHovering ? 0.1 : 0.2 },
                        }}
                        style={{ overflow: "hidden", whiteSpace: "nowrap" }}
                      >
                        {allNames[currentIconIndex]}
                        <motion.span
                          className="inline-block w-2 h-5 bg-cyan-400 ml-0.5"
                          animate={{ opacity: [1, 1, 0, 0] }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            times: [0, 0.5, 0.5, 1]
                          }}
                        />
                      </motion.span>
                    </AnimatePresence>
                  </h1>
                </motion.div>
              </div>

            </div>
          </div>
        </motion.header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 py-6">
          {/* News Masonry Grid */}
          <div ref={masonryRef} className="masonry-container">
            {newsData.map((news, index) => (
              <div
                key={news.id}
                className="masonry-item"
              >
                <NewsCard news={news} index={index} />
              </div>
            ))}
          </div>

          {/* Footer */}
          <motion.footer
            className="mt-12 pt-8 border-t border-slate-800/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <div className="text-center">
              <p className="text-slate-500 font-mono text-sm">
                <GlitchText intensity="low">
                  Liminal {allNames[currentIconIndex]} v2.4.7 // Neural Architecture by Agentic Friends
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