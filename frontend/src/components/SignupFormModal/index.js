// frontend/src/components/SignupFormPage/index.js

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [emptyField, setEmptyField] = useState('true');
  const { closeModal } = useModal();


  useEffect(() => {

    if (email.length === 0 ||
      username.length < 4 ||
      firstName.length === 0 ||
      lastName.length === 0 ||
      password.length < 6 ||
      confirmPassword !== password) {

      setEmptyField(true);

    } else setEmptyField(false);

  }, [email, username, firstName, lastName, password, confirmPassword])


  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = {};
    if (password === confirmPassword) {
      setErrors({});
      return dispatch(sessionActions.signup({ email, username, firstName, lastName, password }))
        .then(closeModal)
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    validationError.password = "PASSWORDS DID NOT MACTH"
    return setErrors(validationError);
  };

  //console.log(errors)

  return (
    <>
      {/* <div className="fixed top-0 bottom-0 left-0 right-0" onClick={closeModal}>
      </div> */}
      <span className="flex justify-end">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hover:bg-black rounded-lg hover:text-white cursor-pointer" onClick={closeModal}>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </span>
      <div className="signup-form-container">
        <i className="login-logo-left fa-solid fa-brands fa-airbnb"></i>
        <i className="fa-solid login-logo-text"><h2>SIGN-UP</h2></i>
        <i className="login-logo-right fa-solid fa-brands fa-airbnb"></i>
        {/* <h1 className="signup-title">Sign Up</h1> */}
        <form onSubmit={handleSubmit}>
          {/* <ul className="signup-input">
          {errors.map((error, idx) => <div key={idx} className='signup-errors'>{error}</div>)}
        </ul> */}
          <div className="signup-input">
            <label>
              Email
            </label>
            <div>
              <input
                className="signup-input-box"
                type="text"
                value={email}
                placeholder="required"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="signup-errors">{errors.email}</div>
            </div>
          </div>
          <div className="signup-input">
            <label>
              Username
            </label>
            <div>
              <input
                className="signup-input-box"
                type="text"
                value={username}
                placeholder="must be at least 4 characters"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <div className="signup-errors">{errors.username}</div>
            </div>
          </div>
          <div className="signup-input">
            <label>
              First Name
            </label>
            <div>
              <input
                className="signup-input-box"
                type="text"
                value={firstName}
                placeholder="required"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="signup-input">
            <label>
              Last Name
            </label>
            <div>
              <input
                className="signup-input-box"
                type="text"
                value={lastName}
                placeholder="required"
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="signup-input">
            <label>
              Password
            </label>
            <div>
              <input
                className="signup-input-box"
                type="password"
                value={password}
                placeholder="must be at least 6 characters"
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <div className="signup-errors">{errors.password}</div>
            </div>
          </div>
          <div className="signup-input">
            <label>
              Confirm Password
            </label>
            <div>
              <input
                className="signup-input-box"
                type="password"
                value={confirmPassword}
                placeholder="must match password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {password !== confirmPassword && <div className="signup-errors">DOES NOT MATCH PASSWORD</div>}
              <div className="signup-errors">{errors.password}</div>
            </div>
          </div>
          <div className="signup-button-container">
            <button
              type="submit"
              className={emptyField ? "signup-disabled" : "signup-submit-button"}
              disabled={Boolean(emptyField)}
            >
              SIGN UP
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignupFormModal;
