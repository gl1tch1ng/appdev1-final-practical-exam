import React from 'react';
import styles from './Login.module.css';
import blossomImage from '../assets/blossom-flower.svg';
import googleIcon from '../assets/icons-google-logo.svg';
import appleIcon from '../assets/icons-apple-logo.svg';

const Login = () => {
  return (
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>Welcome back!</h1>
          <p className={styles.subtitle}>
            Enter your Credentials to access your account
          </p>

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

          {/* Divider */}
          <div className={styles.dividerContainer}>
            <div className={styles.dividerLine}></div>
            <span className={styles.dividerText}>Or</span>
            <div className={styles.dividerLine}></div>
          </div>

          {/* Social Sign In Buttons */}
          <div className={styles.socialContainer}>
            <button type="button" className={styles.socialBtn}>
              <img src={googleIcon} alt="Google" className={styles.socialIcon} />
              <span>Sign in with Google</span>
            </button>
            <button type="button" className={styles.socialBtn}>
              <img src={appleIcon} alt="Apple" className={styles.socialIcon} />
              <span>Sign in with Apple</span>
            </button>
          </div>

          {/* Bottom Link Text */}
          <div className={styles.bottomTextContainer}>
            <p className={styles.bottomText}>
              Have an account? <span className={styles.signInLink}>Sign In</span>
            </p>
          </div>
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

export default Login;