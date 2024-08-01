import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Pergunta1 bla bla bla bla bla bla bla?',
      answer: 'Resposta bla êçáéñbonb apawymn AWEPRY NERN EOARNG AEKçfaobnobn apawymn AWEPRY NERN EOARNG AEKçfaobnobn apawymn AWEPRY NERN EOARNG AEKçfaobnobn apawymn AWEPRY NERN EOARNG AEKçfaobnobn apawymn AWEPRY NERN EOARNG AEKçfaobnobn apawymn AWEPRY NERN EOARNG AEKçfaobnobn apawymn AWEPRY NERN EOARNG'
    },
    {
      question: 'Pergunta2 a bla bla bla bla bla bla?',
      answer: 'Resposta 2 bla bla bla bla bla bla bla bla bla'
    },
    {
      question: 'Pergunta3 a bla bla bla?',
      answer: 'Resposta 3 bla bla bla bla bla bla'
    },
    {
      question: 'Porque é que o sporting é indiscutivelmente o melhor clube do mundo?',
      answer: 'It just is, there is not really a need for explanation'
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <h1 className="faq-title">Perguntas Frequentes</h1>
      {faqs.map((faq, index) => (
        <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`} onClick={() => handleToggle(index)}>
          <div className="faq-question">
            {faq.question}
            <span className="arrow">{activeIndex === index ? '▲' : '▼'}</span>
          </div>
          {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
