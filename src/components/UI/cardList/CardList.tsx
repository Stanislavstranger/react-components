import { FC, PropsWithChildren } from 'react';
import { useAppSelector } from '../../../hooks/redux';
import { Animals } from '../../../models';
import Card from '../card/Card';
import NotFound from '../pageNotFound/PageNotFound';

const CardList: FC<PropsWithChildren<{ animals: Animals[] }>> = ({ animals }) => {
  const { loading } = useAppSelector((state) => state.loadingReducer);

  if (animals.length === 0 && !loading) {
    return <NotFound />;
  }

  return animals.map((result) => (
    <Card animal={result} key={result.uid}></Card>
  ));
};

export default CardList;
