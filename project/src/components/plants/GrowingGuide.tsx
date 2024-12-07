import React from 'react';
import { Clock, Droplets, ThermometerSun, AlertCircle } from 'lucide-react';

interface PlantGuide {
  name: string;
  image: string;
  growthTime: string;
  difficulty: string;
  waterNeeds: string;
  temperature: string;
  tips: string[];
}

const plantGuides: PlantGuide[] = [
  {
    name: "Lettuce",
    image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    growthTime: "30-60 days",
    difficulty: "Easy",
    waterNeeds: "Moderate",
    temperature: "60-70°F",
    tips: [
      "Keep water temperature around 65-68°F",
      "Maintain pH between 6.0-6.5",
      "Harvest outer leaves as needed"
    ]
  },
  {
    name: "Basil",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FFresh-Italian-Basil-12-oz%2Fdp%2FB0BY3PB21T&psig=AOvVaw1ALfmE6Lia76dUdTVQleOo&ust=1733665011141000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLjgyNDjlYoDFQAAAAAdAAAAABAR",
    growthTime: "20-28 days",
    difficulty: "Easy",
    waterNeeds: "Moderate",
    temperature: "65-75°F",
    tips: [
      "Prune regularly to encourage bushiness",
      "Maintain good air circulation",
      "Harvest from the top down"
    ]
  },
  {
    name: "Cherry Tomatoes",
    image: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    growthTime: "60-80 days",
    difficulty: "Medium",
    waterNeeds: "High",
    temperature: "70-80°F",
    tips: [
      "Support plants with stakes or cages",
      "Remove suckers regularly",
      "Ensure good light exposure"
    ]
  }
];

export default function GrowingGuide() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Growing Guide</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plantGuides.map((plant, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={plant.image} 
                alt={plant.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{plant.name}</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-gray-400 mr-2" />
                    <span>Growth Time: {plant.growthTime}</span>
                  </div>
                  <div className="flex items-center">
                    <Droplets className="w-5 h-5 text-gray-400 mr-2" />
                    <span>Water Needs: {plant.waterNeeds}</span>
                  </div>
                  <div className="flex items-center">
                    <ThermometerSun className="w-5 h-5 text-gray-400 mr-2" />
                    <span>Temperature: {plant.temperature}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold flex items-center mb-2">
                    <AlertCircle className="w-5 h-5 text-gray-400 mr-2" />
                    Growing Tips
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {plant.tips.map((tip, tipIndex) => (
                      <li key={tipIndex}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}