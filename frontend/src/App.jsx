import HeroSection from './components/HeroSection';
import UXStory from './components/UXStory';
import TargetUsers from './components/TargetUsers';
import ArchitectureLayers from './components/ArchitectureLayers';
import SquadIntegration from './components/SquadIntegration';
import EndToEndFlow from './components/EndToEndFlow';

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#111827' }}>
      <HeroSection />
      <UXStory />
      <TargetUsers />
      <ArchitectureLayers />
      <SquadIntegration />
      <EndToEndFlow />

      {/* Footer */}
      <footer className="py-8 sm:py-12 border-t" style={{ backgroundColor: '#111827', borderColor: '#1e293b' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 sm:space-x-6 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-electric/20 rounded-xl flex items-center justify-center">
                <span className="text-electric font-bold text-lg sm:text-xl">P</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">PassGig</h3>
            </div>
            <p className="text-slate-400 text-base sm:text-lg mb-3 sm:mb-4">
              Economic Passport + Skill-to-Gig Platform
            </p>
            <p className="text-slate-500 text-sm sm:text-base">
              Squad Hackathon 3.0 · Challenge 02 · Smart Systems
            </p>
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-800">
              <p className="text-slate-500 text-xs sm:text-sm">
                Built for Nigeria's informal economy · Connecting youth with opportunities
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
