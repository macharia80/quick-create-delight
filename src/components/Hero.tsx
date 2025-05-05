
import React from 'react';
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      {/* Overlay pattern */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
      
      {/* Content */}
      <div className="food-container py-16 md:py-24 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Delicious food delivered <span className="text-food-orange">fast</span> to your door
          </h1>
          <p className="text-lg mb-8 text-gray-200">
            Order from top restaurants in your area with free delivery on your first order.
          </p>
          
          <div className="bg-white rounded-full p-1 pr-2 flex items-center max-w-md shadow-lg">
            <input 
              type="text" 
              placeholder="Enter your address" 
              className="bg-transparent pl-4 py-3 flex-1 text-gray-800 focus:outline-none"
            />
            <Button className="rounded-full bg-food-orange hover:bg-food-orange/90 ml-2">
              <Search className="h-5 w-5 mr-2" />
              Find Food
            </Button>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded-full">Free delivery on first order</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">20% off for new users</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">2,000+ restaurants</span>
          </div>
        </div>
      </div>
      
      {/* Food images at the bottom */}
      <div className="hidden lg:block absolute bottom-0 right-0 w-1/3 h-full z-0">
        <div className="absolute bottom-0 right-12 w-64 h-64">
          <img 
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" 
            alt="Pizza" 
            className="rounded-full object-cover w-full h-full shadow-xl border-4 border-white"
          />
        </div>
        <div className="absolute bottom-20 right-48 w-40 h-40">
          <img 
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" 
            alt="Burger" 
            className="rounded-full object-cover w-full h-full shadow-xl border-4 border-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
