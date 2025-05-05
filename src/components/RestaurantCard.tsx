
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Restaurant } from '../data/restaurants';
import { Star, Clock, DollarSign } from 'lucide-react';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer">
      <div className="relative h-40 overflow-hidden">
        <img 
          src={restaurant.image} 
          alt={restaurant.name} 
          className="object-cover w-full h-full"
        />
        {restaurant.featured && (
          <span className="absolute top-2 left-2 bg-food-orange text-white text-xs font-semibold px-2 py-1 rounded-full">
            Featured
          </span>
        )}
      </div>
      <CardContent className="pt-3 pb-4">
        <h3 className="font-semibold text-gray-900 mb-1">{restaurant.name}</h3>
        <div className="flex items-center text-sm text-gray-500 mb-1">
          <div className="flex items-center mr-3">
            <Star className="h-4 w-4 fill-food-yellow text-food-yellow mr-1" />
            <span>{restaurant.rating}</span>
            <span className="text-xs ml-1">({restaurant.reviews})</span>
          </div>
          <span className="mr-3">{restaurant.categories.slice(0, 2).join(', ')}</span>
          <div className="flex items-center">
            <DollarSign className="h-3 w-3 mr-1" />
            <span>{restaurant.priceRange}</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-gray-500">
            <Clock className="h-3 w-3 mr-1" />
            <span>{restaurant.deliveryTime}</span>
          </div>
          <span className="text-food-green font-medium">
            {restaurant.deliveryFee === 0 
              ? "Free Delivery" 
              : `$${restaurant.deliveryFee.toFixed(2)} delivery`
            }
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default RestaurantCard;
