import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import './profile.css';

const Profile = () => {
  const missionState = useSelector((state) => state.mission);

  const reservedMission = missionState.filter((mission) => mission.reserved);

  const rockets = useSelector((state) => state.rocket);
  const reserved = rockets.filter((rocket) => rocket.reserved);

  return (
    <div className="profileContainer">
      <Col className="profileColumn">
        <h3>My Missions</h3>
        { reservedMission.length === 0 && <p>No Reserved Missions</p>}
        {reservedMission.map((reserved) => (
          <Row key={reserved.mission_id} className="profileRow">
            <h5>{ reserved.mission_name }</h5>
          </Row>
        ))}
      </Col>

      <Col className="profileColumn">
        <h3>My Rockets</h3>
        { reserved.length === 0 && <p>No Reserved Rockets</p>}
        {reserved.map((rocket) => (
          <Row key={rocket.id} className="profileRow">
            <h5>{rocket.name }</h5>
          </Row>
        ))}
      </Col>
    </div>

  );
};

export default Profile;
