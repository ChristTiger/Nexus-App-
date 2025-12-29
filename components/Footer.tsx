
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-nexusGray pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 space-y-6">
            <Logo />
            <p className="text-nexusBlue/60 max-w-sm">
              NEXUS est l'entreprise de services numériques spécialisée dans la construction digitale, la formation technologique et l'innovation visuelle.
            </p>
            <div className="flex gap-4">
               {/* Small social icons placeholders */}
               <div className="w-10 h-10 bg-nexusGray/30 rounded-full"></div>
               <div className="w-10 h-10 bg-nexusGray/30 rounded-full"></div>
               <div className="w-10 h-10 bg-nexusGray/30 rounded-full"></div>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-nexusBlue uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="space-y-3">
              {['Accueil', 'Services', 'Formations', 'À propos'].map((item) => (
                <li key={item}><Link to="#" className="text-nexusBlue/60 hover:text-nexusOrange transition">{item}</Link></li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-nexusBlue uppercase tracking-widest text-sm">Contact</h4>
            <ul className="space-y-3 text-nexusBlue/60">
              <li>contact@nexus-digital.com</li>
              <li>+221 33 000 00 00</li>
              <li>Dakar, Sénégal</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-nexusGray flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-nexusBlue/40">© {new Date().getFullYear()} NEXUS Digital. Tous droits réservés.</p>
          <div className="flex gap-8 text-sm text-nexusBlue/40">
            <Link to="#" className="hover:text-nexusOrange">Mentions Légales</Link>
            <Link to="#" className="hover:text-nexusOrange">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
