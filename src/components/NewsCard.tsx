import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { NewsItem } from '../data/newsData';
import { GlitchText } from './GlitchText';

interface NewsCardProps {
  news: NewsItem;
  index: number;
}

export const NewsCard: React.FC<NewsCardProps> = ({ news, index }) => {
  const cardVariants = {
    initial: { 
      opacity: 0, 
      y: 50,
      scale: 0.95,
      filter: 'brightness(0.8) saturate(0.8)',
    },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      filter: 'brightness(1) saturate(1)',
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }
    },
    hover: {
      scale: 1.02,
      filter: 'brightness(1.1) saturate(1.2) hue-rotate(5deg)',
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      }
    }
  };

  const borderVariants = {
    initial: { 
      borderColor: 'rgba(59, 130, 246, 0.3)',
    },
    hover: {
      borderColor: [
        'rgba(59, 130, 246, 0.3)',
        'rgba(20, 184, 166, 0.6)',
        'rgba(249, 115, 22, 0.4)',
        'rgba(236, 72, 153, 0.5)',
        'rgba(59, 130, 246, 0.3)',
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'linear',
      }
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ai research': return 'text-cyan-400 bg-cyan-400/10';
      case 'quantum tech': return 'text-purple-400 bg-purple-400/10';
      case 'open source': return 'text-green-400 bg-green-400/10';
      case 'security': return 'text-red-400 bg-red-400/10';
      case 'biotech': return 'text-pink-400 bg-pink-400/10';
      case 'development': return 'text-orange-400 bg-orange-400/10';
      default: return 'text-blue-400 bg-blue-400/10';
    }
  };

  return (
    <motion.a
      href={news.link}
      className="relative group"
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      <motion.div
        className="relative bg-slate-900/50 backdrop-blur-sm border rounded-xl p-6 h-full overflow-hidden cursor-pointer"
        variants={borderVariants}
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.02) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(0, 255, 128, 0.03) 0%, transparent 50%)
          `,
        }}
      >
        {/* Subtle glitch overlay on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `
              linear-gradient(90deg, transparent 0%, rgba(0, 255, 128, 0.03) 20%, transparent 40%, rgba(255, 0, 128, 0.03) 60%, transparent 80%, rgba(0, 128, 255, 0.03) 100%)
            `,
            animation: 'subtle-flicker 3s infinite',
          }}
        />

        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <motion.span
            className={`text-xs font-mono px-2 py-1 rounded ${getCategoryColor(news.category)}`}
            whileHover={{ scale: 1.05 }}
          >
            {news.category}
          </motion.span>
          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <Calendar className="w-3 h-3" />
            {new Date(news.date).toLocaleDateString('de-DE')}
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold mb-3 text-white leading-tight">
          <GlitchText intensity="medium">
            {news.title}
          </GlitchText>
        </h2>

        {/* Summary */}
        <p className="text-slate-300 mb-4 leading-relaxed font-light">
          {news.summary}
        </p>

        {/* Key Facts */}
        <div className="mb-6">
          <h3 className="text-sm font-mono text-cyan-400 mb-2 uppercase tracking-wider">
            Key Facts
          </h3>
          <ul className="space-y-1">
            {news.keyFacts.map((fact, factIndex) => (
              <motion.li
                key={factIndex}
                className="text-sm text-slate-400 flex items-start gap-2 font-mono"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (index * 0.1) + (factIndex * 0.05) }}
              >
                <span className="text-green-400 mt-1 text-xs">▸</span>
                <span>{fact}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Hover effect overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
        />
      </motion.div>
    </motion.a>
  );
};