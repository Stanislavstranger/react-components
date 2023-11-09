import React from 'react';
import classes from './Card.module.css';
import { Animals } from '../../../models';
import { useSearch } from '../../../context/SearchContext';

interface CardProps {
  animal: Animals;
  onCardClick: (animal: Animals) => void;
}

const Card: React.FC<CardProps> = ({ animal, onCardClick }) => {
  const { setSelectedAnimal } = useSearch();
  const handleClick = () => {
    onCardClick(animal);
    setSelectedAnimal(animal);
  };

  return (
    <div className={classes.card} key={animal.uid} onClick={handleClick}>
      <h3 className={classes.title}>{animal.name}</h3>
    </div>
  );
};

export default Card;
