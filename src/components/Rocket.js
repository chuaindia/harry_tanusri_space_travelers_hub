import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRocket } from '../redux/rockets/rockets';
import './Rocket.css';

const RocketItem = (props) => {
  const {
    rocket: {
      id, name, image, description, reserved,
    },
  } = props;
  const dispatch = useDispatch();
  const reserveCancelRocket = () => {
    dispatch(bookRocket(id));
  };
  return (
    <div className="RocketContainer">
      <img alt="rocket" src={image} className="RocketImage" />
      <div className="RocketDetails">
        <h2 className="RocketTitle">{name}</h2>
        <p className="RocketDescription">
          {reserved && (
          <span className="RocketBadge">
            Reserved
          </span>
          )}
          {' '}
          {description}
        </p>
        {!reserved ? (
          <button type="button" className="ReserveRocketButton" onClick={reserveCancelRocket}>Reserve The Rocket</button>
        ) : (
          <button type="button" className="ReserveCancelButton" onClick={reserveCancelRocket}>Cancel Reservation</button>
        )}
      </div>
    </div>
  );
};

RocketItem.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default RocketItem;
