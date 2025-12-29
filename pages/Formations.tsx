
import React from 'react';
import { Formation } from '../types';

const Formations: React.FC = () => {
  const catalogue: Formation[] = [
    {
      id: '1',
      title: 'Full Stack Web Mastery',
      duration: '4 mois (intensif)',
      level: 'Débutant à Avancé',
      description: 'Apprenez React, Node.js et les bases de données pour devenir un développeur complet et opérationnel.',
      price: '850 €',
      image: 'https://picsum.photos/seed/code/600/400'
    },
    {
      id: '2',
      title: 'UX/UI & IA Design',
      duration: '8 semaines',
      level: 'Intermédiaire',
      description: 'Maîtrisez Figma et les outils de génération IA pour concevoir des interfaces futuristes et engageantes.',
      price: '450 €',
      image: 'https://picsum.photos/seed/design/600/400'
    },
    {
      id: '3',
      title: 'IA for Business',
      duration: '4 semaines',
      level: 'Tous niveaux',
      description: 'Apprenez à intégrer Gemini, ChatGPT et Midjourney dans vos workflows quotidiens pour gagner en productivité.',
      price: '299 €',
      image: 'https://picsum.photos/seed/ia/600/400'
    }
  ];

  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="bg-nexusGray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-5xl font-extrabold text-nexusBlue">Formations <span className="text-nexusOrange">Certifiantes</span></h1>
            <p className="text-xl text-nexusBlue/60">
              Nexus Academy vous forme aux métiers du futur avec des programmes axés sur la pratique et les besoins du marché international.
            </p>
          </div>
        </div>
      </section>

      {/* Catalogue */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {catalogue.map((item) => (
            <div key={item.id} className="bg-white border border-nexusGray rounded-3xl overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300">
              <div className="h-56 relative overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                <div className="absolute top-4 right-4 bg-nexusOrange text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                  {item.level}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col space-y-4">
                <h3 className="text-2xl font-bold text-nexusBlue">{item.title}</h3>
                <div className="flex items-center gap-4 text-sm font-medium text-nexusBlue/50">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {item.duration}
                  </span>
                </div>
                <p className="text-nexusBlue/70 flex-1">{item.description}</p>
                <div className="pt-6 border-t border-nexusGray flex items-center justify-between">
                  <span className="text-3xl font-bold text-nexusOrange">{item.price}</span>
                  <button className="bg-nexusBlue text-white px-6 py-2.5 rounded-xl font-bold hover:bg-nexusBlue/90 transition">
                    S'inscrire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ / Info */}
      <section className="max-w-5xl mx-auto px-4 mt-32 space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-nexusBlue">Pourquoi choisir NEXUS Academy ?</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-nexusOrange">Pédagogie 100% Pratique</h4>
            <p className="text-nexusBlue/60">Finis les cours purement théoriques. Chez Nexus, vous apprenez en construisant de vrais projets pour votre portfolio dès la première semaine.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-nexusOrange">Réseau d'Experts</h4>
            <p className="text-nexusBlue/60">Nos instructeurs sont des professionnels actifs dans l'industrie, apportant une vision concrète et actualisée des technologies.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-nexusOrange">Certification & Accompagnement</h4>
            <p className="text-nexusBlue/60">Recevez un certificat NEXUS reconnu et bénéficiez d'une aide à l'insertion professionnelle ou au lancement de votre freelance.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-nexusOrange">Innovation IA Incluse</h4>
            <p className="text-nexusBlue/60">Tous nos cursus incluent désormais un module sur l'utilisation stratégique de l'IA pour démultiplier votre productivité.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Formations;
