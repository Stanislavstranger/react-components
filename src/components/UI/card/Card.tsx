import React from 'react';
import classes from './Card.module.css';
import { Animals } from '../../../models';

interface CardProps {
  result: Animals;
}

const Card: React.FC<CardProps> = ({ result }) => {
  return (
    <div className={classes.card} key={result.uid}>
      <h3 className={classes.title}>{result.name}</h3>
      <div className={classes.description}>
        {Object.entries(result).map(([key, value]) => (
          <p key={key}>
            <span>{key}:</span> {value.toString()}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Card;
