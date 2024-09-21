"use client";
import React, { useState } from 'react';

const faqData = [
  {
    question: '1.	What is a rent agreement?',
    answer: 'A legal document known as a rent agreement sets forth the terms and circumstances that apply to the leasing of a property between a landlord and a tenant. It contains specifics like the monthly rent, the length of the lease, and each party\'s obligations.',
  },
  { question: '2.	Why do I need a rent agreement?', answer: 'By laying out the conditions of the renting arrangement in plain language, a rent agreement protects both the landlord and the tenant, helps to avoid conflicts, and offers legal remedies if difficulties arise.' },
  { question: '3.	How do I start the process with Rent Agreement Services Pune?', answer: 'Simply contact us via phone at 7709415315 or email at our email address. We’ll guide you through the necessary steps, including document submission and scheduling any required biometric verification.' },
  { question: '4.	What documents are required to create a rent agreement?', answer: 'Identification documents such as a passport or Aadhar card, evidence of property ownership, and proof of address are usually required. Based on your unique needs, our staff will present you with a comprehensive list.' },
  { question: '5.	How long does it take to prepare and register a rent agreement?', answer: 'After receiving all necessary paperwork, the process typically takes … days. Drafting, reviewing, and registering are included in this.' },

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
