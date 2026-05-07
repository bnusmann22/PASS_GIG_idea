import { motion } from 'framer-motion';
import { Zap, Users, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy via-slate-900 to-navy relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-electric/10 rounded-full blur-3xl animate-float"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-neon/10 rounded-full blur-3xl animate-float"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2, delay: 1 }}
          style={{ animationDelay: '2s' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-electric-light/5 rounded-full blur-2xl animate-pulse-slow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 3, delay: 0.5 }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.3)_1px,_transparent_0)] bg-[length:50px_50px]"></div>
      </div>

      <div className="text-center z-10 px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-electric via-electric-light to-neon bg-clip-text text-transparent leading-none">
            PassGig
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 text-slate-300 font-light tracking-wide px-4">
            Economic Passport + Skill-to-Gig Platform
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 mb-12 sm:mb-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex items-center space-x-2 sm:space-x-3 bg-electric/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-electric/20 hover:bg-electric/20 transition-all duration-300">
            <Zap className="text-electric" size={20} />
            <span className="text-electric font-medium text-sm sm:text-base">AI Matching</span>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3 bg-neon/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-neon/20 hover:bg-neon/20 transition-all duration-300">
            <Users className="text-neon" size={20} />
            <span className="text-neon font-medium text-sm sm:text-base">Credit Scoring</span>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3 bg-electric/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-electric/20 hover:bg-electric/20 transition-all duration-300">
            <TrendingUp className="text-electric" size={20} />
            <span className="text-electric font-medium text-sm sm:text-base">Financial Inclusion</span>
          </div>
        </motion.div>

        <motion.div
          className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto border border-white/20 shadow-2xl mx-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-light">
            Connecting unemployed Nigerian youth with gig opportunities from informal traders,
            building financial identities that unlock access to credit, savings, and insurance.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;