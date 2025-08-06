import React from 'react';
import './Timeline.css';

const Timeline = () => {
  const timelineData = [
    {
      year: '2025',
      title: 'Graduated B.Tech in Computer Science',
      organization: 'GLA University, Mathura',
      description: 'Completed my undergraduate degree with a CPI of 8.04. Specialized in full-stack web development, data structures, and machine learning.',
      type: 'education',
    },
    {
      year: '2024',
      title: 'Built RoomLoop – Real-Time Micro-Meetup Platform',
      organization: 'Personal Project',
      description: 'Engineered a full-stack app using MERN and Socket.io for real-time interaction. Integrated JWT auth and scalable room management.',
      type: 'milestone',
    },
    {
      year: '2024',
      title: 'Machine Learning Certification',
      organization: 'CloudxLab',
      description: 'Certified in machine learning fundamentals and real-world applications. Focused on model building and deployment strategies.',
      type: 'achievement',
    },
    {
      year: '2023',
      title: 'Brain Tumor Detection System',
      organization: 'Semester Project',
      description: 'Developed a CNN-powered MRI analyzer using Python, TensorFlow, and OpenCV with 95% accuracy in detecting tumors.',
      type: 'milestone',
    },
    {
      year: '2022',
      title: 'First Full-Stack Web Application',
      organization: 'Self-Learning',
      description: 'Built and deployed my first React + Node.js application. Sparked my passion for scalable and interactive web systems.',
      type: 'milestone',
    },
  ];

  return (
    <section className="timeline">
      <div className="container">
        <h2>My Professional Timeline</h2>
        <div className="timeline-container">
          {timelineData.map((item, index) => (
            <div key={index} className={`timeline-item ${item.type}`}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-year">{item.year}</div>
                <h3>{item.title}</h3>
                <h4>{item.organization}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
