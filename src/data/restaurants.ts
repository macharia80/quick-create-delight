
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  popular: boolean;
  dietaryInfo: string[];
  preparationTime: number; // in minutes
}

export interface Restaurant {
  id: string;
  name: string;
  image: string;
  coverImage: string;
  rating: number;
  reviews: number;
  categories: string[];
  priceRange: string;
  deliveryTime: string;
  deliveryFee: number;
  distance: number; // in miles or km
  address: string;
  featured: boolean;
  menu: MenuItem[];
}

export const restaurantCategories = [
  "All",
  "Fast Food",
  "Healthy",
  "Pizza",
  "Asian",
  "Mexican",
  "Indian",
  "Desserts",
  "Breakfast",
  "Vegan"
];

export const restaurants: Restaurant[] = [
  {
    id: "rest1",
    name: "Burger Haven",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80",
    coverImage: "https://images.unsplash.com/photo-1542574271-7f3b92e6c821?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80",
    rating: 4.8,
    reviews: 342,
    categories: ["Fast Food", "Burgers"],
    priceRange: "$$",
    deliveryTime: "15-25 min",
    deliveryFee: 2.99,
    distance: 1.2,
    address: "123 Main St, Anytown, USA",
    featured: true,
    menu: [
      {
        id: "item1",
        name: "Classic Cheeseburger",
        description: "Angus beef patty with cheddar cheese, lettuce, tomato, and special sauce",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        category: "Burgers",
        popular: true,
        dietaryInfo: ["Contains dairy", "Contains gluten"],
        preparationTime: 12
      },
      {
        id: "item2",
        name: "Bacon Supreme",
        description: "Double patty burger with bacon, onion rings, and BBQ sauce",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        category: "Burgers",
        popular: true,
        dietaryInfo: ["Contains dairy", "Contains gluten"],
        preparationTime: 15
      }
    ]
  },
  {
    id: "rest2",
    name: "Green Bowl",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80",
    coverImage: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80",
    rating: 4.5,
    reviews: 287,
    categories: ["Healthy", "Salads", "Vegan"],
    priceRange: "$$",
    deliveryTime: "20-30 min",
    deliveryFee: 1.99,
    distance: 2.5,
    address: "456 Healthy Ave, Anytown, USA",
    featured: false,
    menu: [
      {
        id: "item3",
        name: "Superfood Bowl",
        description: "Quinoa, avocado, kale, sweet potato, and tahini dressing",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        category: "Bowls",
        popular: true,
        dietaryInfo: ["Vegan", "Gluten-free", "Dairy-free"],
        preparationTime: 10
      }
    ]
  },
  {
    id: "rest3",
    name: "Pizza Palace",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80",
    coverImage: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80",
    rating: 4.6,
    reviews: 512,
    categories: ["Pizza", "Italian"],
    priceRange: "$$",
    deliveryTime: "25-35 min",
    deliveryFee: 2.49,
    distance: 3.1,
    address: "789 Pizza St, Anytown, USA",
    featured: true,
    menu: [
      {
        id: "item4",
        name: "Margherita Pizza",
        description: "Fresh mozzarella, tomato sauce, and basil",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        category: "Pizza",
        popular: true,
        dietaryInfo: ["Vegetarian", "Contains dairy", "Contains gluten"],
        preparationTime: 18
      }
    ]
  },
  {
    id: "rest4",
    name: "Sushi Express",
    image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80",
    coverImage: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80",
    rating: 4.7,
    reviews: 428,
    categories: ["Asian", "Sushi", "Japanese"],
    priceRange: "$$$",
    deliveryTime: "30-40 min",
    deliveryFee: 3.99,
    distance: 4.2,
    address: "101 Sushi Way, Anytown, USA",
    featured: false,
    menu: [
      {
        id: "item5",
        name: "California Roll Set",
        description: "8 pieces of California roll with miso soup",
        price: 16.99,
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        category: "Sushi",
        popular: true,
        dietaryInfo: ["Contains seafood", "Contains gluten"],
        preparationTime: 15
      }
    ]
  },
  {
    id: "rest5",
    name: "Taco Fiesta",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80",
    coverImage: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80",
    rating: 4.4,
    reviews: 356,
    categories: ["Mexican", "Fast Food"],
    priceRange: "$",
    deliveryTime: "15-25 min",
    deliveryFee: 1.99,
    distance: 1.8,
    address: "222 Taco Lane, Anytown, USA",
    featured: true,
    menu: [
      {
        id: "item6",
        name: "Street Tacos",
        description: "Three authentic corn tortilla tacos with choice of protein",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        category: "Tacos",
        popular: true,
        dietaryInfo: ["Gluten-free option available"],
        preparationTime: 10
      }
    ]
  },
  {
    id: "rest6",
    name: "Sweet Treats",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80",
    coverImage: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80",
    rating: 4.9,
    reviews: 289,
    categories: ["Desserts", "Bakery"],
    priceRange: "$$",
    deliveryTime: "20-30 min",
    deliveryFee: 2.49,
    distance: 2.7,
    address: "333 Dessert Dr, Anytown, USA",
    featured: false,
    menu: [
      {
        id: "item7",
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        category: "Desserts",
        popular: true,
        dietaryInfo: ["Vegetarian", "Contains dairy", "Contains gluten"],
        preparationTime: 15
      }
    ]
  }
];

export const getPopularItems = () => {
  return restaurants.flatMap(restaurant => 
    restaurant.menu.filter(item => item.popular)
      .map(item => ({
        ...item,
        restaurantName: restaurant.name,
        restaurantId: restaurant.id,
        deliveryTime: restaurant.deliveryTime
      }))
  );
};
