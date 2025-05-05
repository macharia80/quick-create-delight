
import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import Hero from '../components/Hero';
import CategoryFilter from '../components/CategoryFilter';
import RestaurantCard from '../components/RestaurantCard';
import RecommendationSection from '../components/RecommendationSection';
import SortOptions from '../components/SortOptions';
import { restaurants } from '../data/restaurants';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Clock, MapPin, Search } from 'lucide-react';

type SortOption = 'rating' | 'deliveryTime' | 'deliveryFee' | 'distance';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState<SortOption>('rating');
  const [visibleCount, setVisibleCount] = useState(8);
  
  // Filter restaurants by category
  const categoryFilteredRestaurants = selectedCategory === 'All' 
    ? restaurants 
    : restaurants.filter(restaurant => 
        restaurant.categories.includes(selectedCategory)
      );
      
  // Sort restaurants
  const sortedRestaurants = [...categoryFilteredRestaurants].sort((a, b) => {
    switch (sortOption) {
      case 'rating':
        return b.rating - a.rating;
      case 'deliveryTime':
        // Extract first number from delivery time range (e.g., "15-25 min" -> 15)
        const aTime = parseInt(a.deliveryTime.split('-')[0]);
        const bTime = parseInt(b.deliveryTime.split('-')[0]);
        return aTime - bTime;
      case 'deliveryFee':
        return a.deliveryFee - b.deliveryFee;
      case 'distance':
        return a.distance - b.distance;
      default:
        return 0;
    }
  });
  
  // Slice for pagination
  const visibleRestaurants = sortedRestaurants.slice(0, visibleCount);
  
  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <Hero />
      
      {/* Mobile search bar - only for mobile */}
      <div className="block md:hidden px-4 -mt-6 relative z-10">
        <div className="bg-white rounded-full shadow-lg flex items-center p-1">
          <Search className="h-4 w-4 ml-3 text-gray-400" />
          <input 
            type="text" 
            placeholder="Find restaurant or cuisine..." 
            className="py-2 px-3 flex-1 text-sm focus:outline-none"
          />
        </div>
      </div>
      
      {/* Fast delivery section */}
      <section className="py-6">
        <div className="food-container">
          <h2 className="section-title">Fast delivery, 35 mins or less</h2>
          <ScrollArea className="w-full">
            <div className="flex space-x-4 pb-4">
              {restaurants
                .filter(r => parseInt(r.deliveryTime.split('-')[1]) <= 35)
                .slice(0, 6)
                .map(restaurant => (
                  <div key={restaurant.id} className="min-w-[240px] max-w-xs">
                    <div className="relative h-32 rounded-lg overflow-hidden mb-2">
                      <img 
                        src={restaurant.image} 
                        alt={restaurant.name} 
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                        <h3 className="text-white font-medium">{restaurant.name}</h3>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{restaurant.deliveryTime}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>{restaurant.distance} mi</span>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </section>
      
      {/* Recommendations Section */}
      <RecommendationSection />
      
      {/* Main Restaurant Listing */}
      <section className="py-6 bg-gray-50">
        <div className="food-container">
          <div className="flex justify-between items-center">
            <h2 className="section-title">All Restaurants</h2>
            <SortOptions onSort={setSortOption} currentSort={sortOption} />
          </div>
          
          {/* Category Filter */}
          <CategoryFilter 
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          
          {/* Restaurant Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {visibleRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
          
          {visibleRestaurants.length < sortedRestaurants.length && (
            <div className="mt-8 text-center">
              <Button variant="outline" size="lg" onClick={handleLoadMore}>
                Load more restaurants
              </Button>
            </div>
          )}
          
          {sortedRestaurants.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No restaurants found in this category.</p>
              <Button 
                className="mt-4" 
                onClick={() => setSelectedCategory('All')}
              >
                View all restaurants
              </Button>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
