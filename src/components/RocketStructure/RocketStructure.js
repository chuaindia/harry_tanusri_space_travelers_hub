import React from 'react';
import styles from './RocketStructure.module.css';

function RocketStructure() {
  return (
    <div className={styles.RocketStructureContainer}>
      <img src="" alt="RocketImage" className={styles.RocketImage} />
      <div>
        <h5 className={styles.RocketTitle}>Rocket Name</h5>
        <p className={styles.RocketDescription}>Rocket description</p>
        <button type="button" className={styles.ReserveRocketButton}>Reserve Rocket</button>
      </div>
    </div>
  );
}

export default RocketStructure;
