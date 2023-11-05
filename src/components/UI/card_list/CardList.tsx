import { Animals } from '../../../models';
import Card from '../card/Card';

interface CardListProps {
  props: Animals[];
  onCardClick: (animal: Animals) => void;
}

const CardList: React.FC<CardListProps> = ({ props, onCardClick }) => {
  return props.map((result) => (
    <Card animal={result} key={result.uid} onCardClick={onCardClick}></Card>
  ));
};

export default CardList;
