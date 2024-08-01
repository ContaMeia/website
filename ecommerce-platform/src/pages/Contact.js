import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <header className="contact-header">
        <h1>Contactos</h1>
      </header>
      <div className="contact-content">
        <section className="contact-info">
          <p>contaemeia@gmail.com</p>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/facebook-icon.png" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/instagram-icon.png" alt="Instagram" />
            </a>
          </div>
        </section>
        <section className="contact-form">
          <form>
            <input type="text" name="name" placeholder="Nome" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="tel" name="phone" placeholder="Telefone" required />
            <input type="text" name="subject" placeholder="Assunto" required />
            <textarea name="message" placeholder="A sua mensagem ..." required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
