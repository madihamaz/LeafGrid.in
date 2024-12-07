import React from 'react';
import Header from './components/layout/Header';
import HeroSection from './components/home/HeroSection';
import PlantMatcher from './components/plants/PlantMatcher';
import PlantAssignment from './components/plants/PlantAssignment';
import GrowingGuide from './components/plants/GrowingGuide';
import VirtualGarden from './components/game/VirtualGarden';
import WaitlistSection from './components/waitlist/WaitlistSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        <HeroSection />
        <PlantMatcher />
        <PlantAssignment />
        <GrowingGuide />
        <VirtualGarden />
        <WaitlistSection />
      </div>
    </div>
  );
}

export default App;