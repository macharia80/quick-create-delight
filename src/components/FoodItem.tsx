
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from 'lucide-react';
import { MenuItem } from '../data/restaurants';

interface FoodItemProps {
  item: MenuItem & {
    restaurantName?: string;
    restaurantId?: string;
    deliveryTime?: string;
  };
  compact?: boolean;
}

const FoodItem = ({ item, compact = false }: FoodItemProps) => {
  return (
    <Card className={`overflow-hidden hover:shadow-md transition-shadow duration-300 ${compact ? 'h-full' : ''}`}>
      <div className={`relative ${compact ? 'h-24 sm:h-32' : 'h-40'} overflow-hidden`}>
        <img 
          src={item.image} 
          alt={item.name} 
          className="object-cover w-full h-full"
        />
        {item.popular && (
          <span className="absolute top-2 left-2 bg-food-orange text-white text-xs font-semibold px-2 py-1 rounded-full">
            Popular
          </span>
        )}
      </div>
      <CardContent className={`${compact ? 'p-3' : 'p-4'}`}>
        <div className="flex justify-between items-start">
          <div>
            <h3 className={`font-medium text-gray-900 ${compact ? 'text-sm' : ''}`}>{item.name}</h3>
            {item.restaurantName && (
              <p className="text-xs text-gray-500 mt-0.5">{item.restaurantName}</p>
            )}
          </div>
          <span className="font-semibold text-gray-900">${item.price.toFixed(2)}</span>
        </div>
        
        {!compact && (
          <>
            <p className="mt-2 text-sm text-gray-600 line-clamp-2">{item.description}</p>
            
            <div className="flex items-center justify-between mt-3">
              {item.deliveryTime && (
                <span className="text-xs text-gray-500">
                  {item.deliveryTime} delivery
                </span>
              )}
              <Button size="sm" variant="outline" className="rounded-full">
                <PlusCircle className="h-4 w-4 mr-1" /> Add
              </Button>
            </div>
          </>
        )}
        
        {compact && (
          <div className="mt-2 flex justify-end">
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0 rounded-full">
              <PlusCircle className="h-5 w-5" />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FoodItem;
