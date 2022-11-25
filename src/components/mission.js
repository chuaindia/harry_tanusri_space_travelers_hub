import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Button, Col, Row, Alert,
} from 'react-bootstrap';
import { joinMission, leaveMission } from '../redux/mission/mission.redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './mission.css';

const Mission = ({
  missionName, description, reserved, missionId,
}) => {
  const dispatch = useDispatch();

  const joinMissionHandler = (id) => {
    dispatch(joinMission(id));
  };

  const leaveMissionHandler = (id) => {
    dispatch(leaveMission(id));
  };

  return (
    <Row className="ps-2 Mission">
      <Col className="col-3 Column">
        <h4>{missionName}</h4>
      </Col>
      <Col className="col-6 Column">
        <p>{description}</p>
      </Col>
      <Col className="d-flex align-items-center justify-content-center column">
        {reserved
          ? (
            <Alert variant="secondary" className="p-1 ActiveMember">
              Active Member
            </Alert>
          )
          : (
            <Alert variant="secondary" className="p-1 NotAMember">
              Not a member
            </Alert>
          )}

      </Col>
      <Col className="d-flex align-items-center justify-content-center">
        {reserved
          ? <Button variant="danger" className="LeaveButton" onClick={() => leaveMissionHandler(missionId)}>Leave Mission</Button>
          : <Button variant="danger" className="JoinButton" onClick={() => joinMissionHandler(missionId)}>Join Mission</Button>}
      </Col>
    </Row>
  );
};

Mission.propTypes = {
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  missionId: PropTypes.string.isRequired,
};

export default Mission;
