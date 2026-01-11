import { Shield, Eye, Award, Headphones } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Trust & Reliability',
    description:
      'Over a decade of proven track record in importing quality vehicles. Your investment is safe with us.',
  },
  {
    icon: Eye,
    title: 'Full Transparency',
    description:
      'Real-time updates, detailed inspection reports, and complete cost breakdowns. No hidden fees, ever.',
  },
  {
    icon: Award,
    title: 'Genuine Imports',
    description:
      'Direct access to Japan\'s finest auction houses. Every vehicle comes with verified history and documentation.',
  },
  {
    icon: Headphones,
    title: 'End-to-End Support',
    description:
      'From selection to registration, we guide you through every step. Personal assistance whenever you need it.',
  },
];

export default function Values() {
  return (
    <section id="values" className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-amber-600 font-medium tracking-wide uppercase text-sm mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Importing Made Simple
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            We bring Japan's finest automobiles to your doorstep with complete peace of mind.
            Experience the difference of working with true professionals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-amber-200"
            >
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors duration-300">
                <value.icon className="w-7 h-7 text-amber-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {value.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-slate-900 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <div className="absolute inset-0 bg-gradient-to-l from-amber-500 to-transparent" />
          </div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                The Japan Advantage
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Japanese vehicles are renowned worldwide for their exceptional quality,
                low mileage, and meticulous maintenance. With strict vehicle inspections
                and a culture of car care, imports from Japan offer unmatched value.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-800 rounded-xl p-6 text-center">
                <p className="text-amber-400 text-3xl font-bold mb-2">Low</p>
                <p className="text-slate-400 text-sm">Average Mileage</p>
              </div>
              <div className="bg-slate-800 rounded-xl p-6 text-center">
                <p className="text-amber-400 text-3xl font-bold mb-2">Strict</p>
                <p className="text-slate-400 text-sm">Quality Standards</p>
              </div>
              <div className="bg-slate-800 rounded-xl p-6 text-center">
                <p className="text-amber-400 text-3xl font-bold mb-2">Full</p>
                <p className="text-slate-400 text-sm">Service History</p>
              </div>
              <div className="bg-slate-800 rounded-xl p-6 text-center">
                <p className="text-amber-400 text-3xl font-bold mb-2">Best</p>
                <p className="text-slate-400 text-sm">Value For Money</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
