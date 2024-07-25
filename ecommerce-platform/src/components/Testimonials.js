import React, { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    quote: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    rating: 5
  },
  {
    quote: "The customer service at Shop.co is top-notch. They are always ready to help and make sure I'm satisfied with my purchases.",
    rating: 5
  },
  {
    quote: "Great variety of products and the quality is amazing. I've been a loyal customer for years.",
    rating: 5
  },
  {
    quote: "Shop.co never disappoints. The quality and variety are always impressive.",
    rating: 5
  },
  {
    quote: "I love shopping at Shop.co. The prices are reasonable, and the quality is top-notch.",
    rating: 5
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials">
      <h2>
        Os Nossos Clientes Satisfeitos
        <button className="nav-button prev-button" onClick={prevTestimonial}>&#8249;</button>
        <button className="nav-button next-button" onClick={nextTestimonial}>&#8250;</button>
      </h2>
      <div className="testimonials-wrapper">
        <div className="testimonials-container">
          <div className="testimonial-track" style={{ transform: `translateX(-${currentIndex * (100 / testimonials.length)}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`testimonial ${index === currentIndex ? 'active' : ''}`}>
                <p>"{testimonial.quote}"</p>
                <div className="rating">
                  {'★'.repeat(testimonial.rating)}
                  {'☆'.repeat(5 - testimonial.rating)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
