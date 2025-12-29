
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pb-24">
      <section className="bg-nexusGray/10 py-20 border-b border-nexusGray">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-4">
              <h1 className="text-5xl font-extrabold text-nexusBlue">Parlons de votre <span className="text-nexusOrange">futur</span>.</h1>
              <p className="text-xl text-nexusBlue/60">Une question ? Un projet ? Notre équipe est prête à vous accompagner.</p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-nexusOrange/10 text-nexusOrange rounded-2xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-nexusBlue">Email</h4>
                  <p className="text-nexusBlue/60">contact@nexus-digital.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-nexusOrange/10 text-nexusOrange rounded-2xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-nexusBlue">Localisation</h4>
                  <p className="text-nexusBlue/60">Hub Technologique, Dakar / Abidjan / Paris</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-nexusGray">
               <h4 className="font-bold text-nexusBlue mb-4">Suivez-nous</h4>
               <div className="flex gap-4">
                 {['LinkedIn', 'X', 'Instagram'].map(s => (
                   <span key={s} className="px-4 py-2 bg-white rounded-lg border border-nexusGray text-xs font-bold text-nexusBlue hover:bg-nexusOrange hover:text-white transition cursor-pointer">{s}</span>
                 ))}
               </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-nexusGray">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-nexusBlue uppercase">Nom</label>
                  <input type="text" className="w-full p-4 bg-nexusGray/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-nexusOrange" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-nexusBlue uppercase">Email</label>
                  <input type="email" className="w-full p-4 bg-nexusGray/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-nexusOrange" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-nexusBlue uppercase">Type de Projet</label>
                <select className="w-full p-4 bg-nexusGray/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-nexusOrange appearance-none">
                  <option>Création Web</option>
                  <option>Formation</option>
                  <option>Innovation IA</option>
                  <option>Autre</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-nexusBlue uppercase">Votre message</label>
                <textarea className="w-full h-32 p-4 bg-nexusGray/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-nexusOrange" />
              </div>
              <button className="w-full py-5 bg-nexusBlue text-white rounded-xl font-bold text-lg hover:bg-nexusBlue/90 transition shadow-xl">
                Envoyer ma demande
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
