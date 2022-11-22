import React from 'react';
import PropTypes from 'prop-types';
import styles from './MissionStructure.module.css';

const MissionStructure = (props) => {
  const { name, description } = props;

  return (
    <>
      <td className={styles.nameData}>{ name }</td>
      <td className={styles.Description}>{ description }</td>
      <td className={styles.Member}><span>Not A Member</span></td>
      <td className={styles.joinMission}><button type="button">Join Mission</button></td>
    </>
  );
};
MissionStructure.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MissionStructure;
