
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import FoodItem from '../components/FoodItem';
import { restaurants } from '../data/restaurants';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, MapPin, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

const RestaurantDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const restaurant = restaurants.find(r => r.id === id);
  
  const [activeTab, setActiveTab] = useState('menu');
  
  if (!restaurant) {
    return (
      <MainLayout>
        <div className="food-container py-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Restaurant not found</h2>
          <Button onClick={() => navigate('/')}>Go back to home</Button>
        </div>
      </MainLayout>
    );
  }
  
  // Group menu items by category
  const menuByCategory = restaurant.menu.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof restaurant.menu>);
  
  return (
    <MainLayout>
      {/* Restaurant Header */}
      <div className="relative h-56 md:h-72 overflow-hidden">
        <img 
          src={restaurant.coverImage || restaurant.image} 
          alt={restaurant.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
          <div className="food-container py-6 text-white">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white mb-2 hover:bg-white/20"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="h-4 w-4 mr-1" /> Back
            </Button>
            <h1 className="text-3xl font-bold">{restaurant.name}</h1>
            
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-food-yellow text-food-yellow mr-1" />
                <span>{restaurant.rating}</span>
                <span className="text-xs ml-1">({restaurant.reviews} reviews)</span>
              </div>
              {restaurant.categories.map(category => (
                <Badge key={category} variant="outline" className="bg-white/20 text-white border-none">
                  {category}
                </Badge>
              ))}
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{restaurant.deliveryTime}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{restaurant.distance} mi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Restaurant Content */}
      <div className="food-container py-6">
        <Tabs defaultValue="menu" value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="menu">Menu</TabsTrigger>
            <TabsTrigger value="info">Info</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          
          <TabsContent value="menu" className="pt-4">
            {Object.entries(menuByCategory).map(([category, items]) => (
              <div key={category} className="mb-8">
                <h3 className="text-xl font-semibold mb-3">{category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {items.map(item => (
                    <FoodItem 
                      key={item.id} 
                      item={{
                        ...item,
                        restaurantName: restaurant.name,
                        restaurantId: restaurant.id,
                        deliveryTime: restaurant.deliveryTime
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>
          
          <TabsContent value="info">
            <div className="py-4">
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Address</h3>
                <p className="text-gray-600">{restaurant.address}</p>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 10:00 PM</p>
                <p className="text-gray-600">Saturday - Sunday: 10:00 AM - 11:00 PM</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">About</h3>
                <p className="text-gray-600">
                  {restaurant.name} offers a delightful selection of dishes made with fresh, 
                  locally-sourced ingredients. Our chefs are committed to providing a memorable 
                  dining experience with every order.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="reviews">
            <div className="py-4">
              <p className="text-gray-500 italic">Reviews coming soon...</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default RestaurantDetail;
