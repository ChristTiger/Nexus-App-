
import React, { useState } from 'react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
  const projects = [
    { id: 1, title: 'Nova E-shop', category: 'Web', img: 'https://picsum.photos/seed/p1/600/400' },
    { id: 2, title: 'AI Brand Identity', category: 'IA Design', img: 'https://picsum.photos/seed/p2/600/400' },
    { id: 3, title: 'Nexus Learning Hub', category: 'Web', img: 'https://picsum.photos/seed/p3/600/400' },
    { id: 4, title: 'Future Event 2024', category: 'IA Design', img: 'https://picsum.photos/seed/p4/600/400' },
    { id: 5, title: 'AgriTech Dashboard', category: 'Web', img: 'https://picsum.photos/seed/p5/600/400' },
    { id: 6, title: 'Cyber UI Pack', category: 'IA Design', img: 'https://picsum.photos/seed/p6/600/400' },
  ];

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="pb-24">
      <section className="bg-nexusBlue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
          <h1 className="text-5xl font-extrabold">Nos <span className="text-nexusOrange">Réalisations</span></h1>
          <p className="text-nexusGray max-w-xl mx-auto">Explorez une sélection de projets où la créativité rencontre la technique.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 mt-12">
        <div className="flex justify-center gap-4 mb-12">
          {['All', 'Web', 'IA Design'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-8 py-2 rounded-full font-bold transition-all ${
                filter === f ? 'bg-nexusOrange text-white' : 'bg-nexusGray/30 text-nexusBlue'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(p => (
            <div key={p.id} className="group relative overflow-hidden rounded-3xl bg-nexusBlue aspect-video">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 group-hover:opacity-50 transition duration-500" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-nexusOrange text-sm font-bold uppercase tracking-widest">{p.category}</span>
                <h3 className="text-2xl font-bold text-white">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
