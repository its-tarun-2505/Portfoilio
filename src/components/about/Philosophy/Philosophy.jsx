import React from 'react';
import './Philosophy.css';

const Philosophy = () => {
  const values = [
    {
      icon: '🎯',
      title: 'Problem-Focused Development',
      description: 'I believe in deeply understanding the problem before writing a single line of code. Every feature should add real value.'
    },
    {
      icon: '🚀',
      title: 'Performance & User Experience',
      description: 'Fast load times, smooth interactions, and responsive layouts are the foundation of everything I build.'
    },
    {
      icon: '🔒',
      title: 'Security Matters',
      description: 'Even in frontend-focused apps, I prioritize secure patterns, safe data handling, and best practices around authentication.'
    },
    {
      icon: '📚',
      title: 'Lifelong Learning',
      description: 'Frontend tech moves fast — I keep learning new tools, patterns, and design approaches to stay current and relevant.'
    }
  ];

  return (
    <section className="philosophy">
      <div className="container">
        <h2>My Development Philosophy</h2>
        <p className="philosophy-intro">
          These values shape every decision I make — from project structure to user interaction.
        </p>

        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>

        <div className="working-style">
          <h3>How I Work</h3>
          <div className="working-points">
            <div className="working-point">
              <h4>Collaborative Approach</h4>
              <p>
                I communicate clearly, adapt to feedback, and value alignment across devs,
                designers, and stakeholders.
              </p>
            </div>
            <div className="working-point">
              <h4>Agile, Always</h4>
              <p>
                I break down features into iterative sprints with small milestones that
                deliver real progress.
              </p>
            </div>
            <div className="working-point">
              <h4>Quality as a Habit</h4>
              <p>
                Reusable components, consistent styling, and testing where it matters —
                quality isn't an afterthought.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
