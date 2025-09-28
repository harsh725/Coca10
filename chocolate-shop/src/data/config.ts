import { CompanyInfo, Product, Testimonial, HeroSection, AboutSection, NavigationItem } from '../types';

export const companyInfo: CompanyInfo = {
  name: "Coca10 Chocolates",
  tagline: "Handcrafted Excellence from your neighbourhood",
  description: "We create the world's finest handmade chocolates using premium ingredients sourced from the best cocoa farms around the globe. Each piece is crafted with passion, precision, and love.",
  founded: "2025",
  location: "213, Ravidash basti, Kankhal, Haridwar, Uttrakhand 249408",
  email: "dhimannandini2003104@gmail.com",
  phone: "+91 70178-46353",
  socialMedia: {
    instagram: "https://instagram.com/coca10chocolates",
    facebook: "https://facebook.com/coca10chocolates",
    twitter: "https://twitter.com/coca10chocolates"
  }
};

export const navigationItems: NavigationItem[] = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'products', label: 'Explore Products', path: '/products' },
  { id: 'testimonials', label: 'Testimonials', path: '/testimonials' },
  { id: 'contact', label: 'Contact', path: '/contact' }
];

export const heroSection: HeroSection = {
  title: "Indulge in Pure Chocolate Bliss",
  subtitle: "Discover our handcrafted chocolates made with the finest ingredients and traditional techniques passed down through generations.",
  backgroundImage: "https://images.unsplash.com/photo-1511381939415-e44015466834?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  ctaText: "Explore Our Collection",
  ctaLink: "/products"
};

export const aboutSection: AboutSection = {
  title: "Our Story",
  description: "Founded in 2025 in the heart of Haridwar, Coca10 Chocolates brings you exceptional handmade chocolates crafted with love from your neighbourhood. Our commitment to quality, sustainability, and innovation makes us a beloved destination for chocolate connoisseurs who appreciate authentic, locally-made treats.",
  image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  highlights: [
    "Premium Belgian and Swiss chocolate",
    "Sustainably sourced ingredients",
    "Traditional handcrafting techniques",
    "Award-winning recipes",
    "Custom gift packaging available"
  ]
};

export const products: Product[] = [
  {
    id: '1',
    name: 'Dark Chocolate Truffles',
    description: 'Rich 70% dark chocolate truffles dusted with cocoa powder',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Truffles',
    ingredients: ['Dark chocolate', 'Heavy cream', 'Butter', 'Cocoa powder'],
    isBestseller: true
  },
  {
    id: '2',
    name: 'Milk Chocolate Bonbons',
    description: 'Creamy milk chocolate bonbons with various fillings',
    price: 32.99,
    image: 'https://images.unsplash.com/photo-1571197119297-4d76f2d93b4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Bonbons',
    ingredients: ['Milk chocolate', 'Caramel', 'Nuts', 'Fruit preserves'],
    isNew: true
  },
  {
    id: '3',
    name: 'White Chocolate Raspberry',
    description: 'Delicate white chocolate infused with raspberry essence',
    price: 28.99,
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Specialty',
    ingredients: ['White chocolate', 'Raspberry', 'Vanilla', 'Sugar']
  },
  {
    id: '4',
    name: 'Artisan Chocolate Bars',
    description: 'Single-origin chocolate bars with unique flavor profiles',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Bars',
    ingredients: ['Single-origin cocoa', 'Organic sugar', 'Cocoa butter'],
    isBestseller: true
  },
  {
    id: '5',
    name: 'Seasonal Collection',
    description: 'Limited edition chocolates featuring seasonal flavors',
    price: 35.99,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Limited Edition',
    ingredients: ['Premium chocolate', 'Seasonal spices', 'Natural extracts'],
    isNew: true
  },
  {
    id: '6',
    name: 'Chocolate Gift Box',
    description: 'Elegant gift box with assorted premium chocolates',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Gift Sets',
    ingredients: ['Assorted chocolates', 'Premium packaging']
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    rating: 5,
    comment: 'Absolutely divine! The dark chocolate truffles are the best I\'ve ever tasted. The quality is exceptional and you can taste the craftsmanship in every bite.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    location: 'New York, NY'
  },
  {
    id: '2',
    name: 'Michael Chen',
    rating: 5,
    comment: 'I ordered a gift box for my wife\'s birthday and she was thrilled! The presentation was beautiful and the chocolates were incredibly fresh and delicious.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    location: 'Los Angeles, CA'
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    rating: 5,
    comment: 'As a chocolate connoisseur, I can confidently say these are among the finest chocolates available. The attention to detail and flavor complexity is remarkable.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    location: 'Chicago, IL'
  },
  {
    id: '4',
    name: 'David Thompson',
    rating: 5,
    comment: 'The seasonal collection exceeded all my expectations. Each piece was a work of art, both visually and in taste. Highly recommend!',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    location: 'Seattle, WA'
  }
];
