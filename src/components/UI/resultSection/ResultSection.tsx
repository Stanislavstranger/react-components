import { Animals } from '../../../models';
import CardList from '../card_list/CardList';
import Loader from '../loader/Loader';
import Notification from '../notification/Notification';

interface ResultSectionProps {
  loading: boolean;
  error: Error | null;
  animals: Animals[];
  searched: boolean;
}

const ResultSection: React.FC<ResultSectionProps> = ({
  loading,
  error,
  animals,
  searched,
}) => {
  return (
    <div className="bottom-section">
      {loading && searched && <Loader />}
      {error && <Notification>Error: {error.message}</Notification>}
      {animals.length === 0 && !loading && !error && searched && (
        <Notification>Nothing found</Notification>
      )}
      <CardList props={animals}></CardList>
    </div>
  );
};

export default ResultSection;
