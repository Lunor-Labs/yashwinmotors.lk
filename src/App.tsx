import Header from './components/Header';
import Hero from './components/Hero';
import Values from './components/Values';
import QuotationForm from './components/QuotationForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main>
        <Hero />
        <Values />
        <QuotationForm />
      </main>
      <Footer />
    </div>
  );
}
