import React from 'react';
import { Leaf , Grid } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Grid className="h-8 w-8 text-green-600" />
          <span className="text-2xl font-bold text-gray-900">LeafGrid</span>
        </div>
        <div className="flex space-x-6">
          <a href="#virtual-garden" className="text-gray-700 hover:text-green-600"></a>
          <a href="#plant-match" className="text-gray-700 hover:text-green-600"></a>
          <a href="#shop" className="text-gray-700 hover:text-green-600"></a>
        div>
      <button
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        data-tf-popup="https://br8m209t2t9.typeform.com/to/AZQYFlK9" 
      >
        Join Waitlist
      </button>
      <div data-tf-live="01JEP72GQYHJE9CC4YD3XFNPWG"></div>
      <script src="//embed.typeform.com/next/embed.js"></script>
    </div>
        </div>
      </nav>
    </header>
  );
}
