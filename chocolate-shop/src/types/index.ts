export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  ingredients: string[];
  isNew?: boolean;
  isBestseller?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  image?: string;
  location?: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  founded: string;
  location: string;
  email: string;
  phone: string;
  socialMedia: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

export interface NavigationItem {
  id: string;
  label: string;
  path: string;
  isActive?: boolean;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText: string;
  ctaLink: string;
}

export interface AboutSection {
  title: string;
  description: string;
  image: string;
  highlights: string[];
}
