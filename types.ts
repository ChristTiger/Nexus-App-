import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'web' | 'formation' | 'ia';
}

export interface Formation {
  id: string;
  title: string;
  duration: string;
  level: string;
  description: string;
  price: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}