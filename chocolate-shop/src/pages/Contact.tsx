import React from 'react';
import { companyInfo } from '../data/config';

const Contact: React.FC = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Header Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
              Get in Touch
            </h1>
            <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              We'd love to hear from you! Whether you have questions about our products, 
              need help with an order, or want to discuss custom creations, we're here to help.
            </p>
          </div>

          <div className="contact-content">
            {/* Contact Information */}
            <div className="contact-info">
              <h3>Contact Information</h3>
              
              <div className="contact-item">
                <strong>Address:</strong>
                <span>{companyInfo.location}</span>
              </div>
              
              <div className="contact-item">
                <strong>Phone:</strong>
                <span>{companyInfo.phone}</span>
              </div>
              
              <div className="contact-item">
                <strong>Email:</strong>
                <span>{companyInfo.email}</span>
              </div>
              
              <div className="contact-item">
                <strong>Business Hours:</strong>
                <div>
                  <p style={{ margin: '0.25rem 0' }}>Monday - Friday: 9:00 AM - 7:00 PM</p>
                  <p style={{ margin: '0.25rem 0' }}>Saturday: 10:00 AM - 6:00 PM</p>
                  <p style={{ margin: '0.25rem 0' }}>Sunday: 11:00 AM - 5:00 PM</p>
                </div>
              </div>

              <div className="social-links">
                {companyInfo.socialMedia.instagram && (
                  <a 
                    href={companyInfo.socialMedia.instagram} 
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📷
                  </a>
                )}
                {companyInfo.socialMedia.facebook && (
                  <a 
                    href={companyInfo.socialMedia.facebook} 
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📘
                  </a>
                )}
                {companyInfo.socialMedia.twitter && (
                  <a 
                    href={companyInfo.socialMedia.twitter} 
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🐦
                  </a>
                )}
              </div>
            </div>

            {/* Contact Form */}
            <div className="card">
              <div className="card-content">
                <h3 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem' }}>
                  Send us a Message
                </h3>
                <form>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '0.5rem', 
                      fontWeight: '500',
                      color: 'var(--text-dark)'
                    }}>
                      Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid #e0e0e0',
                        borderRadius: 'var(--border-radius)',
                        fontSize: '1rem',
                        transition: 'var(--transition)'
                      }}
                    />
                  </div>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '0.5rem', 
                      fontWeight: '500',
                      color: 'var(--text-dark)'
                    }}>
                      Email *
                    </label>
                    <input 
                      type="email" 
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid #e0e0e0',
                        borderRadius: 'var(--border-radius)',
                        fontSize: '1rem',
                        transition: 'var(--transition)'
                      }}
                    />
                  </div>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '0.5rem', 
                      fontWeight: '500',
                      color: 'var(--text-dark)'
                    }}>
                      Subject
                    </label>
                    <input 
                      type="text"
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid #e0e0e0',
                        borderRadius: 'var(--border-radius)',
                        fontSize: '1rem',
                        transition: 'var(--transition)'
                      }}
                    />
                  </div>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '0.5rem', 
                      fontWeight: '500',
                      color: 'var(--text-dark)'
                    }}>
                      Message *
                    </label>
                    <textarea 
                      required
                      rows={5}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid #e0e0e0',
                        borderRadius: 'var(--border-radius)',
                        fontSize: '1rem',
                        transition: 'var(--transition)',
                        resize: 'vertical'
                      }}
                    />
                  </div>
                  
                  <button type="submit" className="btn" style={{ width: '100%' }}>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-alt">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--primary-color)' }}>
            Frequently Asked Questions
          </h2>
          <div className="grid grid-2">
            <div className="card">
              <div className="card-content">
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
                  Do you offer international shipping?
                </h4>
                <p>
                  Yes! We ship our chocolates worldwide. Shipping costs and delivery times 
                  vary by location. All international orders are carefully packaged with 
                  temperature control to ensure freshness.
                </p>
              </div>
            </div>
            
            <div className="card">
              <div className="card-content">
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
                  How long do your chocolates stay fresh?
                </h4>
                <p>
                  Our chocolates are best enjoyed within 2-3 weeks of delivery for optimal 
                  taste and texture. Store them in a cool, dry place away from direct sunlight.
                </p>
              </div>
            </div>
            
            <div className="card">
              <div className="card-content">
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
                  Do you accommodate dietary restrictions?
                </h4>
                <p>
                  Absolutely! We offer sugar-free, vegan, and gluten-free options. 
                  Please contact us to discuss your specific dietary needs and we'll 
                  create something perfect for you.
                </p>
              </div>
            </div>
            
            <div className="card">
              <div className="card-content">
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
                  Can I visit your workshop?
                </h4>
                <p>
                  We offer guided tours of our chocolate-making facility by appointment. 
                  Tours include tastings and insights into our crafting process. 
                  Contact us to schedule your visit!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
