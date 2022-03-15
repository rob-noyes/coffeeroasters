import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer>
      <img src='./assets/shared/desktop/logo-white.svg' alt='' />
      <ul>
        <li>
          <Link to='/'>
            <p>HOME</p>
          </Link>
        </li>
        <li>
          <Link to='/about-us'>
            <p>ABOUT US</p>
          </Link>
        </li>
        <li>
          <Link to='/subscribe'>
            <p>CREATE YOUR PLAN</p>
          </Link>
        </li>
      </ul>
      <div>
        <img src='./assets/shared/desktop/icon-facebook.svg' alt='' />
        <img src='./assets/shared/desktop/icon-twitter.svg' alt='' />
        <img src='./assets/shared/desktop/icon-instagram.svg' alt='' />
      </div>
    </footer>
  );
};
