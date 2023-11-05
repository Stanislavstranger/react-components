import React from 'react';
import { Animals } from '../../../models';
import classes from './CardDetails.module.css';

interface CardDetailsProps {
  animal: Animals;
}

const CardDetails: React.FC<CardDetailsProps> = ({ animal }) => {
  return (
    <div className="card-details">
      <h3 className={classes.title}>{animal.name}</h3>
      <div className={classes.description}>
        {Object.entries(animal).map(([key, value]) => (
          <p key={key}>
            <span>{key}:</span> {value.toString()}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CardDetails;
