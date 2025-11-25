import React, { useState } from 'react';
import { Calculator, RotateCcw } from 'lucide-react';
import { CalculationStatus } from '../types';

const BmiCalculator: React.FC = () => {
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [status, setStatus] = useState<CalculationStatus>(CalculationStatus.IDLE);

  const calculateBmi = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // convert cm to m

    if (w > 0 && h > 0) {
      const result = w / (h * h);
      setBmi(result);
      
      if (result < 18.5) setStatus(CalculationStatus.WARNING);
      else if (result >= 18.5 && result <= 24.9) setStatus(CalculationStatus.HEALTHY);
      else if (result >= 25 && result <= 29.9) setStatus(CalculationStatus.WARNING);
      else setStatus(CalculationStatus.DANGER);
    }
  };

  const reset = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setStatus(CalculationStatus.IDLE);
  };

  return (
    <div className="max-w-md mx-auto px-4 mb-12">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div className="bg-green-600 p-4 flex items-center gap-3">
          <Calculator className="text-white" size={24} />
          <h3 className="text-white font-bold text-lg">Cek Berat Badan Ideal (Poin B)</h3>
        </div>
        
        <div className="p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Berat Badan (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                placeholder="Contoh: 65"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tinggi Badan (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                placeholder="Contoh: 170"
              />
            </div>
            
            <div className="flex gap-3 pt-2">
              <button
                onClick={calculateBmi}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors shadow-md active:transform active:scale-95"
              >
                Hitung BMI
              </button>
              <button
                onClick={reset}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-lg transition-colors"
                aria-label="Reset"
              >
                <RotateCcw size={20} />
              </button>
            </div>
          </div>

          {bmi !== null && (
            <div className={`mt-6 p-4 rounded-xl text-center animate-fade-in ${
              status === CalculationStatus.HEALTHY ? 'bg-green-50 text-green-800 border border-green-200' : 
              status === CalculationStatus.WARNING ? 'bg-yellow-50 text-yellow-800 border border-yellow-200' :
              'bg-red-50 text-red-800 border border-red-200'
            }`}>
              <p className="text-sm font-medium uppercase tracking-wider mb-1">Hasil Indeks Massa Tubuh</p>
              <div className="text-4xl font-extrabold mb-2">{bmi.toFixed(1)}</div>
              <p className="font-semibold">
                {status === CalculationStatus.HEALTHY ? 'Berat Badan Ideal! 🎉' :
                 status === CalculationStatus.WARNING ? 'Perlu Waspada (Kurus/Gemuk)' :
                 'Obesitas - Segera Konsultasi'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BmiCalculator;