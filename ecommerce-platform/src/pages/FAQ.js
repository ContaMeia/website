// src/pages/FAQ.js
import React, { useState } from 'react';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { question: "Pergunta1 bla bla bla?", answer: "Resposta bla bla bla..." },
    { question: "Pergunta2 a bla bla bla?", answer: "Resposta bla bla bla..." },
    { question: "Pergunta3 a bla bla bla?", answer: "Resposta bla bla bla..." },
    { question: "Porque é que o sporting é indiscutivelmente o melhor clube do mundo?", answer: "It just is, there is not really a need for explanation" }
  ];

  return (
    <div className="faq">
      <h1>Perguntas Frequentes</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleQuestion(index)}>
            {faq.question}
          </div>
          {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
}

export default FAQ;
