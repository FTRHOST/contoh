import React from 'react';
import { PersonStanding, Scale, Stethoscope, Apple } from 'lucide-react';
import { AbcdItem } from '../types';

const abcdData: AbcdItem[] = [
  {
    letter: 'A',
    title: 'Aktivitas & Olahraga',
    description: 'Lakukan aktivitas rutin sangat dianjurkan untuk menurunkan tekanan darah. Olahraga ringan secara rutin dapat mengurangi stres.',
    color: 'bg-red-500',
    iconName: 'activity'
  },
  {
    letter: 'B',
    title: 'Berat Badan Ideal',
    description: 'Kelebihan berat badan (obesitas) adalah faktor risiko utama. Jaga berat badan ideal untuk hindari kolesterol dan diabetes.',
    color: 'bg-green-600',
    iconName: 'scale'
  },
  {
    letter: 'C',
    title: 'Cek Tensi Rutin',
    description: 'Memeriksa tekanan darah rutin secara mandiri di rumah atau PUSKESMAS sangat diperlukan untuk mengetahui nilai berkala (Target < 140/90).',
    color: 'bg-blue-600',
    iconName: 'monitor'
  },
  {
    letter: 'D',
    title: 'Diet Sehat',
    description: 'Perbanyak buah & sayur. Kurangi garam (max 1 sdt/hari) dan penyedap rasa buatan. Hindari konsumsi alkohol.',
    color: 'bg-yellow-500',
    iconName: 'salad'
  }
];

const AbcdGrid: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-10">
        Prinsip <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600">ABCD</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {abcdData.map((item, index) => (
          <div key={index} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
            <div className={`h-2 ${item.color} w-full`}></div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg`}>
                  {item.letter}
                </div>
                <div className="text-gray-300 group-hover:text-gray-500 transition-colors">
                  {item.iconName === 'activity' && <PersonStanding size={32} />}
                  {item.iconName === 'scale' && <Scale size={32} />}
                  {item.iconName === 'monitor' && <Stethoscope size={32} />}
                  {item.iconName === 'salad' && <Apple size={32} />}
                </div>
              </div>
              
              <h3 className={`text-xl font-bold mb-3 ${item.color.replace('bg-', 'text-')}`}>
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
            {/* Decoration Circle */}
            <div className={`absolute -bottom-10 -right-10 w-24 h-24 ${item.color} opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AbcdGrid;