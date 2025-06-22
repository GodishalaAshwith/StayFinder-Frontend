
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const PropertyDetail = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const property = {
    id: '1',
    title: 'Modern Downtown Loft with City Views',
    location: 'San Francisco, CA',
    rating: 4.8,
    reviewCount: 127,
    price: 120,
    images: [
      'photo-1721322800607-8c38375eef04',
      'photo-1487958449943-2429e8be8625',
      'photo-1518005020951-eccb494ad742',
      'photo-1483058712412-4245e9b90334',
    ],
    host: {
      name: 'Sarah Johnson',
      joinedYear: '2019',
      avatar: 'photo-1649972904349-6e44c42644a7',
    },
    details: {
      guests: 4,
      bedrooms: 2,
      beds: 2,
      bathrooms: 1,
    },
    amenities: [
      'WiFi', 'Kitchen', 'Washing machine', 'Air conditioning',
      'Workspace', 'TV', 'Hair dryer', 'Iron'
    ],
    description: `Experience the best of San Francisco from this stunning downtown loft. Floor-to-ceiling windows offer breathtaking city views, while the modern interior design creates a perfect urban retreat.

The space features an open-concept living area with premium furnishings, a fully equipped kitchen, and a comfortable workspace. Located in the heart of the city, you'll be walking distance from world-class restaurants, shopping, and cultural attractions.`,
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
          <ChevronLeft className="h-4 w-4" />
          <span>Back to results</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Property Title */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm">
              <span className="flex items-center">
                ★ {property.rating} · {property.reviewCount} reviews
              </span>
              <span className="text-gray-600">{property.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                <Heart className="h-4 w-4" />
                <span className="text-sm font-medium">Save</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Image Gallery */}
          <div className="lg:col-span-2">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
              <img
                src={`https://images.unsplash.com/${property.images[currentImageIndex]}?auto=format&fit=crop&w=800&q=80`}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {property.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-4 gap-2">
              {property.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    index === currentImageIndex ? 'border-gray-900' : 'border-transparent'
                  }`}
                >
                  <img
                    src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=200&q=80`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-6 shadow-lg">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold">${property.price}</span>
                    <span className="text-gray-600"> night</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    ★ {property.rating} · {property.reviewCount} reviews
                  </div>
                </div>

                {/* Date Selection */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="border border-gray-300 rounded-lg p-3">
                    <label className="text-xs font-medium text-gray-600">CHECK-IN</label>
                    <div className="text-sm">12/20/2024</div>
                  </div>
                  <div className="border border-gray-300 rounded-lg p-3">
                    <label className="text-xs font-medium text-gray-600">CHECKOUT</label>
                    <div className="text-sm">12/25/2024</div>
                  </div>
                </div>

                {/* Guests */}
                <div className="border border-gray-300 rounded-lg p-3 mb-6">
                  <label className="text-xs font-medium text-gray-600">GUESTS</label>
                  <div className="text-sm">2 guests</div>
                </div>

                <Button className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 text-lg font-semibold">
                  Reserve
                </Button>

                <p className="text-center text-sm text-gray-600 mt-3">
                  You won't be charged yet
                </p>
              </div>

              {/* Price Breakdown */}
              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span>$120 x 5 nights</span>
                  <span>$600</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Cleaning fee</span>
                  <span>$50</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Service fee</span>
                  <span>$75</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-semibold">
                  <span>Total</span>
                  <span>$725</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Property Details */}
        <div className="lg:col-span-2 mt-12 space-y-8">
          {/* Host Info */}
          <div className="flex items-center space-x-4 pb-8 border-b">
            <img
              src={`https://images.unsplash.com/${property.host.avatar}?auto=format&fit=crop&w=100&q=80`}
              alt={property.host.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-lg">Hosted by {property.host.name}</h3>
              <p className="text-gray-600">Host since {property.host.joinedYear}</p>
            </div>
          </div>

          {/* Property Info */}
          <div className="space-y-4 pb-8 border-b">
            <div className="flex items-center space-x-3">
              <Home className="h-5 w-5 text-gray-600" />
              <div>
                <div className="font-medium">Entire loft</div>
                <div className="text-gray-600 text-sm">You'll have the whole place to yourself</div>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              {property.details.guests} guests · {property.details.bedrooms} bedrooms · {property.details.beds} beds · {property.details.bathrooms} bathroom
            </div>
          </div>

          {/* Description */}
          <div className="pb-8 border-b">
            <h3 className="text-xl font-semibold mb-4">About this place</h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {property.description}
            </p>
          </div>

          {/* Amenities */}
          <div>
            <h3 className="text-xl font-semibold mb-4">What this place offers</h3>
            <div className="grid grid-cols-2 gap-4">
              {property.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center space-x-3 py-2">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
