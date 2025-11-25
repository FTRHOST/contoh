import React from 'react';
import { HeartPulse } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-b-[3rem] shadow-xl overflow-hidden p-8 md:p-12 text-center">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')]"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="bg-white/20 p-4 rounded-full mb-4 animate-bounce">
          <HeartPulse size={48} className="text-white" />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-2 tracking-tight drop-shadow-md">
          4 Kiat Anti <span className="text-yellow-300">Hipertensi</span>
        </h1>
        <p className="text-lg md:text-xl font-medium opacity-90 max-w-2xl mx-auto">
          Ketahui angkanya, cegah, dan atasi. Ingat prinsip ABCD untuk hidup lebih sehat.
        </p>
      </div>
    </div>
  );
};

export default Hero;