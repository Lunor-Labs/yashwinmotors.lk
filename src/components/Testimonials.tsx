import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Michael Chen',
    location: 'California, USA',
    car: 'Toyota Supra MK4',
    rating: 5,
    text: "Absolutely seamless experience from start to finish. They found my dream Supra in perfect condition, handled all the paperwork, and kept me updated throughout. The car arrived exactly as described. Couldn't be happier!",
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Sarah Williams',
    location: 'Sydney, Australia',
    car: 'Nissan Skyline R34',
    rating: 5,
    text: "I was nervous about importing a car internationally, but JapanImports made it incredibly easy. Their transparency about costs and timeline was refreshing. My R34 is everything I dreamed of. Highly recommend!",
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'James Morrison',
    location: 'London, UK',
    car: 'Honda NSX',
    rating: 5,
    text: "Professional service all the way. They went above and beyond to find a low-mileage NSX with full service history. The inspection reports and photos were incredibly detailed. Worth every penny.",
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'David Park',
    location: 'Vancouver, Canada',
    car: 'Subaru WRX STI',
    rating: 5,
    text: "Third car I've imported through JapanImports. Consistent quality and service every time. They truly understand what enthusiasts are looking for and deliver beyond expectations.",
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-amber-600 font-medium tracking-wide uppercase text-sm mb-3">
            Customer Stories
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Don't just take our word for it. Hear from car enthusiasts who trusted us with their imports.
          </p>
        </div>

        <div className="hidden lg:grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-slate-100"
            >
              <div className="flex items-start gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                  <p className="text-slate-500 text-sm">{testimonial.location}</p>
                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <Quote className="w-10 h-10 text-amber-200" />
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">"{testimonial.text}"</p>
              <div className="pt-4 border-t border-slate-100">
                <p className="text-sm text-slate-500">
                  Imported: <span className="text-amber-600 font-medium">{testimonial.car}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:hidden">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
            <div className="flex items-start gap-4 mb-6">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-slate-500 text-sm">
                  {testimonials[currentIndex].location}
                </p>
                <div className="flex gap-1 mt-1">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              "{testimonials[currentIndex].text}"
            </p>
            <div className="pt-4 border-t border-slate-100">
              <p className="text-sm text-slate-500">
                Imported:{' '}
                <span className="text-amber-600 font-medium">
                  {testimonials[currentIndex].car}
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={goPrev}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-amber-600 hover:border-amber-200 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-amber-500' : 'bg-slate-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={goNext}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-amber-600 hover:border-amber-200 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-slate-900 mb-2">500+</p>
            <p className="text-slate-500">Cars Imported</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-slate-900 mb-2">98%</p>
            <p className="text-slate-500">Satisfaction Rate</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-slate-900 mb-2">25+</p>
            <p className="text-slate-500">Countries Served</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-slate-900 mb-2">4.9</p>
            <p className="text-slate-500">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
