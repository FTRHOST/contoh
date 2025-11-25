import React from 'react';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import AbcdGrid from './components/AbcdGrid';
import BmiCalculator from './components/BmiCalculator';
import AiAssistant from './components/AiAssistant';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-orange-50">
      <Hero />
      
      <main className="flex-grow">
        <InfoSection />
        
        <AbcdGrid />
        
        <div className="max-w-4xl mx-auto px-4 text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Alat Bantu Kesehatan</h2>
          <p className="text-gray-600">Gunakan kalkulator ini untuk memantau faktor risiko (Poin B)</p>
        </div>
        
        <BmiCalculator />
      </main>

      <Footer />
      
      <AiAssistant />
    </div>
  );
};

export default App;