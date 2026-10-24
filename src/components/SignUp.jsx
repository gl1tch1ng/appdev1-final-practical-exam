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

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Name</label>
              <input
                type="text"
                className={styles.input}
                placeholder="Enter your name"
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Email address</label>
              <input
                type="email"
                className={styles.input}
                placeholder="Enter your email"
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Password</label>
              <input
                type="password"
                className={styles.input}
                placeholder="Enter your password"
              />
            </div>

            <div className={styles.checkboxGroup}>
              <input type="checkbox" id="terms" className={styles.checkbox} />
              <label htmlFor="terms" className={styles.checkboxLabel}>
                I agree to the <span className={styles.underline}>terms & policy</span>
              </label>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Signup
            </button>
          </form>
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