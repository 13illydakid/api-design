// frontend/src/components/LoginFormModal/index.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [emptyField, setEmptyField] = useState('true');

  const { closeModal } = useModal();

  useEffect(() => {

    if (password.length < 6 || credential.length < 4) {

      setEmptyField(true);

    } else setEmptyField(false);

  }, [credential, password])


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .then(closeModal)
      .catch(
        async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        }
      );
  };

  const demoUserLogin = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.login({ credential: 'Demo-lition', password: 'password' }))
      .then(closeModal)
  }

  const exitLogin = (e) => {
    e.preventDefault();
    closeModal();
  }

  return (
    <>
      <span className="flex justify-end">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hover:bg-black rounded-lg hover:text-white cursor-pointer" onClick={exitLogin}>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </span>
      <div className="login-form-container">
        <i className="login-logo-left fa-solid fa-brands fa-airbnb"></i>
        <i className="fa-solid login-logo-text"><h2>LOGIN</h2></i>
        <i className="login-logo-right fa-solid fa-brands fa-airbnb"></i>
        {/* <h1 className="login-title">Log In</h1> */}
        <form onSubmit={handleSubmit}>
          <div className={errors.loginError ? "login-error-message" : "no-class-name"}>
            {errors.loginError}
          </div>
          <div className="login-input">
            <label>
              Username or Email
            </label>
            <div>
              <input
                className="input-box"
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
              />
              <div className="login-errors">{errors.username}</div>
            </div>
          </div>
          <div className="login-input">
            <label>
              Password
            </label>
            <div>
              <input
                className="input-box"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="login-errors">{errors.password}</div>
            </div>
          </div>
          <div className="login-button-container">
            <button
              type="submit"
              // className={emptyField ? "login-disabled" : "login-submit-button"}
              className={emptyField ? "hover:cursor-not-allowed" : "hover:text-black"}
              disabled={Boolean(emptyField)}
            >
              Continue
            </button>
          </div>
            <div className="demo-button-container">
              <Link to='/' onClick={demoUserLogin} className='demo-user-login'>Log in as Demo User</Link>
            </div>
        </form>
      </div>
    </>

  );
}

export default LoginFormModal;
