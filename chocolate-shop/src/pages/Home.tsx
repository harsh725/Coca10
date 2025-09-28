import React from 'react';
import { Link } from 'react-router-dom';
import { heroSection, products } from '../data/config';
import { Product } from '../types';

const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="hero" 
        style={{ backgroundImage: `url(${heroSection.backgroundImage})` }}
      >
        <div className="hero-content">
          <h1 className="fade-in-up">{heroSection.title}</h1>
          <p className="fade-in-up">{heroSection.subtitle}</p>
          <Link to={heroSection.ctaLink} className="btn fade-in-up">
            {heroSection.ctaText}
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--primary-color)' }}>
            Featured Products
          </h2>
          <div className="grid grid-3">
            {featuredProducts.map((product: Product) => (
              <div key={product.id} className="card">
                <div style={{ position: 'relative' }}>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="card-image"
                  />
                  {product.isNew && (
                    <span className="product-badge badge-new">New</span>
                  )}
                  {product.isBestseller && (
                    <span className="product-badge badge-bestseller">Bestseller</span>
                  )}
                </div>
                <div className="card-content">
                  <h3 className="card-title">{product.name}</h3>
                  <p className="card-description">{product.description}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="card-price">${product.price}</span>
                    <Link to="/products" className="btn btn-secondary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/products" className="btn">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section section-alt">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
            Experience Chocolate Perfection
          </h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Join thousands of satisfied customers who have discovered the exceptional quality 
            and taste of our handcrafted chocolates. Each piece tells a story of passion, 
            tradition, and uncompromising quality.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/products" className="btn">
              Shop Now
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Our Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
