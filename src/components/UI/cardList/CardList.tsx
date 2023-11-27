import { FC, PropsWithChildren } from 'react';
import { Animals } from '../../../models';
import Card from '../card/Card';
import NotFound from '../pageNotFound/PageNotFound';
import { useRouter } from 'next/router';

const CardList: FC<PropsWithChildren<{ animals: Animals[] }>> = ({
  animals,
}) => {
  const router = useRouter();

  const handleCardClick = (animalId: string) => {
    router.push(`/animal/${animalId}`);
  };

  if (animals.length === 0) {
    return <NotFound />;
  }

  return animals.map((result) => (
      <Card
        animal={result}
        key={result.uid}
        onClick={() => handleCardClick(result.name)}
      ></Card>
  ));
};

export default CardList;
