import React from 'react';
import ProfileCard from './components/ProfileCard';
import './App.css';


import sakuraImage from  '../src/Images/sakura-image.jpg';
import myImage from '../src/Images/my-image.jpeg';
import cattoImage from '../src/Images/catto-image.jpg';



function App() {
  const profiles = [
    {
      name: "Sakura Nakamoto",
      jobTitle: "Junior QA Intern",
      company: "Job Inc.",
      bio: "Passionate about finding bugs",
      skills: ["Figma", "User Research", "Wireframing", "Prototyping", "UI Design"],
      imageUrl: sakuraImage
    },
    {
      name: "Nafisa Nawal Moumita",
      jobTitle: "Full Stack Developer Intern",
      company: "BrainStation Co.",
      bio: "Experienced in building scalable web applications using React Js.",
      skills: ["React", "Node.js", "MongoDB", "Express", "JavaScript"],
      imageUrl: myImage
    },
    {
      name: "Meowmed Ali",
      jobTitle: "Data Science Lead",
      company: "Analytics Pro",
      bio: "Expert in machine learning models.",
      skills: ["Python", "SQL", "Data Visualization", "Machine Learning"],
      imageUrl: cattoImage
    }
  ];

  return (
    <div className="app">
      <header className="app-header">
        <h1>Showing Profile Cards</h1>
      </header>
      <div className="profile-cards-container">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            jobTitle={profile.jobTitle}
            company={profile.company}
            bio={profile.bio}
            skills={profile.skills}
            imageUrl={profile.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;