import React from 'react';
import timelineData from '../../../data/timelineData';
import './Timeline.css';

const Timeline = () => {

  return (
    <section className="timeline">
      <div className="container">
        <h2>My Professional Timeline</h2>
        <div className="timeline-container">
          {timelineData.map((item, index) => (
            <div key={index} className={`timeline-item ${item.type}`}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">{item.date}</div>
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
