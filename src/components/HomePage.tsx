
import React from 'react';
import PropertyCard from './PropertyCard';

const HomePage = () => {
  const sampleProperties = [
    {
      id: '1',
      images: ['photo-1721322800607-8c38375eef04'],
      title: 'Modern Downtown Loft',
      location: 'San Francisco, CA',
      rating: 4.8,
      price: 120,
    },
    {
      id: '2',
      images: ['photo-1487958449943-2429e8be8625'],
      title: 'Cozy Beach House',
      location: 'Malibu, CA',
      rating: 4.9,
      price: 200,
    },
    {
      id: '3',
      images: ['photo-1518005020951-eccb494ad742'],
      title: 'Urban Studio Apartment',
      location: 'Brooklyn, NY',
      rating: 4.7,
      price: 85,
    },
    {
      id: '4',
      images: ['photo-1649972904349-6e44c42644a7'],
      title: 'Luxury Penthouse',
      location: 'Miami, FL',
      rating: 4.95,
      price: 350,
    },
    {
      id: '5',
      images: ['photo-1488590528505-98d2b5aba04b'],
      title: 'Mountain Cabin Retreat',
      location: 'Aspen, CO',
      rating: 4.85,
      price: 180,
    },
    {
      id: '6',
      images: ['photo-1483058712412-4245e9b90334'],
      title: 'Historic Brownstone',
      location: 'Boston, MA',
      rating: 4.6,
      price: 140,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-rose-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Find your perfect
            <span className="text-rose-500 block">stay anywhere</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover unique accommodations around the world. From cozy apartments to luxury villas.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center space-x-6 overflow-x-auto pb-4">
          {['All', 'Beachfront', 'City Center', 'Mountains', 'Luxury', 'Budget-friendly'].map((filter) => (
            <button
              key={filter}
              className="whitespace-nowrap px-6 py-2 rounded-full border border-gray-300 text-sm font-medium hover:border-gray-900 transition-colors duration-200 focus:outline-none focus:border-gray-900"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Properties Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {sampleProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
