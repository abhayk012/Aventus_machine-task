import type { Product, UserProfile } from "../config/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    description:
      "Premium noise-cancelling wireless headphones with 30-hour battery life",
    price: 299.99,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    inStock: true,
  },
  {
    id: "2",
    name: "Smart Watch",
    description: "Fitness tracking smartwatch with heart rate monitor and GPS",
    price: 399.99,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    inStock: true,
  },
  {
    id: "3",
    name: "Laptop Backpack",
    description:
      "Durable water-resistant backpack with padded laptop compartment",
    price: 79.99,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    inStock: true,
  },
  {
    id: "4",
    name: "Mechanical Keyboard",
    description: "RGB backlit mechanical keyboard with blue switches",
    price: 149.99,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop",
    inStock: false,
  },
  {
    id: "5",
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with precision tracking",
    price: 49.99,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop",
    inStock: true,
  },
  {
    id: "6",
    name: "USB-C Hub",
    description: "7-in-1 USB-C hub with HDMI, USB 3.0, and SD card reader",
    price: 59.99,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=400&fit=crop",
    inStock: true,
  },
  {
    id: "7",
    name: "Desk Lamp",
    description:
      "LED desk lamp with adjustable brightness and color temperature",
    price: 39.99,
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop",
    inStock: true,
  },
  {
    id: "8",
    name: "Phone Stand",
    description: "Adjustable aluminum phone stand for desk",
    price: 24.99,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop",
    inStock: true,
  },
  {
    id: "9",
    name: "Webcam",
    description: "1080p HD webcam with built-in microphone",
    price: 89.99,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=400&h=400&fit=crop",
    inStock: false,
  },
  {
    id: "10",
    name: "Portable Charger",
    description: "20000mAh portable power bank with fast charging",
    price: 44.99,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
    inStock: true,
  },
  {
    id: "11",
    name: "Cable Organizer",
    description: "Silicone cable management clips set of 10",
    price: 12.99,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    inStock: true,
  },
  {
    id: "12",
    name: "Monitor Stand",
    description: "Wooden monitor stand with storage compartment",
    price: 34.99,
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    inStock: true,
  },
];

export const userProfile: UserProfile = {
  id: "user-001",
  name: "Abhay Krishnan",
  email: "abhaykrishnan210@gmail.com",
  avatar:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  bio: "Tech enthusiast and product reviewer. Love exploring new gadgets and sharing my experiences.",
  location: "Kannur, Kerala",
  joinDate: "2023-01-15",
  stats: {
    orders: 24,
    reviews: 18,
    wishlist: 12,
  },
};
