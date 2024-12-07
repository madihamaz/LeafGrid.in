import React from 'react';
import { Heart, X } from 'lucide-react';

interface PlantCardProps {
  name: string;
  image: string;
  season: string;
  difficulty: string;
  onLike: () => void;
  onDislike: () => void;
}

export default function PlantCard({ name, image, season, difficulty, onLike, onDislike }: PlantCardProps) {
  return (
    <div className="relative w-80 h-96 bg-white rounded-lg shadow-xl transform transition-transform hover:scale-105">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-gray-600">Best Season: {season}</p>
        <p className="text-gray-600">Difficulty: {difficulty}</p>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-8">
        <button
          onClick={onDislike}
          className="p-4 bg-red-100 rounded-full hover:bg-red-200 transition-colors"
        >
          <X className="w-8 h-8 text-red-500" />
        </button>
        <button
          onClick={onLike}
          className="p-4 bg-green-100 rounded-full hover:bg-green-200 transition-colors"
        >
          <Heart className="w-8 h-8 text-green-500" />
        </button>
      </div>
    </div>
  );
}