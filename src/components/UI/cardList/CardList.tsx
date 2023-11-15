import { useAppSelector } from '../../../hooks/redux';
import { Animals } from '../../../models';
import Card from '../card/Card';

interface CardListProps {
  onCardClick: (animal: Animals) => void;
}

const CardList: React.FC<CardListProps> = ({ onCardClick }) => {
  const { animals } = useAppSelector((state) => state.itemsReducer);

  if (animals.length === 0) {
    return <div>No cards found.</div>;
  }

  return animals.map((result) => (
    <Card animal={result} key={result.uid} onCardClick={onCardClick}></Card>
  ));
};

export default CardList;
