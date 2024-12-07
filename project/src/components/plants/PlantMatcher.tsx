import React, { useState } from 'react';
import PlantCard from './PlantCard';

const plants = [
  {
    id: 1,
    name: 'Cherry Tomatoes',
    image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    season: 'Spring/Summer',
    difficulty: 'Medium'
  },
  {
    id: 2,
    name: 'Basil',
    image: 'https://images.unsplash.com/photo-1618375531912-867984bdfd87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    season: 'Year-round',
    difficulty: 'Easy'
  },
  {
    id: 3,
    name: 'Lettuce',
    image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    season: 'Spring/Fall',
    difficulty: 'Easy'
  }
];

export default function PlantMatcher() {
  const [currentPlant, setCurrentPlant] = useState(0);
  const [matches, setMatches] = useState<number[]>([]);

  const handleLike = () => {
    setMatches([...matches, plants[currentPlant].id]);
    setCurrentPlant(prev => (prev + 1) % plants.length);
  };

  const handleDislike = () => {
    setCurrentPlant(prev => (prev + 1) % plants.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Find Your Plant Match</h2>
        <div className="flex justify-center">
          <PlantCard
            {...plants[currentPlant]}
            onLike={handleLike}
            onDislike={handleDislike}
          />
        </div>
        {matches.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-center mb-4">Your Matches</h3>
            <div className="flex justify-center gap-4 flex-wrap">
              {matches.map((matchId, index) => {
                const plant = plants.find(p => p.id === matchId)!;
                return (
                  <div key={`match-${matchId}-${index}`} className="w-48 bg-white rounded-lg shadow p-4">
                    <img src={plant.image} alt={plant.name} className="w-full h-32 object-cover rounded" />
                    <p className="mt-2 font-medium text-center">{plant.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}