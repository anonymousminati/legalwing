"use client";
import React, { useState } from 'react';

const faqData = [
  {
    question: 'Where can I watch?',
    answer: 'Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis.',
  },
  { question: 'Mauris id nibh eu fermentum mattis purus?', answer: '' },
  { question: 'Eros imperdiet rhoncus?', answer: '' },
  { question: 'Fames imperdiet quam fermentum?', answer: '' },
  { question: 'Varius vitae, convallis amet lacus sit aliquet nibh?', answer: '' },
  { question: 'Tortor nisl pellentesque sit quis orci dolor?', answer: '' },
  { question: 'Vestibulum mauris mauris elementum proin amet auctor ipsum nibh sollicitudin?', answer: '' },
  { question: 'Vestibulum mauris mauris elementum proin amet auctor ipsum nibh sollicitudin?', answer: '' },
  { question: 'Vestibulum mauris mauris elementum proin amet auctor ipsum nibh sollicitudin?', answer: '' },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={styles.container} className=''>
      <h2 style={styles.title} className='text-5xl text-[#425066]'>Frequently Asked <br></br><span style={styles.highlight} className='font-bold text-4xl text-[#DC1F27]'>Questions?</span></h2>
      <div style={styles.faqContainer}>
        {faqData.map((faq, index) => (
          <div key={index} style={styles.faqItem} className='py-3'>
            <div  className='text-[#000000] font-bold'
              style={styles.question}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span  style={styles.icon}>{activeIndex === index ? '✖' : '✚'}</span>
            </div>
            {activeIndex === index && <div style={styles.answer}>{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    
    textAlign: 'center',
    marginBottom: '20px',
  },
  highlight: {
    color: 'red',
  },
  faqContainer: {
    borderTop: '2px solid #0057FF50',
  },
  faqItem: {
    borderBottom: '2px solid #0057FF50',
  },
  question: {
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
    fontSize: '18px',
    marginBottom: '10px',
  },
  icon: {
    fontSize: '18px',
    color: 'red',
  },
  answer: {
    fontSize: '16px',
    paddingLeft: '20px',
    color: '#666',
  },
};

export default FAQ;
