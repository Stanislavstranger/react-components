import img from '../../assets/404-Page-Featured-Image.png';
import Button from '../../components/UI/button/Button';
import classes from './PageNotFound.module.scss';

const PageNotFound = () => {
  const goBack = () => window.history.back();

  return (
    <div className={classes.container}>
      <img className={classes.img} src={img} alt="Page not found" />
      <Button onClick={goBack}>Go back </Button>
    </div>
  );
};

export default PageNotFound;
