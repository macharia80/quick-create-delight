
import React from 'react';
import { restaurantCategories } from '../data/restaurants';
import { ScrollArea } from '@/components/ui/scroll-area';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter = ({ selectedCategory, onSelectCategory }: CategoryFilterProps) => {
  return (
    <div className="py-4">
      <ScrollArea className="w-full whitespace-nowrap pb-3">
        <div className="flex space-x-2">
          {restaurantCategories.map((category) => (
            <button
              key={category}
              className={`category-pill ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => onSelectCategory(category)}
              aria-pressed={selectedCategory === category}
            >
              {category}
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default CategoryFilter;
