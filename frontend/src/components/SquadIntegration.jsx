import { motion } from 'framer-motion';
import { Shield, ArrowRight, Wallet, Database, CreditCard, User } from 'lucide-react';

const SquadIntegration = () => {
  const squadFunctions = [
    {
      title: 'Payment Escrow',
      icon: Shield,
      description: 'Trader deposits gig payment upfront into escrow. Funds are held until gig is marked complete.',
      benefit: 'Protects both parties. Youth knows payment is guaranteed. Trader knows work must be delivered.',
      color: 'electric'
    },
    {
      title: 'Worker Disbursement',
      icon: Wallet,
      description: 'On gig completion and trader confirmation, Squad releases funds directly to worker\'s account or wallet.',
      benefit: 'Fast, reliable payment to workers — removes the \'I\'ll pay you later\' problem common in informal hiring.',
      color: 'neon'
    },
    {
      title: 'Transaction Data Feed',
      icon: Database,
      description: 'All payments flow through Squad, generating a structured transaction history per user.',
      benefit: 'This transaction history is the raw data that powers the AI credit scoring model for both youth and traders.',
      color: 'electric'
    },
    {
      title: 'Business Payments',
      icon: CreditCard,
      description: 'Traders can use Squad to receive payments from their own customers, logged to their PassGig profile.',
      benefit: 'Adds a broader revenue signal to the trader\'s economic passport beyond just hiring activity.',
      color: 'neon'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-black to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-40 left-20 w-96 h-96 bg-electric/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-80 h-80 bg-neon/5 rounded-full blur-3xl"></div>
        </div>
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
            <Shield className="text-electric" size={48} />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-electric via-white to-neon bg-clip-text text-transparent px-4">
            Squad API: Core of PassGig
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed px-4">
            Squad API is not a token integration added at the end. It is structurally embedded into four critical
            functions of the platform, making it central to the entire system.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {squadFunctions.map((func, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300 group mx-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className={`p-2 sm:p-3 rounded-2xl mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 ${func.color === 'electric' ? 'bg-electric/20' : 'bg-neon/20'}`}>
                  <func.icon className={`${func.color === 'electric' ? 'text-electric' : 'text-neon'}`} size={28} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">{func.title}</h3>
              </div>

              <p className="text-slate-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {func.description}
              </p>

              <div className={`bg-gradient-to-r ${func.color === 'electric' ? 'from-electric/10 to-electric/5' : 'from-neon/10 to-neon/5'} rounded-2xl p-6 border ${func.color === 'electric' ? 'border-electric/20' : 'border-neon/20'}`}>
                <div className="flex items-start space-x-3">
                  <div className={`w-2 h-2 rounded-full ${func.color === 'electric' ? 'bg-electric' : 'bg-neon'} mt-2 flex-shrink-0`}></div>
                  <p className="text-slate-200 text-sm leading-relaxed">
                    <strong className="text-white">Why it matters:</strong> {func.benefit}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Critical Integration Note */}
        <motion.div
          className="bg-gradient-to-r from-red-900/20 to-red-800/20 backdrop-blur-xl border border-red-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-12 sm:mb-16 mx-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-4 sm:mb-6">
            <div className="p-2 sm:p-3 bg-red-500/20 rounded-2xl mr-3 sm:mr-4">
              <ArrowRight className="text-red-400" size={20} />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-red-300">Critical Integration Note</h3>
          </div>
          <p className="text-slate-200 leading-relaxed text-base sm:text-lg">
            <strong className="text-red-300">Disqualification warning:</strong> A solution with no meaningful Squad API integration
            will not be eligible for top placements regardless of scores in other criteria. PassGig's
            escrow and disbursement architecture ensures Squad is central — not cosmetic.
          </p>
        </motion.div>

        {/* Visual Flow */}
        <motion.div
          className="flex flex-col items-center space-y-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-300 text-center mb-6">Payment Flow Architecture</h3>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 bg-white/5 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-slate-700 mx-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3 bg-slate-800 rounded-xl px-6 py-3 border border-slate-600">
                <User className="text-electric" size={20} />
                <span className="text-electric font-semibold">Trader</span>
              </div>
              <ArrowRight className="text-slate-400" size={24} />
              <div className="flex items-center space-x-3 bg-slate-800 rounded-xl px-6 py-3 border border-slate-600">
                <Shield className="text-neon" size={20} />
                <span className="text-neon font-semibold">Squad Escrow</span>
              </div>
              <ArrowRight className="text-slate-400" size={24} />
              <div className="flex items-center space-x-3 bg-slate-800 rounded-xl px-6 py-3 border border-slate-600">
                <User className="text-electric" size={20} />
                <span className="text-electric font-semibold">Youth Worker</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SquadIntegration;