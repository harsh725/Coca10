import React from 'react';
import { aboutSection, companyInfo } from '../data/config';

const About: React.FC = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* About Section */}
      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>{aboutSection.title}</h2>
              <p>{aboutSection.description}</p>
              <ul className="highlights">
                {aboutSection.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
            <div>
              <img 
                src={aboutSection.image} 
                alt="Our chocolate making process"
                className="about-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem' }}>
                Our Heritage
              </h3>
              <p>
                Founded in {companyInfo.founded}, {companyInfo.name} has been a beacon of 
                excellence in the world of artisan chocolates. Located in the heart of 
                {companyInfo.location}, our workshop combines time-honored traditions 
                with innovative techniques to create chocolates that are truly extraordinary.
              </p>
              <p>
                {companyInfo.tagline} - this isn't just our motto, it's our promise to 
                every customer who experiences our chocolates. We believe that great 
                chocolate is more than just a treat; it's an art form, a moment of joy, 
                and a connection to the finest things in life.
              </p>
            </div>
            <div>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem' }}>
                Our Commitment
              </h3>
              <p>
                Every piece of chocolate that leaves our workshop is a testament to our 
                unwavering commitment to quality. We source our cocoa beans directly from 
                sustainable farms, ensuring fair trade practices and the highest quality 
                ingredients.
              </p>
              <p>
                Our master chocolatiers bring decades of experience and passion to every 
                creation. From the initial selection of cocoa beans to the final packaging, 
                every step is carefully monitored to ensure perfection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--primary-color)' }}>
            Our Values
          </h2>
          <div className="grid grid-3">
            <div className="card">
              <div className="card-content" style={{ textAlign: 'center' }}>
                <h3 style={{ color: 'var(--primary-color)' }}>Quality</h3>
                <p>
                  We never compromise on quality. Every ingredient is carefully selected 
                  and every process is meticulously executed to ensure the finest results.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-content" style={{ textAlign: 'center' }}>
                <h3 style={{ color: 'var(--primary-color)' }}>Sustainability</h3>
                <p>
                  We believe in responsible sourcing and sustainable practices that 
                  benefit both our customers and the communities we work with.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-content" style={{ textAlign: 'center' }}>
                <h3 style={{ color: 'var(--primary-color)' }}>Innovation</h3>
                <p>
                  While respecting traditional methods, we continuously innovate to 
                  create new flavors and experiences for our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
