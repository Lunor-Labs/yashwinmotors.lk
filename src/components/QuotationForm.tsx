import { useState } from 'react';
import { Send, Car } from 'lucide-react';

const carMakes = [
  'Toyota',
  'Honda',
  'Nissan',
  'Mazda',
  'Subaru',
  'Mitsubishi',
  'Suzuki',
  'Lexus',
  'Infiniti',
  'Acura',
];

const years = Array.from({ length: 15 }, (_, i) => (2024 - i).toString());

const colors = [
  'White',
  'Black',
  'Silver',
  'Grey',
  'Red',
  'Blue',
  'Pearl White',
  'Champagne',
  'Any',
];

const fuelTypes = ['Petrol', 'Diesel', 'Hybrid', 'Electric', 'Any'];

const transmissions = ['Automatic', 'Manual', 'CVT', 'Any'];

const budgets = [
  'Under $10,000',
  '$10,000 - $20,000',
  '$20,000 - $30,000',
  '$30,000 - $50,000',
  '$50,000 - $75,000',
  '$75,000+',
];

const WHATSAPP_NUMBER = '1234567890';

interface FormData {
  name: string;
  contact: string;
  make: string;
  model: string;
  year: string;
  color: string;
  fuelType: string;
  transmission: string;
  budget: string;
  preferences: string;
}

export default function QuotationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    contact: '',
    make: '',
    model: '',
    year: '',
    color: '',
    fuelType: '',
    transmission: '',
    budget: '',
    preferences: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `*New Car Import Inquiry*

*Customer Details:*
Name: ${formData.name}
Contact: ${formData.contact}

*Vehicle Requirements:*
Make: ${formData.make}
Model: ${formData.model}
Year: ${formData.year}
Color: ${formData.color}
Fuel Type: ${formData.fuelType}
Transmission: ${formData.transmission}
Budget: ${formData.budget}

*Additional Preferences:*
${formData.preferences || 'None specified'}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="quotation" className="py-20 sm:py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-8">
            <p className="text-amber-400 font-medium tracking-wide uppercase text-sm mb-3">
              Start Your Journey
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Request a Quote
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Tell us about your dream car and we'll find it for you. Our team will
              search Japan's best auctions and provide you with options that match
              your exact requirements.
            </p>

            <div className="bg-slate-800 rounded-2xl p-6 mb-6">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Car className="w-5 h-5 text-amber-400" />
                How It Works
              </h3>
              <ol className="space-y-4">
                {[
                  'Submit your requirements',
                  'Receive matching vehicles within 48 hours',
                  'Review inspection reports & photos',
                  'Confirm your choice & we handle the rest',
                ].map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="text-slate-300">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Japanese car auction"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white/80 text-sm">
                Direct access to Japanese auctions
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl"
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-6">
              Your Details
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Contact Number *
                </label>
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  placeholder="+1 234 567 8900"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                />
              </div>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-6">
              Vehicle Requirements
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Car Make *
                </label>
                <select
                  name="make"
                  value={formData.make}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all bg-white"
                >
                  <option value="">Select make</option>
                  {carMakes.map((make) => (
                    <option key={make} value={make}>
                      {make}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Model *
                </label>
                <input
                  type="text"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Camry, Civic"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Year *
                </label>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all bg-white"
                >
                  <option value="">Select year</option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Preferred Color
                </label>
                <select
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all bg-white"
                >
                  <option value="">Select color</option>
                  {colors.map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Fuel Type
                </label>
                <select
                  name="fuelType"
                  value={formData.fuelType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all bg-white"
                >
                  <option value="">Select fuel type</option>
                  {fuelTypes.map((fuel) => (
                    <option key={fuel} value={fuel}>
                      {fuel}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Transmission
                </label>
                <select
                  name="transmission"
                  value={formData.transmission}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all bg-white"
                >
                  <option value="">Select transmission</option>
                  {transmissions.map((trans) => (
                    <option key={trans} value={trans}>
                      {trans}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Budget Range *
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all bg-white"
              >
                <option value="">Select budget</option>
                {budgets.map((budget) => (
                  <option key={budget} value={budget}>
                    {budget}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Additional Preferences
              </label>
              <textarea
                name="preferences"
                value={formData.preferences}
                onChange={handleChange}
                rows={4}
                placeholder="Any specific features, trim levels, or requirements..."
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group hover:shadow-lg hover:shadow-amber-500/25"
            >
              <Send className="w-5 h-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              Send via WhatsApp
            </button>

            <p className="text-center text-slate-500 text-sm mt-4">
              By submitting, you agree to be contacted regarding your inquiry
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
