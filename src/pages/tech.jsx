import React from 'react';
import PropTypes from 'prop-types';

const paddedDiv = { paddingBottom: '30px' };

const TechStacks = ({ data }) => {
  const { dataJson } = data;
  const {
    languages, frameworksLibs, databases, devTools,
  } = dataJson;

  return (
    <div className="container" style={paddedDiv}>
      <div className="content is-large">
        <h1 className="title is-size-4-mobile">Tech I know</h1>
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-8">
            <div className="tile">
              <div className="tile is-5 is-parent is-vertical">
                <article className="tile is-child notification is-primary">
                  <p className="title is-size-4-mobile">Languages</p>
                  {languages.map(language => (
                    <p className="subtitle is-size-6-mobile" key={language.id}>
                      {language.name}
                    </p>
                  ))}
                </article>
                <article className="tile is-child notification is-info">
                  <p className="title is-size-4-mobile">Databases</p>
                  {databases.map(database => (
                    <p className="subtitle is-size-6-mobile" key={database.id}>
                      {database.name}
                    </p>
                  ))}
                </article>
              </div>
              <div className="tile is-5 is-parent">
                <article className="tile is-child notification is-success">
                  <p className="title is-size-4-mobile">Dev Tools</p>
                  {devTools.map(devTool => (
                    <p className="subtitle is-size-6-mobile" key={devTool.id}>
                      {devTool.name}
                    </p>
                  ))}
                </article>
              </div>
              <div className="tile is-5 is-parent">
                <article className="tile is-child notification is-warning">
                  <p className="title is-size-4-mobile">Frameworks & Libraries</p>
                  {frameworksLibs.map(frameworksLib => (
                    <p className="subtitle is-size-6-mobile" key={frameworksLib.id}>
                      {frameworksLib.name}
                    </p>
                  ))}
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TechStacks.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TechStacks;

export const query = graphql`
  query TechStacksQuery {
    dataJson {
      languages {
        id
        name
      }
      frameworksLibs {
        id
        name
      }
      databases {
        id
        name
      }
      devTools {
        id
        name
      }
    }
  }
`;
