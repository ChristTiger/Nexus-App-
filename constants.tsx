
import React from 'react';

export const COLORS = {
  primary: '#0F172A',
  secondary: '#F97316',
  tertiary: '#E5E7EB',
  white: '#FFFFFF',
};

export const Logo: React.FC<{ className?: string, hideText?: boolean }> = ({ className = "h-8", hideText = false }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="relative w-8 h-8 flex items-center justify-center">
       {/* Stylized X Symbol */}
       <div className="absolute inset-0 bg-nexusOrange transform rotate-45 rounded-sm"></div>
       <div className="absolute inset-0 bg-nexusOrange transform -rotate-45 rounded-sm"></div>
       <div className="z-10 text-white font-bold text-lg">X</div>
    </div>
    {!hideText && <span className="text-nexusBlue font-bold text-2xl tracking-tighter">NEXUS</span>}
  </div>
);

export const ICONS = {
  Web: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  Education: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.174L11.24 7.41a.75.75 0 0 1 .52 0l6.98 2.764a.75.75 0 0 1 0 1.41l-6.98 2.764a.75.75 0 0 1-.52 0l-6.98-2.764a.75.75 0 0 1 0-1.41z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12v5.25c0 .414-.336.75-.75.75H3.75a.75.75 0 0 1-.75-.75V12" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 13.5v7.5m0 0H8.25m3.75 0h3.75" />
    </svg>
  ),
  AI: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.456-2.454L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423z" />
    </svg>
  ),
};
