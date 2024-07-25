// src/pages/Contact.js
import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to Firebase or email service)
    console.log(form);
  };

  return (
    <div className="contact">
      <h1>Contactos</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nome" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Telefone" value={form.phone} onChange={handleChange} required />
        <input type="text" name="subject" placeholder="Assunto" value={form.subject} onChange={handleChange} required />
        <textarea name="message" placeholder="A sua mensagem ..." value={form.message} onChange={handleChange} required />
        <button type="submit">Enviar</button>
      </form>
      <div className="contact-info">
        <p>contaemeia@gmail.com</p>
        <p><a href="https://www.facebook.com">Facebook</a></p>
        <p><a href="https://www.instagram.com">Instagram</a></p>
      </div>
    </div>
  );
}

export default Contact;
