# Artisan Chocolates - React Website

A beautiful, configurable React website for a handmade chocolate shop featuring multiple sections including testimonials, about, products exploration, and contact information.

## Features

- **Beautiful Design**: Modern, responsive design with chocolate-themed color palette
- **Configurable**: Easy to customize through configuration files
- **Extensible**: Well-structured components for easy expansion
- **Multiple Sections**:
  - Hero/Home page with featured products
  - About section with company story and values
  - Products page with filtering capabilities
  - Testimonials with customer reviews
  - Contact page with form and FAQ
- **Responsive**: Mobile-friendly design
- **TypeScript**: Full type safety and better development experience

## Project Structure

```
chocolate-shop/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Products.tsx
│   │   ├── Testimonials.tsx
│   │   └── Contact.tsx
│   ├── data/
│   │   └── config.ts
│   ├── types/
│   │   └── index.ts
│   ├── styles/
│   │   └── App.css
│   ├── App.tsx
│   └── index.tsx
├── package.json
├── tsconfig.json
└── README.md
```

## Configuration

The website is highly configurable through the `src/data/config.ts` file. You can easily modify:

- Company information (name, tagline, contact details)
- Navigation items
- Hero section content
- Product catalog
- Testimonials
- About section content

## Key Configuration Options

### Company Information
```typescript
export const companyInfo: CompanyInfo = {
  name: "Artisan Chocolates",
  tagline: "Handcrafted Excellence Since 1985",
  description: "...",
  // ... other details
};
```

### Products
```typescript
export const products: Product[] = [
  {
    id: '1',
    name: 'Dark Chocolate Truffles',
    description: '...',
    price: 24.99,
    // ... other properties
  }
];
```

### Navigation
```typescript
export const navigationItems: NavigationItem[] = [
  { id: 'home', label: 'Home', path: '/' },
  // ... other items
];
```

## Installation & Setup

1. **Prerequisites**: Node.js and npm installed
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start development server**:
   ```bash
   npm start
   ```
4. **Build for production**:
   ```bash
   npm run build
   ```

## Customization Guide

### Adding New Products
1. Open `src/data/config.ts`
2. Add new product objects to the `products` array
3. Include all required fields: id, name, description, price, image, category, ingredients

### Modifying Styling
1. Edit `src/styles/App.css`
2. CSS variables are defined in `:root` for easy theme customization
3. Key variables:
   - `--primary-color`: Main brand color
   - `--secondary-color`: Secondary brand color
   - `--font-primary`: Heading font
   - `--font-secondary`: Body font

### Adding New Pages
1. Create new component in `src/pages/`
2. Add route to `src/App.tsx`
3. Add navigation item to `src/data/config.ts`

### Extending Types
1. Add new interfaces to `src/types/index.ts`
2. Update configuration in `src/data/config.ts`

## Design Features

- **Color Palette**: Warm chocolate browns with gold accents
- **Typography**: Playfair Display for headings, Inter for body text
- **Layout**: CSS Grid and Flexbox for responsive layouts
- **Animations**: Smooth transitions and hover effects
- **Cards**: Consistent card design throughout
- **Mobile-First**: Responsive design principles

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers
- Responsive design for all screen sizes

## Technologies Used

- React 18
- TypeScript
- React Router DOM
- CSS3 with CSS Variables
- Google Fonts (Playfair Display, Inter)

## Future Enhancements

- Shopping cart functionality
- User authentication
- Payment integration
- Admin panel for content management
- Blog section
- Newsletter signup
- Product reviews system
- Inventory management

## License

This project is created for demonstration purposes. Feel free to use and modify as needed.
