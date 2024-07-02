import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './index.css';
import InputField from '../MyInputField';
import FbDark from '../../assets/FacebookDark.svg';
import TwDark from '../../assets/TumblrDark.svg';
import GoogleDark from '../../assets/GoogleDark.svg';
import Line from '../../assets/Line.svg';
import FbLight from '../../assets/FacebookLight.svg';
import TwLight from '../../assets/TwLight.svg';
import GoogleLight from '../../assets/GoogleLight.svg';
import { isDarkModeOn } from '../../pages/catalog';

function MyLogin() {
  
    const navigate = useNavigate();
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    const loginBox = document.querySelector('.login-box');
    const socialLoginButtons = document.querySelectorAll('.login-box .social-login button');
      
    useEffect(() => {
          if (loginBox) {
            if (!isDarkMode) {
              loginBox.classList.add('light-mode');
              socialLoginButtons.forEach(button => {
                button.classList.add('light-mode');
              });
            } else {
              loginBox.classList.remove('light-mode');
              socialLoginButtons.forEach(button => {
                button.classList.remove('light-mode');
              });
            }
          }
        }, []);
        
    const handleLogIn = () => {
      navigate('/catalog');
    }

    return (
        <div className="login-container">
        <div className="login-box">
            <h2>Welcome! Log in or register</h2>
            <p>Log in to find the games you're looking for!</p>
            <form>
            <InputField type="email" placeholder="Email" required />
            <InputField type="password" placeholder="Password" required />
            <div className="remember-forgot">
                <label>
                <input type="checkbox" /> Remember me
                </label>
                <a className="generic-color" href="/">Forgot password?</a>
            </div>
            <button type="submit" onClick={handleLogIn}>Log in</button>
            </form>
            <p>Not registered yet? <a className="generic-color" href="/">Register now</a></p>
            <div className="divider">
                <img src={Line} className="line" alt="Line" />
                <p className="or">or</p>
                <img src={Line} className="line" alt="Line" />
            </div>
            <div className="social-login">
            <button className="facebook"> <img src={isDarkModeOn() ? FbDark : FbLight} className="icon" alt="Facebook" /> Login with Facebook</button>
            <button className="twitter"> <img src={isDarkModeOn() ? TwDark : TwLight} className="icon" alt="Twitter" /> Login with Twitter</button>
            <button className="google"> <img src={isDarkModeOn() ? GoogleDark : GoogleLight} className="icon" alt="Google" /> Login with Google</button>
            </div>
        </div>
        </div>
    );
    }

    export default MyLogin;
