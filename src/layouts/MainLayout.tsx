
import React from 'react';
import Header from '../components/Header';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-gray-50 border-t">
        <div className="food-container py-6 md:py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">QuickEats</h3>
              <p className="text-gray-600 text-sm">
                Making great food accessible, fast and personalized. Our mission is to connect hungry customers with the best local restaurants.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-food-orange">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-food-orange">Partner with Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-food-orange">Career</a></li>
                <li><a href="#" className="text-gray-600 hover:text-food-orange">Help & Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Email: support@quickeats.com</li>
                <li>Phone: (123) 456-7890</li>
                <li>Address: 123 Food Street, Delivery City</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-600">
            © {new Date().getFullYear()} QuickEats. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
