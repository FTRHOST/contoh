import React from 'react';
import { AlertTriangle, Activity } from 'lucide-react';

const InfoSection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 mt-8">
      <div className="bg-white rounded-2xl shadow-lg border-l-8 border-red-500 overflow-hidden">
        <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-shrink-0 bg-red-100 p-4 rounded-full">
            <AlertTriangle size={40} className="text-red-600" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              Perlu Diketahui
              <span className="text-sm bg-red-600 text-white px-2 py-1 rounded-md">Waspada!</span>
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Hipertensi atau darah tinggi adalah suatu kondisi dimana tekanan darah 
              <span className="font-bold text-red-600 mx-1">≥ 140/90 mmHg</span> 
              dalam beberapa waktu pengukuran terpisah.
            </p>
            <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
              <h3 className="font-semibold text-orange-800 mb-2 flex items-center gap-2">
                <Activity size={18} />
                Dampak Kesehatan:
              </h3>
              <p className="text-sm text-orange-700">
                Dapat menyebabkan penyakit serius pada <strong>Jantung</strong>, <strong>Ginjal</strong>, ataupun <strong>Otak</strong>. Bisa terjadi pada keluarga kita.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;