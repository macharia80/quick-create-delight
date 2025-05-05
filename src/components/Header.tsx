
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const navigate = useNavigate();
  
  return (
    <header className="sticky top-0 bg-white z-50 shadow-sm">
      <div className="food-container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-food-orange">
              Quick<span className="text-food-green">Eats</span>
            </Link>
          </div>
          
          {/* Address selector - hidden on mobile */}
          <div className="hidden md:flex items-center space-x-2 text-sm">
            <MapPin className="h-4 w-4 text-food-orange" />
            <span>Deliver to: </span>
            <span className="font-medium">123 Main St</span>
            <button className="text-food-orange hover:underline">Change</button>
          </div>
          
          {/* Search bar - hidden on mobile */}
          <div className="hidden md:flex flex-1 mx-6 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search for food, restaurants, cuisines..." 
              className="pl-10 pr-4 py-2 w-full rounded-full border-gray-200" 
            />
          </div>
          
          {/* Cart button */}
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              className="relative p-2"
              onClick={() => navigate('/cart')}
            >
              <ShoppingBag className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-food-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
            
            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              className="md:hidden ml-2 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? 
                <X className="h-6 w-6" /> : 
                <Menu className="h-6 w-6" />
              }
            </Button>
          </div>
        </div>
        
        {/* Mobile search - only visible when menu is open */}
        {isMenuOpen && (
          <div className="mt-4 pb-4 md:hidden">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search for food or restaurants..." 
                className="pl-10 pr-4 py-2 w-full rounded-full border-gray-200" 
              />
            </div>
            
            <div className="flex items-center space-x-2 text-sm mb-4">
              <MapPin className="h-4 w-4 text-food-orange" />
              <span>Deliver to: </span>
              <span className="font-medium">123 Main St</span>
              <button className="text-food-orange hover:underline">Change</button>
            </div>
            
            <nav>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="block hover:text-food-orange" onClick={() => setIsMenuOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className="block hover:text-food-orange" onClick={() => setIsMenuOpen(false)}>
                    Cart {totalItems > 0 && `(${totalItems})`}
                  </Link>
                </li>
                <li>
                  <button className="block hover:text-food-orange">My Orders</button>
                </li>
                <li>
                  <button className="block hover:text-food-orange">Favorites</button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
