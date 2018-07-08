import React from "react";
import workHistory from '../work-history.json';

const WorkHistory = () => (
  <div>
    <h2>Work History</h2>
    
    <div style={{ 'paddingLeft': '30px'}}>
      {
        workHistory.data.map((work, index) => (
          <div key={index}>
            <h3>{work.title}</h3>
            <div className="u-text--quiet">{work.date}</div>
            <p>{work.description}</p>
          </div>
        ))
      }
    </div>
  </div>
);

export default WorkHistory;
