
import React, { useState } from 'react';
import { generateAIImage } from '../services/geminiService';

const Services: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedImg, setGeneratedImg] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const mainServices = [
    {
      title: "Conception & Développement Web",
      items: [
        "Sites vitrines institutionnels",
        "E-commerce & Boutiques en ligne",
        "Applications Web Progressives (PWA)",
        "Maintenance & Hébergement sécurisé",
        "Optimisation SEO & Performance"
      ]
    },
    {
      title: "Formation Certifiante",
      items: [
        "Développement Full Stack",
        "Design UX/UI moderne",
        "Management de projet digital",
        "Mastery Outils d'Intelligence Artificielle",
        "Accompagnement Job Ready"
      ]
    },
    {
      title: "Design & Innovation IA",
      items: [
        "Branding & Logo Design",
        "Création de visuels publicitaires par IA",
        "Marketing Content Automation",
        "Conseil en transformation digitale",
        "Avatar & Vidéo génération"
      ]
    }
  ];

  const handleGenerate = async () => {
    if (!prompt.trim() || isGenerating) return;
    setIsGenerating(true);
    const result = await generateAIImage(prompt);
    setGeneratedImg(result);
    setIsGenerating(false);
  };

  return (
    <div className="pb-24 space-y-24">
      {/* Header */}
      <section className="bg-nexusBlue text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold">Nos Services <span className="text-nexusOrange">Sur-Mesure</span></h1>
          <p className="text-xl text-nexusGray max-w-2xl mx-auto">
            De l'idée à la mise en ligne, nous vous accompagnons dans chaque étape de votre transformation numérique.
          </p>
        </div>
      </section>

      {/* Service List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {mainServices.map((service, i) => (
            <div key={i} className="bg-white border border-nexusGray p-8 rounded-3xl space-y-8 shadow-sm hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-nexusBlue h-16">{service.title}</h3>
              <ul className="space-y-4">
                {service.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-nexusBlue/70">
                    <span className="text-nexusOrange font-bold mt-1">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 bg-nexusGray/30 text-nexusBlue font-bold rounded-xl hover:bg-nexusBlue hover:text-white transition-all">
                Demander un devis
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* AI Visual Demo */}
      <section className="bg-nexusGray/10 py-24 border-y border-nexusGray">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-block bg-nexusOrange text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              Innovation Lab
            </div>
            <h2 className="text-3xl font-bold text-nexusBlue">Nexus Studio IA : Créez vos visuels en un clic</h2>
            <p className="text-nexusBlue/60">Testez la puissance de notre service de design par IA. Décrivez le visuel que vous imaginez pour votre marque.</p>
          </div>
          
          <div className="bg-white p-6 rounded-3xl shadow-2xl border border-nexusGray">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6 flex flex-col justify-center">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-nexusBlue uppercase">Description du visuel</label>
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Ex: Une montagne futuriste en bleu et orange avec des lignes technologiques..."
                    className="w-full h-32 p-4 bg-nexusGray/20 border-nexusGray rounded-2xl focus:outline-none focus:ring-2 focus:ring-nexusOrange"
                  />
                </div>
                <button
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="w-full py-5 bg-nexusOrange text-white rounded-2xl font-bold text-lg hover:bg-orange-600 transition disabled:opacity-50 flex items-center justify-center gap-3"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Génération en cours...
                    </>
                  ) : 'Générer mon visuel Pro'}
                </button>
                <p className="text-xs text-nexusBlue/40 text-center italic">
                  Note: Cette démo utilise Gemini 2.5 Flash Image. Les résultats réels pour nos clients incluent des retouches manuelles expertes.
                </p>
              </div>
              <div className="bg-nexusGray/20 rounded-2xl flex items-center justify-center min-h-[300px] overflow-hidden relative border-2 border-dashed border-nexusGray">
                {generatedImg ? (
                  <img src={generatedImg} alt="AI Generated" className="w-full h-full object-cover animate-fade-in" />
                ) : (
                  <div className="text-nexusBlue/30 text-center p-8 space-y-4">
                    <svg className="w-16 h-16 mx-auto opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="font-medium">Votre création apparaîtra ici</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Contact Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-nexusBlue p-12 rounded-[3rem] text-center text-white space-y-8">
          <h2 className="text-3xl lg:text-5xl font-bold">Prêt à digitaliser votre activité ?</h2>
          <p className="text-lg text-nexusGray max-w-xl mx-auto">
            Contactez notre équipe pour une étude personnalisée de votre projet et recevez un devis sous 48h.
          </p>
          <button className="px-12 py-5 bg-nexusOrange text-white rounded-full font-bold text-xl hover:scale-105 transition">
            Discuter avec un expert
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
