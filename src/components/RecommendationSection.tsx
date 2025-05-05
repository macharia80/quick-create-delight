
import React from 'react';
import { Link } from 'react-router-dom';
import { getPopularItems } from '../data/restaurants';
import FoodItem from './FoodItem';

const RecommendationSection = () => {
  const popularItems = getPopularItems();
  
  return (
    <section className="py-6">
      <div className="food-container">
        <h2 className="section-title">Recommended for you</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {popularItems.slice(0, 5).map((item) => (
            <div key={`${item.restaurantId}-${item.id}`}>
              <Link to={`/restaurant/${item.restaurantId}`}>
                <FoodItem item={item} compact />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendationSection;
