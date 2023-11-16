import { useEffect, useState } from 'react';
import { Animals } from '../../../models';
import CardList from '../cardList/CardList';
import Loader from '../loader/Loader';
import Notification from '../notification/Notification';
import CardDetails from '../cardDetails/CardDetails';
import classes from './ResultSection.module.css';
import Modal from '../modal/Modal';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { itemsSlice } from '../../../store/reducers/ItemsSlice';
import { loadingSlice } from '../../../store/reducers/LoadingSlice';
import { animalsAPI } from '../../../services/AnimalsService';

interface ResultSectionProps {
  error: Error | null;
  searched: boolean;
  selectedPage: number;
}

const ResultSection: React.FC<ResultSectionProps> = ({
  error,
  searched,
  selectedPage,
}) => {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const { animals, selectedAnimal } = useAppSelector(
    (state) => state.itemsReducer
  );
  const { changeItem } = itemsSlice.actions;
  const { loading } = useAppSelector((state) => state.loadingReducer);
  const { changeLoading } = loadingSlice.actions;
  const dispatch = useAppDispatch();
  const [searchAnimalsByName] = animalsAPI.useSearchAnimalsByNameMutation();

  useEffect(() => {
    if (!modal) {
      navigate(`./animals?page=${selectedPage + 1}`);
    }
  }, [modal, navigate, selectedPage]);

  const handleCardClick = async (animal: Animals) => {
    dispatch(changeLoading(true));
    try {
      /* const data = await searchAnimalsByName(animal.name); */
      let animalsData;
      searchAnimalsByName({ term: animal.name })
        .unwrap()
        .then((data) => {
          animalsData = data;
          dispatch(changeItem(animalsData.animals[0]));
        })
        .catch(() => {
          throw Error;
        });
      navigate(`./animals?page=${selectedPage + 1}&details=${animal.uid}`);
      setModal(true);
    } catch (error) {
      throw Error;
    } finally {
      dispatch(changeLoading(false));
    }
  };

  return (
    <div className={classes.bottom_section}>
      {loading && searched && <Loader data-testid="loader" />}
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
