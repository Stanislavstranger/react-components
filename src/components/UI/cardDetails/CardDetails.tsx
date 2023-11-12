import classes from './CardDetails.module.css';
import { useSearch } from '../../../context/SearchContext';

const CardDetails = () => {
  const { selectedAnimal } = useSearch();
  return (
    <div className="card-details">
      <h3 className={classes.title}>{selectedAnimal.name}</h3>
      <div className={classes.description}>
        {Object.entries(selectedAnimal).map(([key, value]) => (
          <p key={key}>
            <span>{key}:</span> {value.toString()}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CardDetails;
