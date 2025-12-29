
import React from 'react';
import { Link } from 'react-router-dom';
import { ICONS } from '../constants';
import AIConsultant from '../components/AIConsultant';

const Home: React.FC = () => {
  const pillars = [
    {
      title: "Création Web",
      desc: "Sites vitrines et applications web sur mesure, performantes et sécurisées.",
      icon: <ICONS.Web />,
      path: "/services"
    },
    {
      title: "Formations Tech",
      desc: "Programmes intensifs en Dev Web, UX/UI et IA pour booster votre carrière.",
      icon: <ICONS.Education />,
      path: "/formations"
    },
    {
      title: "Innovation IA",
      desc: "Solutions visuelles et stratégiques augmentées par l'Intelligence Artificielle.",
      icon: <ICONS.AI />,
      path: "/services"
    }
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 lg:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center space-x-2 bg-nexusOrange/10 text-nexusOrange px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase animate-fade-in">
                <span>Le point de convergence du digital</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-nexusBlue leading-tight">
                Construire votre <span className="text-nexusOrange">présence</span> et maîtriser les <span className="text-nexusOrange">technologies</span>.
              </h1>
              <p className="text-lg text-nexusBlue/70 max-w-2xl mx-auto lg:mx-0">
                NEXUS connecte la technologie, la formation et l'innovation pour transformer vos idées en succès digitaux durables.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link to="/contact" className="px-8 py-4 bg-nexusBlue text-white rounded-xl font-bold hover:bg-nexusBlue/90 transition shadow-xl">
                  Démarrer un projet
                </Link>
                <Link to="/formations" className="px-8 py-4 bg-white text-nexusBlue border-2 border-nexusBlue rounded-xl font-bold hover:bg-nexusGray/20 transition">
                  Voir les formations
                </Link>
              </div>
              <div className="pt-8 flex items-center justify-center lg:justify-start gap-6 text-nexusBlue/60">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-nexusBlue">100%</span>
                  <span className="text-xs uppercase font-medium">Satisfaction</span>
                </div>
                <div className="w-px h-10 bg-nexusGray"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-nexusBlue">50+</span>
                  <span className="text-xs uppercase font-medium">Projets Web</span>
                </div>
                <div className="w-px h-10 bg-nexusGray"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-nexusBlue">500+</span>
                  <span className="text-xs uppercase font-medium">Étudiants</span>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 relative group">
              <div className="absolute -inset-4 bg-nexusOrange/10 rounded-3xl blur-2xl group-hover:bg-nexusOrange/20 transition duration-1000"></div>
              <img 
                src="https://picsum.photos/seed/nexus/800/600" 
                alt="Tech Innovation" 
                className="relative rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition duration-500 w-full object-cover h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="bg-nexusGray/20 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-nexusBlue">Notre Expertise</h2>
            <p className="text-nexusBlue/60">Trois pôles de compétences complémentaires pour répondre à tous vos besoins technologiques.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <Link 
                key={idx} 
                to={pillar.path}
                className="group bg-white p-10 rounded-3xl border border-nexusGray hover:border-nexusOrange transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 text-left space-y-6"
              >
                <div className="w-16 h-16 bg-nexusOrange text-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold text-nexusBlue">{pillar.title}</h3>
                <p className="text-nexusBlue/60 leading-relaxed">{pillar.desc}</p>
                <div className="pt-4 flex items-center text-nexusOrange font-semibold gap-2">
                  En savoir plus
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI Consultant Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-nexusBlue">Demandez conseil à <span className="text-nexusOrange">NEXUS AI</span>.</h2>
            <p className="text-lg text-nexusBlue/70">
              Notre agent intelligent est disponible 24/7 pour vous guider sur vos choix technologiques, vos besoins en formation ou l'intégration de l'IA dans vos processus métier.
            </p>
            <ul className="space-y-4">
              {["Audit de présence en ligne gratuit", "Orientation carrière tech", "Conseils marketing digital"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-medium text-nexusBlue">
                  <div className="w-5 h-5 bg-nexusOrange/20 text-nexusOrange rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12 lg:mt-0">
            <AIConsultant />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-nexusBlue py-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-nexusOrange rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-nexusOrange rounded-full blur-3xl opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center space-y-10 relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white italic">
            "Le point de convergence de vos ambitions digitales."
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/contact" className="px-10 py-5 bg-nexusOrange text-white rounded-2xl font-bold text-lg hover:scale-105 transition shadow-2xl shadow-nexusOrange/40">
              Lancer mon projet Web
            </Link>
            <Link to="/formations" className="px-10 py-5 bg-white text-nexusBlue rounded-2xl font-bold text-lg hover:scale-105 transition">
              S'inscrire à une formation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
