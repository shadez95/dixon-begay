import React from 'react';
import PropTypes from 'prop-types';

const paddedDiv = { padding: '5px 0' };

const Projects = ({ data }) => {
  const { dataJson } = data;
  const { projects } = dataJson;
  return (
    <div className="container" style={{ paddingBottom: '40px' }}>
      <div className="content is-large is-ancestor">
        <h1 className="title-3 is-size-4-mobile">Projects</h1>
        <div className="title-5 is-size-6-mobile">
          Checkout my Github to see the latest open-source projects I&#39;m working on.
        </div>
        <br />
        {projects.map(project => (
          <div className="content is-medium box" key={project.id}>
            <h3 className="title-4 is-size-5-mobile">{project.title}</h3>
            <div style={paddedDiv}>
              <span className="icon">
                <i className="fas fa-tag" />
              </span>
              &nbsp;&nbsp;
              <span className="is-size-6-mobile">{project.type}</span>
            </div>
            <div style={paddedDiv}>
              <span className="icon">
                <i className="fas fa-info-circle" />
              </span>
              &nbsp;&nbsp;
              <span className="is-size-6-mobile">{project.description}</span>
            </div>
            <div style={paddedDiv}>
              <span className="icon">
                <i className="fas fa-code" />
              </span>
              &nbsp;&nbsp;
              <span className="is-size-6-mobile">{project.tech}</span>
            </div>
            <div className="is-size-6-mobile" style={paddedDiv}>
              <a href={project.link}>
                {project.website && 'View site'}
                {project.github && 'View on Github'}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Projects.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Projects;

export const query = graphql`
  query ProjectsQuery {
    dataJson {
      projects {
        id
        title
        description
        link
        type
        tech
        website
        github
      }
    }
  }
`;
