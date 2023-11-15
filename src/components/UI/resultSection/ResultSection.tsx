import { useEffect, useState } from 'react';
import { Animals } from '../../../models';
import CardList from '../cardList/CardList';
import Loader from '../loader/Loader';
import Notification from '../notification/Notification';
import CardDetails from '../cardDetails/CardDetails';
import classes from './ResultSection.module.css';
import Modal from '../modal/Modal';
import { searchAnimalsByName } from '../../../services/LoadingDataService';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { itemsSlice } from '../../../store/reducers/ItemsSlice';

interface ResultSectionProps {
  loading: boolean;
  error: Error | null;
  searched: boolean;
  selectedPage: number;
}

const ResultSection: React.FC<ResultSectionProps> = ({
  loading,
  error,
  searched,
  selectedPage,
}) => {
  const [modal, setModal] = useState(false);
  const [loadings, setLoadings] = useState(false);
  const navigate = useNavigate();
  const { animals, selectedAnimal } = useAppSelector((state) => state.itemsReducer);
  const { changeItem } = itemsSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!modal) {
      navigate(`./animals?page=${selectedPage + 1}`);
    }
  }, [modal, navigate, selectedPage]);

  const handleCardClick = async (animal: Animals) => {
    setLoadings(true);
    try {
      const data = await searchAnimalsByName(animal.name);
      dispatch(changeItem(data.animals[0]))
      navigate(`./animals?page=${selectedPage + 1}&details=${animal.uid}`);
      setModal(true);
    } catch (error) {
      throw Error;
    } finally {
      setLoadings(false);
    }
  };

  return (
    <div className={classes.bottom_section}>
      {loading && searched && <Loader data-testid="loader" />}
      {loadings && searched && <Loader />}
      {error && <Notification>Error: {error.message}</Notification>}
      {animals.length === 0 && !loading && !error && searched && (
        <Notification>Nothing found</Notification>
      )}
      <div className={classes.card_container}>
        <div className={classes.card_titles}>
          <CardList onCardClick={handleCardClick} />
        </div>

        <div className={classes.card_description}>
          <Modal visible={modal} setVisible={setModal}>
            {selectedAnimal && <CardDetails />}
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ResultSection;
