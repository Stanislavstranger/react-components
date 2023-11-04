import { Animals } from '../../../models';
import Card from '../card/Card';

interface CardListProps {
  props: Animals[];
}

const CardList: React.FC<CardListProps> = ({ props }) => {
  return props.map((result) => <Card result={result} key={result.uid}></Card>);
};

export default CardList;
