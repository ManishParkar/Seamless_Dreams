import React from 'react';
import PropertyCard from './PropertyCard';
import ContactForm from './ContactForm';
import './MainContent.css';

function MainContent() {
  return (
    <main className="main-content">
      <section className="hero">
        <h1>Bid Your Dream Place</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <div className="cta-buttons">
          <button>Contact Us</button>
          <button>Learn More</button>
        </div>
        <div className="stats">
          <span>40+ Partners</span>
          <span>90+ Partners</span>
          <span>150+ Partners</span>
        </div>
      </section>
      
      <section className="properties">
        <h2>We provide a variety of insurance</h2>
        <div className="property-cards">
          <PropertyCard title="Personal House" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." imageUrl="/images/property1.jpg" />
          <PropertyCard title="Residential Building" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." imageUrl="/images/property2.jpg" />
          <PropertyCard title="Industrial Building" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." imageUrl="/images/property3.jpg" />
        </div>
      </section>

      <section className="location">
        <h2>Where we are based</h2>
        <img src="/images/map.jpg" alt="Map location" />
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
      </section>
      
      <section className="features">
        <h2>We're ready to protect your props</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Certified Platform</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="feature-card">
            <h3>High Security</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="feature-card">
            <h3>Friendly Budget</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="feature-card">
            <h3>Customer Support</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
      </section>
      
      <section className="cta">
        <h2>Start bidding on buildings</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <button>Get started</button>
      </section>
      
      <ContactForm />
    </main>
  );
}

export default MainContent;
