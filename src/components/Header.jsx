import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header>
      <div className='header'>
        <div>
          <img src='./assets/shared/desktop/logo.svg' alt='' className='logo' />
        </div>
        <div onClick={toggleMenu}>
          <img
            src={
              menu
                ? './assets/shared/mobile/icon-close.svg'
                : './assets/shared/mobile/icon-hamburger.svg'
            }
            alt=''
            className='menu'
          />
        </div>
      </div>
      <div className={menu ? 'hamburgerMenu' : 'disabled'}>
        <ul>
          <li>
            <Link to='/' onClick={toggleMenu}>
              <h4>Home</h4>
            </Link>
          </li>{' '}
          <li>
            <Link to='/about-us' onClick={toggleMenu}>
              <h4>About Us</h4>
            </Link>
          </li>{' '}
          <li>
            <Link to='/plan' onClick={toggleMenu}>
              <h4>Create Your Plan</h4>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
