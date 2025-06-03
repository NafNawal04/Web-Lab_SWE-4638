import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ name, jobTitle, company, bio, skills, imageUrl }) => {
  const handleContactClick = () => {
    console.log(`Contacting ${name} at ${company}`);
    alert(`Contact request sent to ${name}. You'll receive a response shortly.`);
  };

  return (
    <div className="profile-card">
      <div className="card-header">
        <img src={imageUrl} alt={name} className="profile-image" />
        <div className="profile-info">
          <h2 className="profile-name">{name}</h2>
          <p className="profile-title">{jobTitle}</p>
          <p className="profile-company">{company}</p>
        </div>
      </div>
      
      <div className="card-body">
        <p className="profile-bio">{bio}</p>
        
        <div className="skills-section">
          <h3>Skills</h3>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="card-footer">
        <button className="contact-button" onClick={handleContactClick}>
          Contact {name.split(' ')[0]}
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;