import React, { useState } from 'react';
import './Home.css';

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

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Nova coleção de Outono 2024 Disponivel</h1>
          <p>Procure entre a grande variedade de anéis, pulseiras e colares da nossa coleção de outono.</p>
          <button type="button">Ver Coleção</button>
          <div className="hero-stats">
            <div>
              <span>100+</span>
              <p>Peças disponíveis</p>
            </div>
            <div>
              <span>10/10</span>
              <p>Satisfação dos Clientes</p>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/hero-image.png" alt="Hero" />
        </div>
      </section>
      <div className="free-shipping-banner">
        <p>Portes grátis a partir de 29,99€</p>
      </div>
      <section className="sustainability">
        <div className="container sustainability-content">
          <div className="sustainability-image">
            <img src="/images/sustainability.jpg" alt="Sustainability" />
          </div>
          <div className="sustainability-text">
            <h2>Sustentabilidade</h2>
            <p>
              Na Corta&Meia, trabalhamos arduamente para ajudar a tornar o planeta um lugar melhor e é com esta mentalidade que
              nos orgulhamos de anunciar todas as nossas peças são feitas com materiais de origem sustentável.
            </p>
            <button type="button">Saber Mais</button>
          </div>
        </div>
      </section>
      <section className="product-search">
        <div className="container">
          <h2>Pesquisa por tipo de Joia</h2>
          <div className="product-search-grid">
            <div className="product-search-item">
              <img src="/images/rings.jpg" alt="Anéis" />
              <div className="product-search-text">Anéis</div>
            </div>
            <div className="product-search-item">
              <img src="/images/bracelets.jpg" alt="Pulseiras" />
              <div className="product-search-text">Pulseiras</div>
            </div>
            <div className="product-search-item">
              <img src="/images/necklaces.jpg" alt="Colares" />
              <div className="product-search-text">Colares</div>
            </div>
            <div className="product-search-item">
              <img src="/images/earrings.jpg" alt="Brincos" />
              <div className="product-search-text">Brincos</div>
            </div>
          </div>
        </div>
      </section>
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
      <section className="newsletter">
        <div className="newsletter-container">
          <h2>Queres ficar atualizado? Nós informamos-te as novidades</h2>
          <form className="newsletter-form">
            <input type="email" placeholder="Insira aqui o seu Email" />
            <button type="submit">Subscrever</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Home;
