
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { MenuItem } from '../data/restaurants';
import { useToast } from '@/hooks/use-toast';

export interface CartItem extends MenuItem {
  quantity: number;
  restaurantName: string;
  restaurantId: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  // Calculate totals
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Failed to parse cart from localStorage', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setItems(prevItems => {
      // Check if we're adding from a different restaurant
      const firstItemRestaurantId = prevItems[0]?.restaurantId;
      if (prevItems.length > 0 && firstItemRestaurantId !== item.restaurantId) {
        toast({
          title: "Different restaurant",
          description: "Your cart contains items from a different restaurant. Would you like to start a new cart?",
          action: (
            <button 
              className="bg-food-orange text-white px-3 py-1 rounded text-xs"
              onClick={() => {
                setItems([{...item, quantity: 1}]);
                toast({
                  title: "Cart updated",
                  description: "Your cart has been reset with the new item."
                });
              }}
            >
              Start new cart
            </button>
          ),
        });
        return prevItems;
      }

      // Check if item already exists in cart
      const existingItemIndex = prevItems.findIndex(i => i.id === item.id);
      
      if (existingItemIndex >= 0) {
        // Update quantity of existing item
        const newItems = [...prevItems];
        newItems[existingItemIndex].quantity += 1;
        toast({
          title: "Item added to cart",
          description: `${item.name} quantity updated in your cart.`
        });
        return newItems;
      } else {
        // Add new item
        toast({
          title: "Item added to cart",
          description: `${item.name} added to your cart.`
        });
        return [...prevItems, {...item, quantity: 1}];
      }
    });
  };

  const removeFromCart = (itemId: string) => {
    setItems(prevItems => {
      const newItems = prevItems.filter(item => item.id !== itemId);
      toast({
        title: "Item removed",
        description: "Item has been removed from your cart."
      });
      return newItems;
    });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    
    setItems(prevItems => {
      return prevItems.map(item => {
        if (item.id === itemId) {
          return {...item, quantity};
        }
        return item;
      });
    });
  };

  const clearCart = () => {
    setItems([]);
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart."
    });
  };

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalItems,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
