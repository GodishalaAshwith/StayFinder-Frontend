import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Home, 
  Plus, 
  Menu,
  Search,
  ChevronDown
} from 'lucide-react';

const HostDashboard = () => {
  const [activeTab, setActiveTab] = useState('listings');

  const sampleListings = [
    {
      id: '1',
      title: 'Modern Downtown Loft',
      location: 'San Francisco, CA',
      price: 120,
      status: 'active',
      bookings: 15,
      revenue: 1800,
      image: 'photo-1721322800607-8c38375eef04',
    },
    {
      id: '2',
      title: 'Cozy Beach House',
      location: 'Malibu, CA',
      price: 200,
      status: 'active',
      bookings: 8,
      revenue: 1600,
      image: 'photo-1487958449943-2429e8be8625',
    },
    {
      id: '3',
      title: 'Urban Studio',
      location: 'Brooklyn, NY',
      price: 85,
      status: 'inactive',
      bookings: 0,
      revenue: 0,
      image: 'photo-1518005020951-eccb494ad742',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Home className="h-8 w-8 text-rose-500" />
                <span className="text-2xl font-bold text-gray-900">StayFinder</span>
              </div>
              <Badge variant="secondary" className="bg-rose-100 text-rose-700">
                Host Dashboard
              </Badge>
            </div>

            <div className="flex items-center space-x-4">
              <Button className="bg-rose-500 hover:bg-rose-600">
                <Plus className="h-4 w-4 mr-2" />
                Add Listing
              </Button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="text-2xl font-bold text-gray-900">$3,400</div>
            <div className="text-sm text-gray-600">Total Revenue</div>
            <div className="text-xs text-green-600 mt-1">+12% from last month</div>
          </Card>
          <Card className="p-6">
            <div className="text-2xl font-bold text-gray-900">23</div>
            <div className="text-sm text-gray-600">Total Bookings</div>
            <div className="text-xs text-green-600 mt-1">+8% from last month</div>
          </Card>
          <Card className="p-6">
            <div className="text-2xl font-bold text-gray-900">4.8</div>
            <div className="text-sm text-gray-600">Average Rating</div>
            <div className="text-xs text-green-600 mt-1">+0.2 from last month</div>
          </Card>
          <Card className="p-6">
            <div className="text-2xl font-bold text-gray-900">3</div>
            <div className="text-sm text-gray-600">Active Listings</div>
            <div className="text-xs text-gray-600 mt-1">Same as last month</div>
          </Card>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8">
            {['listings', 'bookings', 'calendar', 'analytics'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize transition-colors ${
                  activeTab === tab
                    ? 'border-rose-500 text-rose-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Listings Tab Content */}
        {activeTab === 'listings' && (
          <div>
            {/* Filters and Search */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search listings..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  />
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <span className="text-sm">All Status</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
              <Button className="bg-rose-500 hover:bg-rose-600">
                <Plus className="h-4 w-4 mr-2" />
                New Listing
              </Button>
            </div>

            {/* Listings Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {sampleListings.map((listing) => (
                <Card key={listing.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative">
                    <img
                      src={`https://images.unsplash.com/${listing.image}?auto=format&fit=crop&w=400&q=80`}
                      alt={listing.title}
                      className="w-full h-full object-cover"
                    />
                    <Badge
                      className={`absolute top-3 right-3 ${
                        listing.status === 'active'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {listing.status}
                    </Badge>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      {listing.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{listing.location}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <div className="text-gray-600">Price per night</div>
                        <div className="font-semibold">${listing.price}</div>
                      </div>
                      <div>
                        <div className="text-gray-600">This month</div>
                        <div className="font-semibold">{listing.bookings} bookings</div>
                      </div>
                    </div>

                    <div className="text-sm text-gray-600 mb-4">
                      Revenue: <span className="font-semibold text-gray-900">${listing.revenue}</span>
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        View
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                        Delete
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Other Tab Placeholders */}
        {activeTab === 'bookings' && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Bookings Management</h3>
            <p className="text-gray-600">View and manage your property bookings here.</p>
          </div>
        )}

        {activeTab === 'calendar' && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Calendar View</h3>
            <p className="text-gray-600">Manage availability and pricing calendar.</p>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Analytics Dashboard</h3>
            <p className="text-gray-600">View detailed performance metrics and insights.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HostDashboard;
