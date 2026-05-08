import { motion } from 'framer-motion';
import { User, Briefcase, Target, TrendingUp, Shield, Smartphone } from 'lucide-react';
import { useState } from 'react';

const TargetUsers = () => {
  const [activeUser, setActiveUser] = useState('youth');

  const youthData = {
    title: 'Unemployed Youth',
    icon: User,
    age: '18–30 years old',
    skills: 'Has skills but no formal proof or work history',
    location: 'Smartphone user, active on WhatsApp/Instagram/TikTok',
    verification: 'BVN (bank identity) + NIN (government ID) + Social media (digital footprint + social credibility)',
    goal: 'Get gigs → build passport score → unlock credit & savings',
    insights: '13M+ unemployed in Nigeria, digitally native, ready for gig economy',
    journey: [
      'Signs up and declares skills (delivery, design, trades, etc.)',
      'Completes three-layer verification (BVN + NIN + Social)',
      'AI generates initial trust score based on verification completeness',
      'Receives matched gig notifications based on skills, location, score',
      'Completes gig → gets paid via Squad → receives rating',
      'Passport score increases with each successful gig',
      'After threshold, unlocks micro-credit, savings tools, certifications'
    ]
  };

  const traderData = {
    title: 'Informal Traders & Artisans',
    icon: Briefcase,
    age: '25–65 years old',
    skills: 'Runs business but informally — no payroll, no credit history',
    location: 'Shop owners, tailors, mechanics, market sellers, artisans',
    verification: 'BVN (personal financial baseline) + NIN (legal identity) + Business proof (shop photos, trade type, operational evidence)',
    goal: 'Find reliable workers → secure payments → access business credit',
    insights: '60M+ informal businesses, steady cash flow but no formal financial records',
    journey: [
      'Registers business, verifies identity with BVN + NIN',
      'Posts gig needs (task type, date, pay, requirements)',
      'Sees AI-ranked shortlist of 5 verified youth workers',
      'Selects worker, deposits payment into Squad escrow',
      'Worker completes task, trader marks gig complete',
      'Squad releases payment instantly to worker',
      'Builds transaction history → qualifies for working capital loans, business insurance'
    ]
  };

  const activeData = activeUser === 'youth' ? youthData : traderData;

  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#111827' }}>
      {/* Background gradient */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #1e293b, #111827, #1e293b)' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-electric via-white to-neon bg-clip-text text-transparent px-4">
            Target Users
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-400 font-light px-4">
            Two Sides of One Economic Ecosystem
          </p>
          <p className="text-slate-400 mt-4 max-w-3xl mx-auto">
            Both groups lack formal financial identity but have verifiable signals — together they create a complete economic picture
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Youth Card */}
          <motion.div
            className={`bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 cursor-pointer transition-all duration-500 mx-4 ${
              activeUser === 'youth'
                ? 'border-electric bg-electric/10 shadow-2xl shadow-electric/20'
                : 'border-slate-700 hover:border-electric/50 hover:bg-electric/5'
            }`}
            onClick={() => setActiveUser('youth')}
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <div className={`p-2 sm:p-3 rounded-2xl mr-3 sm:mr-4 ${activeUser === 'youth' ? 'bg-electric/20' : 'bg-slate-700'}`}>
                <User className="text-electric" size={28} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Youth Workers</h3>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-electric rounded-full mr-3"></div>
                Age 18–30, smartphone-savvy
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-electric rounded-full mr-3"></div>
                Has skills but no formal proof or employment history
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-electric rounded-full mr-3"></div>
                Needs reliable gigs and a way to build financial credibility
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-electric rounded-full mr-3"></div>
                Verifies via BVN + NIN + Social media (WhatsApp/Instagram/TikTok)
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-electric rounded-full mr-3"></div>
                Outcome: Gigs → passport score → credit access → financial inclusion
              </li>
            </ul>
          </motion.div>

          {/* Trader Card */}
          <motion.div
            className={`bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 cursor-pointer transition-all duration-500 mx-4 ${
              activeUser === 'trader'
                ? 'border-neon bg-neon/10 shadow-2xl shadow-neon/20'
                : 'border-slate-700 hover:border-neon/50 hover:bg-neon/5'
            }`}
            onClick={() => setActiveUser('trader')}
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <div className={`p-2 sm:p-3 rounded-2xl mr-3 sm:mr-4 ${activeUser === 'trader' ? 'bg-neon/20' : 'bg-slate-700'}`}>
                <Briefcase className="text-neon" size={28} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Informal Traders</h3>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-neon rounded-full mr-3"></div>
                Shop owners, tailors, mechanics, market sellers
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-neon rounded-full mr-3"></div>
                Has steady cash flow but runs informally — no payroll system
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-neon rounded-full mr-3"></div>
                Needs reliable workers and a way to pay securely
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-neon rounded-full mr-3"></div>
                Verifies via BVN + NIN + Business proof (shop photos, trade type)
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-neon rounded-full mr-3"></div>
                Outcome: Reliable hiring → transaction history → business loans & insurance
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Active User Details */}
        <motion.div
          className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-700 shadow-2xl mx-4"
          key={activeUser}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left mb-6 sm:mb-8">
            <div className={`p-3 sm:p-4 rounded-2xl mb-4 sm:mb-0 sm:mr-4 lg:mr-6 ${activeUser === 'youth' ? 'bg-electric/20' : 'bg-neon/20'}`}>
              <activeData.icon className={`text-3xl sm:text-4xl ${activeUser === 'youth' ? 'text-electric' : 'text-neon'}`} />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                {activeData.title}
              </h3>
              <div className={`w-12 sm:w-16 h-1 rounded-full mx-auto sm:mx-0 ${activeUser === 'youth' ? 'bg-electric' : 'bg-neon'}`}></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            <div className="space-y-6">
              <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-200 flex items-center mb-4">
                <Target className="mr-2 sm:mr-3 text-electric flex-shrink-0" size={20} />
                Who They Are
              </h4>
              <div className="space-y-4">
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <p className="text-slate-300 font-medium">Profile</p>
                  <p className="text-slate-400">{activeData.age}</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <p className="text-slate-300 font-medium">Skills & Background</p>
                  <p className="text-slate-400">{activeData.skills}</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <p className="text-slate-300 font-medium">Digital Presence</p>
                  <p className="text-slate-400">{activeData.location}</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <p className="text-slate-300 font-medium">Verification Process</p>
                  <p className="text-slate-400">{activeData.verification}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-200 flex items-center mb-4">
                <TrendingUp className="mr-2 sm:mr-3 text-neon flex-shrink-0" size={20} />
                Journey & Goals
              </h4>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <p className="text-slate-300 leading-relaxed mb-4">{activeData.goal}</p>
                <div className="border-t border-slate-600 pt-4">
                  <p className="text-slate-400 italic text-sm mb-3">💡 {activeData.insights}</p>
                  <div className="space-y-2 mt-4">
                    <p className="text-slate-300 text-sm font-medium">Their path forward:</p>
                    {activeData.journey.map((step, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-sm">
                        <span className="text-electric mt-1">→</span>
                        <span className="text-slate-400">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetUsers;