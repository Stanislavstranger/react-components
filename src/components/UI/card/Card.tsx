import classes from './Card.module.scss';
import { useAppSelector } from '../../../hooks/redux';

const Card = () => {
  let imageUrl = '';
  const { formData } = useAppSelector((state) => state.FormValuesReducer);

  if (formData) {
    const imageFile = formData.picture ? formData.picture[0] : null;

    if (imageFile) {
      imageUrl = URL.createObjectURL(imageFile);
    }
  }

  return (
    <>
      <div className={classes.card}>
        <h2>Data received from a controlled form</h2>
        {formData && Object.keys(formData).length > 0 ? (
          <>
            <div className={classes.card_text}>
              <h3>{formData.name}</h3>
              <p>{formData.age}</p>
              <p>{formData.email}</p>
              <p>{formData.gender}</p>
              <p>{String(formData.acceptTerms)}</p>
              <p>{formData.country}</p>
            </div>
            {imageUrl && (
              <img src={imageUrl} alt="Uploaded" style={{ width: '300px' }} />
            )}
          </>
        ) : (
          <div className={classes.card_text}>
            <div>Not all data filled. Please fill in the form</div>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
