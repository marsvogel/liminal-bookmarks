import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Terminal, Cpu, Zap } from 'lucide-react';
import { NewsCard } from './components/NewsCard';
import { ScanLines } from './components/ScanLines';
import { GlitchText } from './components/GlitchText';
import { newsData } from './data/newsData';
import './styles/globals.css';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  // Parallax transforms
  const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
          className="relative overflow-hidden border-b border-slate-800/50 backdrop-blur-sm"
          variants={headerVariants}
          initial="initial"
          animate="animate"
          style={{ y: y1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 via-slate-800/10 to-slate-900/20" />
          <div className="relative max-w-7xl mx-auto px-6 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <Terminal className="w-8 h-8 text-cyan-400" />
                  <h1 className="text-2xl font-bold font-mono">
                    <GlitchText intensity="high">
                      TECH_FEED.exe
                    </GlitchText>
                  </h1>
                </motion.div>
                
                <motion.div
                  className="hidden md:flex items-center gap-1 px-3 py-1 bg-green-400/10 border border-green-400/30 rounded-full"
                  animate={{
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs font-mono text-green-400">LIVE</span>
                </motion.div>
              </div>

              <div className="flex items-center gap-4">
                <motion.div
                  className="flex items-center gap-2 text-sm font-mono text-slate-400"
                  whileHover={{ scale: 1.05 }}
                >
                  <Cpu className="w-4 h-4 text-purple-400" />
                  <span>Neural Network Active</span>
                </motion.div>
                
                <motion.div
                  className="flex items-center gap-2 text-sm font-mono text-slate-400"
                  whileHover={{ scale: 1.05 }}
                >
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span>Real-time Updates</span>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="mt-6"
              style={{ y: y2 }}
            >
              <p className="text-slate-300 font-light max-w-2xl">
                <GlitchText intensity="low">
                  Exploring the liminal space between human and machine intelligence.
                </GlitchText>
                <br />
                <span className="text-sm text-slate-500 font-mono">
                  // Where technology meets the uncanny valley
                </span>
              </p>
            </motion.div>
          </div>
        </motion.header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 py-12">
          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max">
            {newsData.map((news, index) => (
              <motion.div
                key={news.id}
                className="h-fit"
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
                  TECH_FEED.exe v2.4.7 // Neural Architecture by Uncanny Systems
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