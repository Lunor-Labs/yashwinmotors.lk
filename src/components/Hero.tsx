import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('quotation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/90" />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <p className="text-amber-400 text-sm sm:text-base font-medium tracking-[0.3em] uppercase mb-4 animate-fade-in">
          Premium Japanese Imports
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Your Dream Car,
          <span className="block text-amber-400">Delivered from Japan</span>
        </h1>
        <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Experience seamless car importing with complete transparency.
          From auction to your doorstep, we handle everything.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToForm}
            className="group bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25"
          >
            Get Your Quote
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </button>
          <a
            href="#values"
            className="text-white border border-white/30 hover:border-amber-400 hover:text-amber-400 font-medium px-8 py-4 rounded-lg transition-all duration-300"
          >
            Learn More
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-white">500+</p>
            <p className="text-slate-400 text-sm">Cars Imported</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-white">100%</p>
            <p className="text-slate-400 text-sm">Satisfaction</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-white">10+</p>
            <p className="text-slate-400 text-sm">Years Experience</p>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToForm}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-amber-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
