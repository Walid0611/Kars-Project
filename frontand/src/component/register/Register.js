import React, { useState } from 'react';
import './register.css';
import { useNavigate } from 'react-router-dom';
import { postAuthUser } from '../../api/authapi';

const Register = () => {
  const [UserName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const login = async (value) => {
    try {
      await postAuthUser(value);
      navigate('/login');
    } catch (err) {
      console.log('register', Register);
    }
  };

  return (
    <div>
      <form className="form">
        <p className="title">Register</p>
        <p className="message">Signup now and get full access to our app.</p>
        <div className="flex">
          <label>
            <input
              required=""
              placeholder="UserName"
              type="text"
              className="input"
              value={UserName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <span>name</span>
          </label>
        </div>
        <label>
          <input
            required=""
            placeholder="email"
            type="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>Email</span>
        </label>
        <label>
          <input
            required=""
            placeholder="password"
            type="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>Password</span>
        </label>

        <button
          className="btn"
          type="button"
          onClick={() => login({ UserName, email, password })}
        >
          Submit
        </button>

        <p className="sign-in">
          Already have an account? <a href="Sign">Sign in</a>{" "}
        </p>
      </form>
    </div>
  );
};

export default Register;
