import { FC, PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import classes from '../../components/UI/cardDetails/CardDetails.module.css';
import { Animals } from '../../models';
import { GetServerSideProps } from 'next';
import Button from '../../components/UI/button/Button';

const AnimalDetails: FC<PropsWithChildren<{ animal: Animals }>> = (animal) => {
  const router = useRouter();
  const { animalId } = router.query;

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className={classes.card_details}>
      <h3 className={classes.title}>{animalId}</h3>
      {
        <div className={classes.description}>
          {Object.entries(animal).map(([key, value]) => (
            <p key={key}>
              <span>{key}:</span> {value!.toString()}
            </p>
          ))}
        </div>
      }
      <Button onClick={goBack}>Go back</Button>
    </div>
  );
};

export default AnimalDetails;

export const getServerSideProps: GetServerSideProps<{
  animal: Animals;
}> = async ({ params }) => {
  if (!params || !params.animalId) {
    return {
      notFound: true,
    };
  }

  const { animalId } = params;
  const BASE_URL = 'https://stapi.co/api/v1/rest/animal/search';
  const response = await fetch(`${BASE_URL}?name=${animalId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  const animalsData = await response.json();
  const animal = animalsData.animals[0];

  return {
    props: animal,
  };
};
