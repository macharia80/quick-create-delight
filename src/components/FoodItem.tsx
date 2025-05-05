
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, MinusCircle, Info } from 'lucide-react';
import { 
  Tooltip,
  TooltipContent,
  TooltipTrigger 
} from "@/components/ui/tooltip";
import { MenuItem } from '../data/restaurants';
import { useCart } from '../context/CartContext';

interface FoodItemProps {
  item: MenuItem & {
    restaurantName?: string;
    restaurantId?: string;
    deliveryTime?: string;
  };
  compact?: boolean;
}

const FoodItem = ({ item, compact = false }: FoodItemProps) => {
  const { addToCart, items } = useCart();
  
  // Check if this item is already in the cart
  const cartItem = items.find(i => i.id === item.id);
  const itemQuantity = cartItem?.quantity || 0;
  
  const handleAddToCart = () => {
    if (item.restaurantName && item.restaurantId) {
      addToCart({
        ...item,
        restaurantName: item.restaurantName,
        restaurantId: item.restaurantId
      });
    }
  };

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
              <div className="flex items-center gap-2">
                {item.deliveryTime && (
                  <span className="text-xs text-gray-500">
                    {item.deliveryTime} delivery
                  </span>
                )}
                
                {item.dietaryInfo && item.dietaryInfo.length > 0 && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="cursor-help">
                        <Info className="h-3.5 w-3.5 text-gray-400" />
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <div className="text-xs">
                        <p className="font-medium mb-1">Dietary info:</p>
                        <ul className="list-disc pl-4">
                          {item.dietaryInfo.map(info => (
                            <li key={info}>{info}</li>
                          ))}
                        </ul>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                )}
              </div>
              
              {item.restaurantName && item.restaurantId ? (
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="rounded-full"
                  onClick={handleAddToCart}
                >
                  <PlusCircle className="h-4 w-4 mr-1" /> Add
                </Button>
              ) : (
                <Button size="sm" variant="outline" className="rounded-full" disabled>
                  <PlusCircle className="h-4 w-4 mr-1" /> Add
                </Button>
              )}
            </div>
          </>
        )}
        
        {compact && item.restaurantName && item.restaurantId && (
          <div className="mt-2 flex justify-end">
            <Button 
              size="sm" 
              variant="ghost" 
              className="h-8 w-8 p-0 rounded-full"
              onClick={handleAddToCart}
            >
              <PlusCircle className="h-5 w-5" />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FoodItem;
