
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { ArrowDownUp } from 'lucide-react';

type SortOption = 'rating' | 'deliveryTime' | 'deliveryFee' | 'distance';

interface SortOptionsProps {
  onSort: (option: SortOption) => void;
  currentSort: SortOption;
}

const SortOptions = ({ onSort, currentSort }: SortOptionsProps) => {
  const sortOptions = [
    { value: 'rating', label: 'Rating (High to Low)' },
    { value: 'deliveryTime', label: 'Delivery Time (Fast to Slow)' },
    { value: 'deliveryFee', label: 'Delivery Fee (Low to High)' },
    { value: 'distance', label: 'Distance (Near to Far)' }
  ];
  
  const currentLabel = sortOptions.find(option => option.value === currentSort)?.label || 'Sort';
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 mb-4">
          <ArrowDownUp className="h-4 w-4" />
          <span>{currentLabel}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {sortOptions.map((option) => (
          <DropdownMenuItem 
            key={option.value}
            onClick={() => onSort(option.value as SortOption)}
            className={currentSort === option.value ? 'bg-gray-100 font-medium' : ''}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortOptions;
