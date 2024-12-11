import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FeaturedVendors.css';

const FeaturedVendors = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    axios.get('/api/featured-technicians').then((response) => setVendors(response.data));
  }, []);

  return (
    <section className="featured-vendors">
      <h2>Featured Vendors</h2>
      <div className="vendors-carousel">
        {vendors.map((vendor) => (
          <div key={vendor.id} className="vendor-card">
            <img src={vendor.photo} alt={vendor.name} />
            <h3>{vendor.name}</h3>
            <p>{vendor.specialization}</p>
            <span>Rating: {vendor.rating}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedVendors;
