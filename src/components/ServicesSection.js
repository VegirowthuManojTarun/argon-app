import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    { title: 'Fridge', description: 'Keep your fridge in top condition.' },
    { title: 'Air Conditioner', description: 'Cool your home efficiently.' },
    { title: 'Television', description: 'Fix your home entertainment system.' },
    { title: 'Gas Stove', description: 'Safe and efficient cooking repairs.' },
  ];

  return (
    <section className="services-section">
      <h2>All Services</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
