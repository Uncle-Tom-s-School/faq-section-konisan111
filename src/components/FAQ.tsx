import React, { useState } from 'react';

//Itt lesznek a kérdések és a válszok.
import faqs from '../data.json'; 

import iconPlus from '../assets/images/icon-plus.svg';
import iconMinus from '../assets/images/icon-minus.svg';
import iconStar from '../assets/images/icon-star.svg';
import './FAQ.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-card">
      <div className="faq-header">
        <img src={iconStar} alt="star icon" className="star-icon" />
        <h2>FAQs</h2>
      </div>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggle(index)}>
            <span>{faq.question}</span>
            <img
              src={openIndex === index ? iconMinus : iconPlus}
              alt="toggle icon"
              className="toggle-icon"
            />
          </div>
          {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
}
