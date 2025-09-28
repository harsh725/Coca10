import React, { useState } from 'react';
import { products } from '../data/config';
import { Product } from '../types';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(p => p.category === category));
    }
  };

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Header Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
              Explore Our Products
            </h1>
            <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              Discover our exquisite collection of handcrafted chocolates, each piece 
              carefully created using the finest ingredients and traditional techniques.
            </p>
          </div>

          {/* Category Filter */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '1rem', 
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryFilter(category)}
                className={`btn ${selectedCategory === category ? '' : 'btn-secondary'}`}
                style={{ minWidth: '120px' }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-3">
            {filteredProducts.map((product) => (
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
                  
                  {/* Ingredients */}
                  <div style={{ marginBottom: '1rem' }}>
                    <strong style={{ color: 'var(--text-dark)', fontSize: '0.9rem' }}>
                      Ingredients:
                    </strong>
                    <p style={{ 
                      fontSize: '0.85rem', 
                      color: 'var(--text-light)', 
                      margin: '0.25rem 0 0 0' 
                    }}>
                      {product.ingredients.join(', ')}
                    </p>
                  </div>

                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    marginTop: 'auto'
                  }}>
                    <span className="card-price">${product.price}</span>
                    <button className="btn btn-secondary">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-light)' }}>
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="section section-alt">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
            Can't Find What You're Looking For?
          </h2>
          <p style={{ marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            We offer custom chocolate creations for special occasions. Contact us to 
            discuss your unique requirements and let us create something special just for you.
          </p>
          <button className="btn">
            Contact Us for Custom Orders
          </button>
        </div>
      </section>
    </div>
  );
};

export default Products;
