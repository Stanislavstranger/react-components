import ToggleTheme from '../toggleTheme/ToggleTheme';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';
import '../../../styles/index.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <nav className="container">
        <ul className={classes.list}>
          <li>
            <Link to={'/'}>Main page</Link>
          </li>
          <li>
            <Link to={'/uncontrolled-page'}>Uncontrolled form</Link>
          </li>
          <li>
            <Link to={'/controlled-page'}>Controlled form</Link>
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
