import React from 'react';

function SkillsProgressBar({ skills }) {
  return (
    <div className="skills-progress-bars">
      {skills.map((skill, index) => (
        <div key={index} className="skill-progress">
          <div className="skill-name">{skill.name}</div>
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${skill.progress}%` }}
            ></div>
          </div>
          <div className="progress-percentage">{skill.progress}%</div>
        </div>
      ))}
    </div>
  );
}

export default SkillsProgressBar;