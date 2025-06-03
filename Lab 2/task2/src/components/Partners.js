import React from 'react';
// Import all images
import arcade from '../Images/partner-arcade.png';
import edtech from '../Images/partner-Edtech.png';
import fastBrothers from '../Images/partner-fast-brothers.png';
import kphone from '../Images/partner-KPhone.png';
import tvc from '../Images/partner-TVC.png';
import volkerStevin from '../Images/partner-Volker-Stevin.png';

function Partners() {
  const partnerLogos = [
    { id: 1, img: arcade, alt: "Arcade partner" },
    { id: 2, img: edtech, alt: "Edtech partner" },
    { id: 3, img: fastBrothers, alt: "Fast Brothers partner" },
    { id: 4, img: kphone, alt: "KPhone partner" },
    { id: 5, img: tvc, alt: "TVC partner" },
    { id: 6, img: volkerStevin, alt: "Volker Stevin partner" }
  ];

  return (
    <section>
      <div className="logo-row">
        {partnerLogos.map((logo) => (
          <img 
            key={logo.id}
            src={logo.img}
            alt={logo.alt}
          />
        ))}
      </div>
    </section>
  );
}

export default Partners;