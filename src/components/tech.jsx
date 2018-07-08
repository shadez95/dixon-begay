import React from "react";
import TechExperience from '../tech-experience.json';

const Tech = () => (
  <div>
    <h2>Technolgies</h2>

    <div style={{ 'paddingLeft': '30px' }}>
      <h3>Languages</h3>
      <ul className="c-list c-list--inline">
      {
        TechExperience.languages.map((language, index) => (
          <li key={index} className="c-list__item">{language}</li>
        ))
      }
      </ul>

      <h3>Frameworks and Libraries</h3>
      <ul className="c-list c-list--inline">
      {
        TechExperience.frameworksLibs.map((frameworksLib, index) => (
          <li key={index} className="c-list__item">{frameworksLib}</li>
        ))
      }
      </ul>

      <h3>Databases</h3>
      <ul className="c-list c-list--inline">
      {
        TechExperience.databases.map((database, index) => (
          <li key={index} className="c-list__item">{database}</li>
        ))
      }
      </ul>
    </div>

  </div>
);

export default Tech;
