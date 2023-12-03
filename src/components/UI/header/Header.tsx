import ToggleTheme from '../toggleTheme/ToggleTheme';
import { Link, useLocation } from 'react-router-dom';
import classes from './Header.module.scss';
import '../../../styles/index.scss';

const Header = () => {
  const location = useLocation();

  return (
    <header className={classes.header}>
      <nav className="container">
        <ul className={classes.list}>
          <li>
            <Link
              className={location.pathname === '/' ? classes.active : ''}
              to={'/'}
            >
              Main page
            </Link>
          </li>
          <li>
            <Link
              className={
                location.pathname === '/uncontrolled-page' ? classes.active : ''
              }
              to={'/uncontrolled-page'}
            >
              Uncontrolled form
            </Link>
          </li>
          <li>
            <Link
              className={
                location.pathname === '/controlled-page' ? classes.active : ''
              }
              to={'/controlled-page'}
            >
              Controlled form
            </Link>
          </li>
          <li>
            <ToggleTheme />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
