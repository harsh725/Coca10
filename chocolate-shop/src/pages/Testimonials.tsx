import React from 'react';
import { testimonials } from '../data/config';

const Testimonials: React.FC = () => {
  const renderStars = (rating: number) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Header Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
              What Our Customers Say
            </h1>
            <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              Don't just take our word for it. Here's what our valued customers 
              have to say about their experience with our handcrafted chocolates.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-2">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="card testimonial-card">
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  {testimonial.image && (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="testimonial-image"
                      style={{ marginRight: '1rem', marginBottom: '0' }}
                    />
                  )}
                  <div>
                    <h4 className="testimonial-author" style={{ marginBottom: '0.25rem' }}>
                      {testimonial.name}
                    </h4>
                    {testimonial.location && (
                      <p className="testimonial-location" style={{ margin: '0' }}>
                        {testimonial.location}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="testimonial-rating">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="testimonial-comment">
                  "{testimonial.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section section-alt">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--primary-color)' }}>
            Our Happy Customers
          </h2>
          <div className="grid grid-4">
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                10,000+
              </h3>
              <p style={{ color: 'var(--text-light)', margin: '0' }}>
                Satisfied Customers
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                4.9/5
              </h3>
              <p style={{ color: 'var(--text-light)', margin: '0' }}>
                Average Rating
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                95%
              </h3>
              <p style={{ color: 'var(--text-light)', margin: '0' }}>
                Repeat Customers
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                38
              </h3>
              <p style={{ color: 'var(--text-light)', margin: '0' }}>
                Years of Excellence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
            Join Our Community of Chocolate Lovers
          </h2>
          <p style={{ marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Experience the difference that quality and craftsmanship make. 
            Order your first box today and discover why our customers keep coming back.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn">
              Shop Now
            </button>
            <button className="btn btn-secondary">
              Leave a Review
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
