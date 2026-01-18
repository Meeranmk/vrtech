
import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      // Corrected offset for new Navbar height (including mobile scroll strip)
      const isMobile = window.innerWidth < 768;
      const offset = isMobile ? 130 : 80;

      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=2070"
          alt="Industrial Facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-[2px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] sm:text-xs font-black mb-8 animate-pulse tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="uppercase">Engineering Excellence Since Inception</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-8 tracking-tighter">
              Dry Cooling & <br /><span className="text-blue-500">Heat Exchange</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              VR Technology delivers comprehensive ME&I services to the global energy sector.
              We specialize in Air Cooled Heat Exchangers like Air Fin Coolers, Fin Fan Coolers,
              Air Cooled Condensers and Air Pre Heaters systems lifecycle management with a
              <span className="text-blue-400 font-bold italic"> "Right First Time"</span> approach.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-5 mb-12">
              <a
                href="#services"
                onClick={(e) => handleScrollTo(e, 'services')}
                className="group flex items-center justify-center bg-red-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-base sm:text-lg uppercase tracking-tighter hover:bg-red-500 transition-all hover:scale-[1.03] active:scale-[0.98] shadow-2xl shadow-red-600/30"
              >
                Explore Services <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="flex items-center justify-center bg-slate-900/50 backdrop-blur-xl text-white border-2 border-white/10 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg hover:bg-white/10 hover:border-white/20 transition-all active:scale-[0.98]"
              >
                Contact Sales Team
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 border-t border-white/10">
              {[
                { text: "ISO Certified", icon: <CheckCircle2 className="w-5 h-5 text-blue-500" /> },
                { text: "24/7 Field Support", icon: <CheckCircle2 className="w-5 h-5 text-blue-500" /> },
                { text: "Pan-India & Global Reach", icon: <CheckCircle2 className="w-5 h-5 text-blue-500" /> }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="p-1 bg-blue-500/10 rounded-full">{item.icon}</div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Heat Exchange Image */}
          <div className="hidden lg:flex lg:items-center lg:justify-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 hover:border-blue-500/30 transition-all duration-300 group max-w-lg w-full">
              <img
                src="/assets/Heat Exchange Solution/images.jpg"
                alt="Heat Exchange Solutions"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
