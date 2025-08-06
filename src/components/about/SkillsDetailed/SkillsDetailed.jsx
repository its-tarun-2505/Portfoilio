import React from 'react';
import './SkillsDetailed.css';

const SkillsDetailed = () => {
  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 80, logo: '⚛️' },
        { name: 'JavaScript', level: 75, logo: '🟨' },
        { name: 'HTML5 & CSS3', level: 85, logo: '🌐' },
        { name: 'Tailwind CSS', level: 70, logo: '🎨' },
        { name: 'Responsive Design', level: 80, logo: '📱' }
      ]
    },
    {
      category: 'Backend & Auth',
      skills: [
        { name: 'Node.js', level: 65, logo: '🟢' },
        { name: 'Express.js', level: 60, logo: '🚀' },
        { name: 'MongoDB', level: 60, logo: '🍃' },
        { name: 'JWT Auth', level: 65, logo: '🔐' }
      ]
    },
    {
      category: 'AI/ML',
      skills: [
        { name: 'Python', level: 70, logo: '🐍' },
        { name: 'TensorFlow', level: 60, logo: '🧠' },
        { name: 'OpenCV', level: 55, logo: '👁️' }
      ]
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', level: 80, logo: '📚' },
        { name: 'Vite + Netlify', level: 75, logo: '⚡' },
        { name: 'Figma', level: 50, logo: '🎨' },
        { name: 'REST APIs', level: 70, logo: '🔌' }
      ]
    }
  ];

  return (
    <section className="skills-detailed">
      <div className="container">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skills-container">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-logo">{skill.logo}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsDetailed;
