import React from 'react';
import classes from './Card.module.css';
import { Animals } from '../../../models';
import { itemsSlice } from '../../../store/reducers/ItemsSlice';
import { useAppDispatch } from '../../../hooks/redux';

interface CardProps {
  animal: Animals;
  onCardClick: (animal: Animals) => void;
}

const Card: React.FC<CardProps> = ({ animal, onCardClick }) => {
  const { changeItem } = itemsSlice.actions;
  const dispatch = useAppDispatch();
  const handleClick = () => {
    onCardClick(animal);
    dispatch(changeItem(animal));
  };

  return (
    <div
      className={classes.card}
      key={animal.uid}
      onClick={handleClick}
      data-testid="card-element"
    >
      <h3 className={classes.title}>{animal.name}</h3>
    </div>
  );
};

export default Card;
