import classes from './Loader.module.css';
import Image from 'next/image';

const Loader = () => {
  return (
    <div className={classes.ship_container}>
      <Image
        priority={true}
        className={classes.ship}
        src="/ship.png"
        alt="loading_ship"
        width={100}
        height={100}
      />
    </div>
  );
};

export default Loader;
