import { motion } from 'framer-motion';
import { User, Briefcase, Search, Shield, CheckCircle, Star } from 'lucide-react';

const EndToEndFlow = () => {
  const steps = [
    {
      step: 1,
      actor: 'Youth',
      action: 'Downloads PassGig app, signs up, declares skills and location',
      system: 'AI generates initial passport score. Profile created.',
      icon: User,
      color: 'electric'
    },
    {
      step: 2,
      actor: 'Trader',
      action: 'Signs up, describes business, posts a gig (e.g. \'Need delivery rider Saturday, ₦3,000\')',
      system: 'Gig published. AI matching engine activates.',
      icon: Briefcase,
      color: 'neon'
    },
    {
      step: 3,
      actor: 'System',
      action: 'Matching engine runs',
      system: 'Top 5 youth workers ranked and shown to trader based on skill, location, score, availability.',
      icon: Search,
      color: 'electric'
    },
    {
      step: 4,
      actor: 'Trader',
      action: 'Reviews shortlist, selects a worker, confirms the gig',
      system: 'Worker notified. Trader prompted to deposit ₦3,000 into Squad escrow.',
      icon: CheckCircle,
      color: 'neon'
    },
    {
      step: 5,
      actor: 'Trader',
      action: 'Pays into escrow via Squad API',
      system: 'Funds held securely. Worker sees \'Payment secured — gig confirmed\'.',
      icon: Shield,
      color: 'electric'
    },
    {
      step: 6,
      actor: 'Youth',
      action: 'Shows up, completes delivery',
      system: 'Trader marks gig complete on app.',
      icon: CheckCircle,
      color: 'neon'
    },
    {
      step: 7,
      actor: 'System',
      action: 'Squad API releases funds to worker wallet/account',
      system: 'Worker receives payment instantly. Both parties prompted to rate each other.',
      icon: Shield,
      color: 'electric'
    },
    {
      step: 8,
      actor: 'Both',
      action: 'Submit ratings',
      system: 'AI updates both passports. Scores adjust. Transaction logged.',
      icon: Star,
      color: 'neon'
    },
    {
      step: 9,
      actor: 'System',
      action: 'Intelligence layer analyzes data',
      system: 'Demand signals updated. Credit eligibility recalculated. Skill recommendations refreshed.',
      icon: Search,
      color: 'electric'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#111827' }}>

      {/* Background elements */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #111827, #1e293b, #111827)' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center p-4 bg-electric/10 rounded-2xl mb-6">
            <CheckCircle className="text-electric" size={48} />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-electric via-white to-neon bg-clip-text text-transparent px-4">
            End-to-End Gig Flow
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed px-4">
            How a complete gig works from signup to payment — step by step.
            This is the core loop that builds financial identities.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative px-4">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric via-slate-600 to-neon"></div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative flex items-start space-x-4 sm:space-x-6 lg:space-x-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div className={`relative z-10 flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl ${step.color === 'electric' ? 'bg-electric/20 border-electric' : 'bg-neon/20 border-neon'} border-2 flex items-center justify-center shadow-lg`}>
                  <step.icon className={`${step.color === 'electric' ? 'text-electric' : 'text-neon'}`} size={20} />
                </div>

                {/* Content card */}
                <div className="flex-grow bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <span className={`inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl ${step.color === 'electric' ? 'bg-electric text-white' : 'bg-neon text-white'} text-sm sm:text-base lg:text-lg font-bold mr-3 sm:mr-4`}>
                      {step.step}
                    </span>
                    <span className={`font-bold text-lg sm:text-xl ${step.color === 'electric' ? 'text-electric' : 'text-neon'} mr-2 sm:mr-3`}>
                      {step.actor}:
                    </span>
                    <span className="text-white font-medium text-base sm:text-lg">{step.action}</span>
                  </div>

                  <div className="bg-slate-800/50 rounded-2xl p-4 sm:p-6 border border-slate-600">
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <div className="w-2 h-2 bg-slate-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                      <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                        <strong className="text-white">System:</strong> {step.system}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Flow Summary */}
        <motion.div
          className="mt-12 sm:mt-16 lg:mt-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-700 shadow-2xl mx-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8 sm:mb-10">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              The Complete Feedback Loop
            </h3>
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-electric to-neon rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
            <motion.div
              className="text-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-electric/10 rounded-2xl p-4 sm:p-6 mb-3 sm:mb-4 border border-electric/20 group-hover:bg-electric/20 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-2">🔄</div>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-electric mb-2">Gig Completion</h4>
              <p className="text-slate-400 text-sm sm:text-base">Work gets done, payment flows</p>
            </motion.div>

            <motion.div
              className="text-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-neon/10 rounded-2xl p-4 sm:p-6 mb-3 sm:mb-4 border border-neon/20 group-hover:bg-neon/20 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-2">📊</div>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-neon mb-2">Data Generation</h4>
              <p className="text-slate-400 text-sm sm:text-base">Transaction history builds</p>
            </motion.div>

            <motion.div
              className="text-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-electric/10 rounded-2xl p-4 sm:p-6 mb-3 sm:mb-4 border border-electric/20 group-hover:bg-electric/20 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-2">🚀</div>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-electric mb-2">Financial Access</h4>
              <p className="text-slate-400 text-sm sm:text-base">Credit and savings unlocked</p>
            </motion.div>
          </div>

          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
            <p className="text-slate-200 text-center text-base sm:text-lg italic leading-relaxed">
              "Every completed gig builds financial identity, unlocking access to credit, savings, and insurance for Nigeria's informal economy."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EndToEndFlow;