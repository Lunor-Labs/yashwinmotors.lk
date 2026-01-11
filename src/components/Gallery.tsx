import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryItems = [
  {
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Toyota Supra MK4',
    year: '1998',
    status: 'Delivered',
  },
  {
    image: 'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Nissan Skyline R34',
    year: '2001',
    status: 'Delivered',
  },
  {
    image: 'https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Honda NSX',
    year: '1995',
    status: 'Delivered',
  },
  {
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Mazda RX-7 FD',
    year: '1999',
    status: 'Delivered',
  },
  {
    image: 'https://images.pexels.com/photos/3786091/pexels-photo-3786091.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Subaru WRX STI',
    year: '2004',
    status: 'Delivered',
  },
  {
    image: 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Mitsubishi Lancer Evo',
    year: '2006',
    status: 'Delivered',
  },
];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-amber-400 font-medium tracking-wide uppercase text-sm mb-3">
            Our Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Recent Imports
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Browse through some of the exceptional vehicles we've imported for our satisfied customers.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block bg-amber-500 text-slate-900 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {item.status}
                </span>
                <h3 className="text-xl font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm">{item.year}</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium">
                  View Details
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/95 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={32} />
          </button>

          <button
            onClick={goPrev}
            className="absolute left-4 sm:left-8 text-white/60 hover:text-white transition-colors p-2"
            aria-label="Previous"
          >
            <ChevronLeft size={40} />
          </button>

          <button
            onClick={goNext}
            className="absolute right-4 sm:right-8 text-white/60 hover:text-white transition-colors p-2"
            aria-label="Next"
          >
            <ChevronRight size={40} />
          </button>

          <div className="max-w-4xl w-full">
            <img
              src={galleryItems[currentIndex].image}
              alt={galleryItems[currentIndex].title}
              className="w-full max-h-[70vh] object-contain rounded-lg"
            />
            <div className="text-center mt-6">
              <h3 className="text-2xl font-semibold text-white mb-2">
                {galleryItems[currentIndex].title}
              </h3>
              <p className="text-slate-400">{galleryItems[currentIndex].year}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
