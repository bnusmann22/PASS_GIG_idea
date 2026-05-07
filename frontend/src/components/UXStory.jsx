import { motion } from 'framer-motion';
import { Book, Users, Lightbulb, Target, ArrowRight, CheckCircle } from 'lucide-react';

const UXStory = () => {
  const storySections = [
    {
      title: "The Problem",
      icon: Target,
      color: "electric",
      content: "Nigeria has 13 million unemployed youth, but 60 million micro-businesses need reliable help. There's a massive gap between supply and demand for gig work.",
      insights: [
        "Unemployed youth have skills but no proof of them",
        "Businesses need workers but have no hiring system",
        "Both sides operate entirely informally",
        "No credit history means no access to financial services"
      ]
    },
    {
      title: "The Opportunity",
      icon: Lightbulb,
      color: "neon",
      content: "PassGig bridges this gap by creating the first digital gig platform specifically designed for Nigeria's informal economy.",
      insights: [
        "Connects youth workers directly with traders",
        "Builds financial identities from scratch",
        "Leverages Squad API for secure payments",
        "Creates data for AI credit scoring"
      ]
    },
    {
      title: "The Solution",
      icon: Book,
      color: "electric",
      content: "PassGig is a three-layer platform that transforms informal gig work into structured financial opportunities.",
      insights: [
        "Economic Passport: Digital profile that grows with activity",
        "AI Matching Engine: Finds best-fit gigs automatically",
        "Financial Inclusion Loop: Transaction data unlocks credit"
      ]
    }
  ];

  const userJourney = [
    {
      step: 1,
      user: "Youth Worker",
      action: "Signs up, declares skills, gets initial AI passport score",
      outcome: "Profile created with trust score, ready for matching"
    },
    {
      step: 2,
      user: "Trader",
      action: "Posts gig, deposits payment into Squad escrow",
      outcome: "Gig published, matching engine activated"
    },
    {
      step: 3,
      user: "System",
      action: "AI matches youth to trader based on skills, location, score",
      outcome: "Top 5 candidates shown to trader"
    },
    {
      step: 4,
      user: "Trader",
      action: "Selects worker, work gets done, marks complete",
      outcome: "Funds released to worker instantly"
    },
    {
      step: 5,
      user: "Both Users",
      action: "Rate each other, update scores",
      outcome: "Financial profiles grow, credit eligibility increases"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#111827' }}>
      {/* Background elements */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #1e293b, #111827, #1e293b)' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center p-4 bg-electric/10 rounded-2xl mb-6">
            <Book className="text-electric" size={48} />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-electric via-white to-neon bg-clip-text text-transparent px-4">
            The PassGig UX Story
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed px-4">
            How PassGig transforms Nigeria's informal economy into structured financial opportunity
          </p>
        </motion.div>

        {/* Story Sections */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {storySections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className={`p-2 sm:p-3 rounded-2xl mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 ${section.color === 'electric' ? 'bg-electric/20' : 'bg-neon/20'}`}>
                  <section.icon className={`${section.color === 'electric' ? 'text-electric' : 'text-neon'}`} size={28} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">{section.title}</h3>
              </div>

              <p className="text-slate-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {section.content}
              </p>

              <div className="space-y-3">
                {section.insights.map((insight, idx) => (
                  <div key={idx} className="flex items-start space-x-2 sm:space-x-3 bg-slate-800/50 rounded-xl p-3 sm:p-4 border border-slate-600">
                    <div className={`w-2 h-2 rounded-full ${section.color === 'electric' ? 'bg-electric' : 'bg-neon'} mt-1.5 sm:mt-2 flex-shrink-0`} />
                    <span className="text-slate-300 leading-relaxed text-sm sm:text-base">{insight}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* User Journey */}
        <motion.div
          className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-700 shadow-2xl mx-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8 sm:mb-10">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              The Complete User Journey
            </h3>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-electric to-neon rounded-full mx-auto"></div>
          </div>

          <div className="space-y-6">
            {userJourney.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-slate-600"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 self-center sm:self-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-electric/20 rounded-xl flex items-center justify-center">
                    <span className="text-electric font-bold text-base sm:text-lg">{step.step}</span>
                  </div>
                </div>

                <div className="flex-grow w-full sm:w-auto">
                  <div className="flex items-center mb-2">
                    <Users className="text-neon mr-2 flex-shrink-0" size={18} />
                    <span className="text-neon font-semibold text-sm sm:text-base">{step.user}:</span>
                  </div>
                  <p className="text-slate-300 mb-2 sm:mb-3 leading-relaxed text-sm sm:text-base">{step.action}</p>
                  <div className="flex items-start space-x-2">
                    <ArrowRight className="text-slate-400 mt-0.5 flex-shrink-0" size={14} />
                    <span className="text-slate-400 text-xs sm:text-sm italic">{step.outcome}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Key Benefits */}
          <motion.div
            className="mt-8 sm:mt-12 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-4 sm:mb-6">
              <CheckCircle className="text-electric mx-auto mb-3 sm:mb-4" size={32} />
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">The Impact</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-electric mb-2">13M+</div>
                <p className="text-slate-300 text-sm sm:text-base">Unemployed youth can access gig opportunities</p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-neon mb-2">60M+</div>
                <p className="text-slate-300 text-sm sm:text-base">Micro-businesses get reliable workers</p>
              </div>
            </div>
            <p className="text-slate-200 text-center mt-6 text-lg italic">
              "Every completed gig builds financial identity, unlocking access to credit, savings, and insurance for Nigeria's informal economy."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default UXStory;