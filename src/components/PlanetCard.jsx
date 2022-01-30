import React from 'react';
import PropTypes from 'prop-types';
import '../styles/PlanetCard.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card" className="card-wrap">
        <img
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
          className={ `${planetName[0]}${planetName[3]}`.toLowerCase() }
        />
        <p data-testid="planet-name">{planetName}</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
