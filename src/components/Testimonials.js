import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    { name: 'Peter Breis', comment: 'Knowledgeable and easy to work with.', rating: 4 },
  ];

  return (
    <section className="testimonials">
      <h2>See what our happy customers have to say about us</h2>
      <div className="testimonial-list">
        {testimonials.map((test, index) => (
          <div key={index} className="testimonial-card">
            <h3>{test.name}</h3>
            <p>{test.comment}</p>
            <span>Rating: {test.rating}/5</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
