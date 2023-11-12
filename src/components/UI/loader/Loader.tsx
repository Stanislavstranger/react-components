import classes from './Loader.module.css';
import imgShip from '../../../assets/ship.png';

const Loader = () => {
  return (
    <div className={classes.ship_container}>
      <img className={classes.ship} src={imgShip}></img>
    </div>
  );
};

export default Loader;
