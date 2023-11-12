import { useSearch } from '../../../context/SearchContext';
import { Animals } from '../../../models';
import Card from '../card/Card';

interface CardListProps {
  onCardClick: (animal: Animals) => void;
}

const CardList: React.FC<CardListProps> = ({ onCardClick }) => {
  const { animals } = useSearch();

  if (animals.length === 0) {
    return <div>No cards found.</div>;
  }

  return animals.map((result) => (
    <Card animal={result} key={result.uid} onCardClick={onCardClick}></Card>
  ));
};

export default CardList;
