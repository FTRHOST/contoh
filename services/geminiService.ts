import { GoogleGenAI } from "@google/genai";

const POSTER_CONTEXT = `
Anda adalah asisten kesehatan ramah yang ahli tentang Hipertensi berdasarkan poster "4 Kiat Anti Hipertensi".
Jawablah pertanyaan pengguna dalam Bahasa Indonesia yang mudah dipahami.
Gunakan fakta berikut dari poster:

DEFINISI:
- Hipertensi adalah kondisi tekanan darah >= 140/90 mmHg.
- Risiko: Penyakit jantung, ginjal, dan otak.
- Bisa terjadi pada keluarga kita.

STRATEGI ABCD:
1. A (Aktivitas dan Olahraga): Lakukan aktivitas rutin untuk menurunkan tekanan darah dan mengurangi stres. Olahraga ringan rutin sangat dianjurkan.
2. B (Berat Badan Ideal): Obesitas adalah faktor risiko. Jaga berat badan untuk hindari kolesterol tinggi dan diabetes.
3. C (Cek Tekanan Darah Rutin): Periksa mandiri di rumah atau PUSKESMAS. Penting untuk mengetahui nilai secara berkala (Target < 140/90).
4. D (Diet Sehat): Perbanyak buah dan sayur. KURANGI GARAM (Penyedap rasa buatan). Batasi garam maksimal 1 sendok teh per hari. Hindari alkohol.

SARAN TAMBAHAN:
- Jika tekanan darah tidak turun, segera ke PUSKESMAS.
- Minum obat secara rutin jika diresepkan.
- Ingat pola hidup sehat.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return "Maaf, API Key tidak ditemukan. Mohon hubungi administrator.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: POSTER_CONTEXT,
        temperature: 0.7,
      }
    });

    return response.text || "Maaf, saya tidak dapat memproses permintaan Anda saat ini.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Terjadi kesalahan saat menghubungi asisten kesehatan.";
  }
};