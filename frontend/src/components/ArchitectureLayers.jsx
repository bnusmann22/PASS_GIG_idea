import { motion } from 'framer-motion';
import { UserPlus, Search, Brain, Layers, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const ArchitectureLayers = () => {
  const [activeLayer, setActiveLayer] = useState(0);

  const layers = [
    {
      title: 'Onboarding & Economic Passport',
      icon: UserPlus,
      color: 'electric',
      description: 'Every user creates a dynamic digital profile that grows with activity.',
      details: [
        'Youth: Full name, age, location, skills, portfolio, initial AI trust score',
        'Traders: Business name, trade type, task needs, budget range, initial trust score',
        'Passport updates in real-time with completed gigs, payments, and ratings'
      ],
      benefits: 'Living financial identity, not just static registration'
    },
    {
      title: 'Gig Matching Engine',
      icon: Search,
      color: 'neon',
      description: 'AI-powered matching system finds best-fit youth for trader gigs.',
      details: [
        'Matching signals: Skill alignment, location proximity, passport score',
        'Availability match, past gig ratings, category history',
        'Trader deposits payment into Squad escrow, youth is notified'
      ],
      benefits: 'Reliable connections between disconnected groups'
    },
    {
      title: 'Intelligence & Financial Inclusion Loop',
      icon: Brain,
      color: 'electric',
      description: 'Transaction data feeds AI models that unlock real financial services.',
      details: [
        'Youth unlocks: Micro-savings, personal credit, skill certifications',
        'Traders unlock: Working capital loans, business insurance, verified badges',
        'Requirements: Consistent activity and positive behavioral signals'
      ],
      benefits: 'Compounding system that gets more valuable with usage'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#111827' }}>

      {/* Background elements */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #1e293b, #111827, #1e293b)' }}></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-electric/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center p-4 bg-electric/10 rounded-2xl mb-6">
            <Layers className="text-electric" size={48} />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-electric via-white to-neon bg-clip-text text-transparent px-4">
            The Three Layers of PassGig
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed px-4">
            Each layer feeds the next, creating a compounding system that builds financial identities
            from scratch for Nigeria's informal economy.
          </p>
        </motion.div>

        {/* Layer Navigation */}
        <div className="flex flex-wrap justify-center mb-12 sm:mb-16 gap-3 sm:gap-4 px-4">
          {layers.map((layer, index) => {
            const isActive = activeLayer === index;
            const colorClass = layer.color === 'electric' ? 'electric' : 'neon';
            return (
              <motion.button
                key={index}
                className={`flex items-center space-x-2 sm:space-x-3 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-2xl border-2 backdrop-blur-sm transition-all duration-500 ${
                  isActive
                    ? `border-${colorClass} bg-${colorClass}/20 text-${colorClass} shadow-lg shadow-${colorClass}/20`
                    : 'border-slate-700 bg-slate-800/50 text-slate-400 hover:border-slate-600 hover:bg-slate-700/50'
                }`}
                onClick={() => setActiveLayer(index)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <layer.icon size={20} />
                <span className="font-semibold text-sm sm:text-base">Layer {index + 1}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Active Layer Content */}
        <motion.div
          key={activeLayer}
          className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-700 shadow-2xl mx-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left mb-6 sm:mb-8">
              <div className={`p-3 sm:p-4 rounded-2xl mb-4 sm:mb-0 sm:mr-4 lg:mr-6 ${layers[activeLayer].color === 'electric' ? 'bg-electric/20' : 'bg-neon/20'}`}>
                {(() => {
                  const Icon = layers[activeLayer].icon;
                  const colorClass = layers[activeLayer].color === 'electric' ? 'text-electric' : 'text-neon';
                  return <Icon className={`text-3xl sm:text-4xl ${colorClass}`} />;
                })()}
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                  {layers[activeLayer].title}
                </h3>
                <div className={`w-16 sm:w-20 h-1 rounded-full mx-auto sm:mx-0 ${layers[activeLayer].color === 'electric' ? 'bg-electric' : 'bg-neon'}`}></div>
              </div>
            </div>

          <p className="text-lg sm:text-xl text-slate-300 mb-6 sm:mb-8 lg:mb-10 leading-relaxed">
            {layers[activeLayer].description}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            <div className="space-y-6">
              <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-200 mb-4 sm:mb-6">How It Works</h4>
              <div className="space-y-4">
                {layers[activeLayer].details.map((detail, idx) => {
                  const colorClass = layers[activeLayer].color === 'electric' ? 'bg-electric' : 'bg-neon';
                  return (
                    <motion.div
                      key={idx}
                      className="flex items-start space-x-4 bg-slate-800/30 rounded-xl p-4 border border-slate-700"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                    >
                      <div className={`w-3 h-3 rounded-full ${colorClass} mt-1.5 flex-shrink-0`} />
                      <span className="text-slate-300 leading-relaxed">{detail}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-200 mb-4 sm:mb-6">Key Benefit</h4>
              <div className={`bg-gradient-to-br ${layers[activeLayer].color === 'electric' ? 'from-electric/10 to-electric/5' : 'from-neon/10 to-neon/5'} rounded-2xl p-8 border ${layers[activeLayer].color === 'electric' ? 'border-electric/20' : 'border-neon/20'}`}>
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${layers[activeLayer].color === 'electric' ? 'bg-electric/20' : 'bg-neon/20'}`}>
                  <TrendingUp className={`${layers[activeLayer].color === 'electric' ? 'text-electric' : 'text-neon'}`} size={24} />
                </div>
                <p className="text-slate-200 text-lg leading-relaxed">
                  {layers[activeLayer].benefits}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Visual Flow Indicator */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-8">
            {layers.map((_, index) => {
              const colorClass = layers[index].color === 'electric' ? 'bg-electric' : 'bg-neon';
              const isCompleted = index <= activeLayer;
              const isActive = index === activeLayer;
              return (
                <div key={index} className="flex items-center">
                  <motion.div
                    className={`w-6 h-6 rounded-full ${isCompleted ? colorClass : 'bg-slate-600'}`}
                    animate={{ scale: isActive ? 1.3 : 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  {index < layers.length - 1 && (
                    <motion.div
                      className={`w-20 h-1 rounded-full ${index < activeLayer ? colorClass : 'bg-slate-600'}`}
                      animate={{ opacity: index < activeLayer ? 1 : 0.5 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArchitectureLayers;