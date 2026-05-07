import { motion } from 'framer-motion';
import { User, Briefcase, Target, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const TargetUsers = () => {
  const [activeUser, setActiveUser] = useState('youth');

  const youthData = {
    title: 'Unemployed Youth',
    icon: User,
    age: '18–30',
    skills: 'Has skills but no proof',
    location: 'Smartphone user, active on social media',
    goal: 'Get gigs, build reputation, unlock financial access',
    insights: '13M+ unemployed in Nigeria, ready for digital gig economy'
  };

  const traderData = {
    title: 'Informal Traders & Artisans',
    icon: Briefcase,
    age: 'Shop owners, tailors, mechanics',
    skills: 'Has business but runs informally',
    location: 'Needs reliable task workers',
    goal: 'Find help, pay reliably, access business credit',
    insights: 'Both customer and data source for financial profiles'
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
            Two Sides of One Ecosystem
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
                Age 18–30, smartphone user
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-electric rounded-full mr-3"></div>
                Has skills but no proof of them
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-electric rounded-full mr-3"></div>
                Active on WhatsApp, Instagram, TikTok
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-electric rounded-full mr-3"></div>
                Goal: Get gigs, build reputation, unlock financial access
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
                Shop owners, tailors, mechanics, artisans
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-neon rounded-full mr-3"></div>
                Has business but runs informally
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-neon rounded-full mr-3"></div>
                Needs reliable task workers but has no hiring system
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-neon rounded-full mr-3"></div>
                Goal: Find help, pay reliably, access business credit
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
                Key Characteristics
              </h4>
              <div className="space-y-4">
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <p className="text-slate-300 font-medium">Age & Reach</p>
                  <p className="text-slate-400">{activeData.age}</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <p className="text-slate-300 font-medium">Skills & Experience</p>
                  <p className="text-slate-400">{activeData.skills}</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <p className="text-slate-300 font-medium">Digital Presence</p>
                  <p className="text-slate-400">{activeData.location}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-200 flex items-center mb-4">
                <TrendingUp className="mr-2 sm:mr-3 text-neon flex-shrink-0" size={20} />
                Goals & Insights
              </h4>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <p className="text-slate-300 leading-relaxed mb-4">{activeData.goal}</p>
                <div className="border-t border-slate-600 pt-4">
                  <p className="text-slate-400 italic text-sm">💡 {activeData.insights}</p>
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