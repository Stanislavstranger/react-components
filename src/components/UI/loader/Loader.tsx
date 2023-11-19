import classes from './Loader.module.css';
import imgShip from '../../../assets/ship.png';

const Loader = () => {
  return (
    <div className={classes.ship_container}>
      <img className={classes.ship} src={imgShip} alt="loading_ship"></img>
    </div>
  );
};

export default Loader;
