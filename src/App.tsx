import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PlantsShowcase } from './components/PlantsShowcase';
import  Assignment  from './components/assignment';
import WaitlistSection from './components/waitlist section';
import { FAQ } from './components/FAQ';
import Footer1 from './components/Footer1';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <PlantsShowcase />
      <Assignment/>
      <WaitlistSection/>
      <FAQ />
      <Footer1/>
    </div>
  );
}

export default App;
