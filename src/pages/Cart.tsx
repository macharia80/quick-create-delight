
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { useCart } from '../context/CartContext';
import { Button } from '@/components/ui/button';
import { 
  Minus, 
  Plus, 
  ShoppingBag, 
  Trash2, 
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';

const Cart = () => {
  const navigate = useNavigate();
  const { items, updateQuantity, removeFromCart, clearCart, totalItems, totalPrice } = useCart();
  const { toast } = useToast();
  
  const handleCheckout = () => {
    toast({
      title: "Order placed successfully!",
      description: "Your order has been received and is being prepared."
    });
    clearCart();
    navigate('/');
  };
  
  if (items.length === 0) {
    return (
      <MainLayout>
        <div className="food-container py-16 text-center">
          <div className="flex flex-col items-center max-w-md mx-auto">
            <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Button 
              className="flex items-center"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Browse restaurants
            </Button>
          </div>
        </div>
      </MainLayout>
    );
  }
  
  const deliveryFee = 2.99;
  const serviceFee = 1.99;
  const subtotal = totalPrice;
  const total = subtotal + deliveryFee + serviceFee;
  
  return (
    <MainLayout>
      <div className="food-container py-8">
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
              <h2 className="font-semibold mb-2">
                {items[0]?.restaurantName} 
                <span className="text-sm font-normal ml-2 text-gray-500">
                  ({totalItems} {totalItems === 1 ? 'item' : 'items'})
                </span>
              </h2>
              
              {items.map(item => (
                <div key={item.id} className="py-4 border-b last:border-0">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 rounded-md overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{item.name}</h3>
                        <span className="font-semibold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                      
                      <p className="text-sm text-gray-500 line-clamp-1 mt-1">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center">
                          <Button 
                            size="icon"
                            variant="outline"
                            className="h-8 w-8 rounded-full"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          
                          <span className="mx-3 text-sm font-medium w-6 text-center">
                            {item.quantity}
                          </span>
                          
                          <Button 
                            size="icon"
                            variant="outline"
                            className="h-8 w-8 rounded-full"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-red-500 hover:text-red-600 hover:bg-red-50 p-1"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="flex justify-end mt-4">
                <Button 
                  variant="outline" 
                  className="text-sm"
                  onClick={() => navigate(`/restaurant/${items[0]?.restaurantId}`)}
                >
                  Add more items
                </Button>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4 sticky top-24">
              <h2 className="font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-3 text-sm mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Service Fee</span>
                  <span>${serviceFee.toFixed(2)}</span>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="flex justify-between font-semibold mb-6">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              
              <Button 
                className="w-full"
                onClick={handleCheckout}
              >
                Place Order <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                By placing your order you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Cart;
