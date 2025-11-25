import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 text-center mt-auto">
      <div className="max-w-4xl mx-auto px-4">
        <p className="font-bold text-white text-lg mb-2">Ingat!</p>
        <p className="text-sm mb-4">
          Jika tekanan darah tidak kunjung turun atau bertambah tinggi, 
          segeralah pergi ke <span className="text-yellow-400 font-bold">PUSKESMAS</span> untuk mendapatkan pengobatan.
        </p>
        <div className="h-px bg-gray-700 w-24 mx-auto my-4"></div>
        <p className="text-xs opacity-60">
          Kampanye Anti Hipertensi - Berdasarkan Poster Edukasi Kesehatan
        </p>
      </div>
    </footer>
  );
};

export default Footer;