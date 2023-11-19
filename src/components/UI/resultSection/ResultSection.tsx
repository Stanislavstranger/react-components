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
import { loadingSlice } from '../../../store/reducers/loadingSlice';
import { animalsAPI } from '../../../services/AnimalsService';

interface ResultSectionProps {
  error: Error | null;
  searched: boolean;
  selectedPage: number;
}

const ResultSection: React.FC<ResultSectionProps> = ({
  error,
  selectedPage,
}) => {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const { selectedAnimal } = useAppSelector(
    (state) => state.itemsReducer
  );
  const { changeItem } = itemsSlice.actions;
  const { loading } = useAppSelector((state) => state.loadingReducer);
  const { changeLoading } = loadingSlice.actions;
  const dispatch = useAppDispatch();
  const [searchAnimalsByName, { isLoading: searchLoading }] =
    animalsAPI.useSearchAnimalsByNameMutation();

  useEffect(() => {
    if (!modal) {
      navigate(`./animals?page=${selectedPage + 1}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modal, navigate]);

  useEffect(() => {
    dispatch(changeLoading(searchLoading));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, searchLoading]);

  const handleCardClick = async (animal: Animals) => {
    try {
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
      {loading && <Loader data-testid="loader" />}
      {error && <Notification>Error: {error.message}</Notification>}
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
