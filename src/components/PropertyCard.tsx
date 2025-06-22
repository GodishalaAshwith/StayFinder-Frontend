
import React from 'react';
import { Heart } from 'lucide-react';

interface PropertyCardProps {
  id: string;
  images: string[];
  title: string;
  location: string;
  rating: number;
  price: number;
  isWishlisted?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  images,
  title,
  location,
  rating,
  price,
  isWishlisted = false,
}) => {
  return (
    <div className="group cursor-pointer">
      {/* Image Container */}
      <div className="relative aspect-square mb-3 overflow-hidden rounded-xl">
        <img
          src={`https://images.unsplash.com/${images[0]}?auto=format&fit=crop&w=400&q=80`}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          className={`absolute top-3 right-3 p-2 rounded-full transition-colors duration-200 ${
            isWishlisted
              ? 'bg-white text-rose-500'
              : 'bg-black/20 text-white hover:bg-white hover:text-rose-500'
          }`}
        >
          <Heart
            className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`}
          />
        </button>
      </div>

      {/* Property Info */}
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900 truncate">{title}</h3>
          <div className="flex items-center space-x-1">
            <span className="text-sm font-medium text-gray-900">★</span>
            <span className="text-sm text-gray-700">{rating}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm">{location}</p>
        <div className="pt-1">
          <span className="font-semibold text-gray-900">${price}</span>
          <span className="text-gray-600 text-sm"> night</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
