
import React from 'react';
import { Search, Menu, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-rose-500" />
            <span className="text-2xl font-bold text-gray-900">StayFinder</span>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-white border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 max-w-lg mx-8 flex-1">
            <div className="flex-1 px-6 py-3">
              <input
                type="text"
                placeholder="Where are you going?"
                className="w-full text-sm text-gray-700 placeholder-gray-500 focus:outline-none"
              />
            </div>
            <div className="border-l border-gray-300 px-6 py-3">
              <input
                type="text"
                placeholder="Check in - Check out"
                className="w-full text-sm text-gray-700 placeholder-gray-500 focus:outline-none"
              />
            </div>
            <div className="border-l border-gray-300 px-6 py-3">
              <input
                type="text"
                placeholder="Guests"
                className="w-full text-sm text-gray-700 placeholder-gray-500 focus:outline-none"
              />
            </div>
            <button className="bg-rose-500 text-white p-3 rounded-full hover:bg-rose-600 transition-colors duration-200 mr-2">
              <Search className="h-4 w-4" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              Become a host
            </button>
            <Button variant="outline" size="sm" className="hidden md:flex">
              Login
            </Button>
            <Button size="sm" className="bg-rose-500 hover:bg-rose-600">
              Sign up
            </Button>
            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg">
            <Search className="h-5 w-5 text-gray-400 ml-3" />
            <input
              type="text"
              placeholder="Where to?"
              className="flex-1 px-3 py-3 bg-transparent text-sm focus:outline-none"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
