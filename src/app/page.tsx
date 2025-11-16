// app/page.tsx
'use client';
import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';
import CurrentWork from '../components/CurrentWork';
import Contact from '../components/Contact';

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-purple-900/10 to-black text-white overflow-hidden">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <TechStack />
      <Projects />
      <CurrentWork />
      <Contact />
    </main>
  );
}