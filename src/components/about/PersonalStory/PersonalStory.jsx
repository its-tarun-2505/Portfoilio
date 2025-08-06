import React from 'react';
import './PersonalStory.css';

const PersonalStory = () => {
  return (
    <section className="personal-story">
      <div className="container">
        <h2>My Journey</h2>
        <div className="story-content">
          <p>
            I'm a frontend developer from India, passionate about building
            responsive and performant user interfaces using React and Tailwind CSS.
            My journey began during my B.Tech in Computer Science, where I started
            experimenting with frontend tools and quickly fell in love with the process
            of bringing ideas to life on the web.
          </p>
          <p>
            Over time, I've built a diverse portfolio of projects—from real-time
            micro-meetup platforms like <strong>RoomLoop</strong> to medical AI tools
            such as the <strong>Brain Tumor Detection System</strong>, and modern,
            responsive interfaces like this <strong>Portfolio Website</strong>.
            These experiences helped me master not just React, but also Git, Vite,
            responsive design principles, and project architecture.
          </p>
          <p>
            Outside of coding, I enjoy sketching UI layouts, exploring new design trends,
            and watching dev talks. I'm constantly learning, iterating, and striving to
            build web apps that are not just functional, but delightful to use.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonalStory;
