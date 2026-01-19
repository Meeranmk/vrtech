import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onNavigate?: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      if (onNavigate) {
        onNavigate(targetId);
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-32 overflow-hidden">
      {/* Background - Grey and White Theme */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-100 via-white to-slate-200"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-600 text-[10px] sm:text-xs font-black mb-8 animate-pulse tracking-wider">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              <span className="uppercase">Engineering Excellence Since Inception</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] mb-8 tracking-tighter">
              Dry Cooling <br /><span className="text-red-600">Heat Exchanger Services</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-700 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              VR Technology delivers comprehensive Mechanical and E&I Services to the global energy sector.
              We specialize in Air Cooled Heat Exchangers like Air Fin Coolers, Fin Fan Coolers,
              Air Cooled Condensers and Air Pre Heaters systems lifecycle management with a
              <span className="text-red-600 font-bold italic"> "Right First Time"</span> approach.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-5 mb-12">
              <a
                href="#services"
                onClick={(e) => handleScrollTo(e, 'services')}
                className="group flex items-center justify-center bg-red-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg hover:bg-red-700 transition-all shadow-2xl shadow-red-600/30 active:scale-[0.98]"
              >
                Explore Services <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="flex items-center justify-center bg-slate-700 text-white border-2 border-slate-600 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg hover:bg-slate-800 hover:border-slate-700 transition-all active:scale-[0.98] shadow-lg"
              >
                Contact Sales Team
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 border-t border-slate-300">
              {[
                { text: "ISO Certified", icon: <CheckCircle2 className="w-5 h-5 text-red-600" /> },
                { text: "24/7 Field Support", icon: <CheckCircle2 className="w-5 h-5 text-red-600" /> },
                { text: "Pan-India & Global Reach", icon: <CheckCircle2 className="w-5 h-5 text-red-600" /> }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="p-1 bg-red-100 rounded-full">{item.icon}</div>
                  <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em]">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:flex lg:items-center lg:justify-center">
            <div className="max-w-lg w-full">
              <img
                src="/assets/Heat Exchange Solution/images.jpg"
                alt="Heat Exchange Solution"
                className="w-full h-auto rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
