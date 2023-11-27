import { FC, PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import classes from '../../components/UI/cardDetails/CardDetails.module.css';
import { Animals } from '../../models';
import { GetServerSideProps } from 'next';

const AnimalDetails: FC<PropsWithChildren<{ animal: Animals }>> = (
  animal,
) => {
  const router = useRouter();
  const { animalId } = router.query;
  console.log(animal);

  return (
    <div className="card-details">
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
  console.log(params);

  const { animalId } = params;
  const BASE_URL = 'https://stapi.co/api/v1/rest/animal/search';
  console.log(animalId);
  const response = await fetch(`${BASE_URL}?name=${animalId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  const animalsData = await response.json();
  const animal = animalsData.animals[0];
  console.log(animal)

  return {
    props: animal,
  };
};
