import React from 'react';
import styles from './SignUp.module.css';
import blossomImage from '../assets/blossom-flower.svg';

const SignUp = () => {
  return (
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>Get Started Now</h1>
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.rightSection}>
        <img
          src={blossomImage}
          alt="Blossom Flower"
          className={styles.blossomImage}
        />
      </div>
    </div>
  );
};

export default SignUp;