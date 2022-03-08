import { useState } from 'react';

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
            <h4>Home</h4>
          </li>{' '}
          <li>
            <h4>About Us</h4>
          </li>{' '}
          <li>
            <h4>Create Your Plan</h4>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
