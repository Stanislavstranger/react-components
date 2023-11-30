import { Theme } from '../../../theme/ThemeContext';
import useTheme from '../../../theme/useTheme';
import { IconTheme } from './IconTheme';
import classes from './ToggleTheme.module.scss';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={classes.toggleTheme} onClick={toggleTheme}>
      {theme === Theme.LiGHT ? IconTheme.DARK : IconTheme.LIGTH}
    </button>
  );
};

export default ToggleTheme;
