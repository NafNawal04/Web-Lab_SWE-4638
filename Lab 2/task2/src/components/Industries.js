import React from 'react';
import Industry from './Industry';

const industriesData = [
  { title: "Travel and Aviation Consulting", description: "We are a company that offers design and build services for you from initial sketches to the final construction." },
  { title: "Business Services Consulting", description: "The sector is diverse, including professional services, education and training, and support services and outsourcing." },
  { title: "Consumer Products Consulting", description: "We are a company that offers design and build services for you from initial sketches to the final construction." },
  { title: "Financial Services Consulting", description: "We are a company that offers design and build services for you from initial sketches to the final construction." },
  { title: "Energy and Environment Consulting", description: "We are a company that offers design and build services for you from initial sketches to the final construction." },
  { title: "Surface Transport & Logistics Consulting", description: "We are a company that offers design and build services for you from initial sketches to the final construction." }
];

function Industries() {
  return (
    <section className="industries">
      <h1>Industries</h1>
      <div className="industry-grid">
        {industriesData.map((industry, index) => (
          <Industry key={index} title={industry.title} description={industry.description} />
        ))}
      </div>
    </section>
  );
}

export default Industries;