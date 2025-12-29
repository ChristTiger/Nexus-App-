
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pb-24 space-y-24">
      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 pt-16 flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-extrabold text-nexusBlue tracking-tight">
              Connecter l'<span className="text-nexusOrange">expertise</span> à l'innovation.
            </h1>
            <p className="text-xl text-nexusBlue/60 leading-relaxed">
              NEXUS est né de la volonté de créer un pont entre les talents technologiques de demain et les entreprises en quête de transformation numérique.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 pt-4">
            <div className="p-6 bg-nexusGray/30 rounded-3xl">
              <h4 className="text-3xl font-bold text-nexusOrange">2021</h4>
              <p className="text-sm font-semibold uppercase text-nexusBlue/60">Année de Fondation</p>
            </div>
            <div className="p-6 bg-nexusGray/30 rounded-3xl">
              <h4 className="text-3xl font-bold text-nexusOrange">15+</h4>
              <p className="text-sm font-semibold uppercase text-nexusBlue/60">Experts Tech</p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img src="https://picsum.photos/seed/nexus-about/800/600" alt="About Nexus" className="rounded-3xl shadow-2xl grayscale" />
        </div>
      </section>

      {/* Values */}
      <section className="bg-nexusBlue py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="text-nexusOrange text-4xl font-bold">01</div>
            <h3 className="text-2xl font-bold">Innovation</h3>
            <p className="text-nexusGray">Nous ne suivons pas les tendances, nous les créons. L'IA est au cœur de tous nos processus créatifs.</p>
          </div>
          <div className="space-y-4">
            <div className="text-nexusOrange text-4xl font-bold">02</div>
            <h3 className="text-2xl font-bold">Connexion</h3>
            <p className="text-nexusGray">NEXUS est le centre où se rejoignent créateurs, entrepreneurs et étudiants pour bâtir le futur.</p>
          </div>
          <div className="space-y-4">
            <div className="text-nexusOrange text-4xl font-bold">03</div>
            <h3 className="text-2xl font-bold">Expertise</h3>
            <p className="text-nexusGray">Une rigueur technique sans compromis pour garantir des résultats performants et durables.</p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="max-w-5xl mx-auto px-4 text-center space-y-12">
        <div className="space-y-4">
           <h2 className="text-4xl font-bold text-nexusBlue">Notre Engagement</h2>
           <p className="text-nexusBlue/60 text-lg">Nous croyons que le digital est le plus grand levier de croissance pour l'Afrique et le monde.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-10 border border-nexusGray rounded-[2rem] text-left space-y-4">
            <div className="text-nexusOrange font-bold flex items-center gap-2">
              <span className="text-2xl">🚀</span> Mission
            </div>
            <p className="text-nexusBlue leading-relaxed">
              Connecter la technologie, la formation et l’innovation pour construire une présence digitale solide et accompagner la montée en compétences technologiques de nos clients.
            </p>
          </div>
          <div className="p-10 border border-nexusGray rounded-[2rem] text-left space-y-4">
            <div className="text-nexusOrange font-bold flex items-center gap-2">
              <span className="text-2xl">🎯</span> Vision
            </div>
            <p className="text-nexusBlue leading-relaxed">
              Devenir la référence en matière de création digitale performante et de formation technologique avancée, reconnue pour son expertise en Afrique et à l’international.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
