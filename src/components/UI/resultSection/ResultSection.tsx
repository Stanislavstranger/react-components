import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { Animals } from '../../../models';
import CardList from '../cardList/CardList';
import Loader from '../loader/Loader';
import Notification from '../notification/Notification';
import CardDetails from '../cardDetails/CardDetails';
import classes from './ResultSection.module.css';
import Modal from '../modal/Modal';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { itemsSlice } from '../../../store/reducers/ItemsSlice';
import { loadingSlice } from '../../../store/reducers/LoadingSlice';
import { animalsAPI } from '../../../services/AnimalsService';

const ResultSection: FC<PropsWithChildren<{ animals: Animals }>> = ({
  animals,
}) => {
  const [modal, setModal] = useState(false);
  const { selectedAnimal } = useAppSelector((state) => state.itemsReducer);
  const { changeItem } = itemsSlice.actions;
  const { loading } = useAppSelector((state) => state.loadingReducer);
  const { changeLoading } = loadingSlice.actions;
  const dispatch = useAppDispatch();
  const [searchAnimalsByName, { isLoading: searchLoading }] =
    animalsAPI.useSearchAnimalsByNameMutation();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modal]);

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
      setModal(true);
    } catch (error) {
      throw Error;
    }
  };

  return (
    <div className={classes.bottom_section}>
      {loading && <Loader data-testid="loader" />}
      {/* {error && <Notification>Error: {error.message}</Notification>} */}
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
