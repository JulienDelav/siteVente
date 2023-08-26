import React from 'react';
import './Services.css';

function Services() {
  return (
    <section className="services">
      <div className="services-content">
        <h2 className="services-title">Our Services</h2>
        <div className="service">
          <span className="service-icon">⚙️</span>
          <p className="service-description">Web Development</p>
        </div>
        <div className="service">
          <span className="service-icon">📊</span>
          <p className="service-description">Data Analysis</p>
        </div>
        {/* ... Add more services as needed */}
      </div>
    </section>
  );
}

export default Services;
