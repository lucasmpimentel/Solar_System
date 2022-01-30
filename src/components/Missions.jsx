import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import '../styles/SolarSystem.css';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="solar-system-class">
        <Title headline="Missões" />
        <div className="mission-cards-wrap">
          {missions.map((mission) => (
            <MissionCard
              key={ mission.name }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
