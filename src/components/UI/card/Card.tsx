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
      {formData && (
        <div className={classes.card}>
          <div className={classes.card_text}>
            <h2>{formData.name}</h2>
            <p>{formData.age}</p>
            <p>{formData.email}</p>
            <p>{formData.gender}</p>
            <p>{String(formData.acceptTerms)}</p>
            <p>{formData.country}</p>
          </div>
          {imageUrl && (
            <img src={imageUrl} alt="Uploaded" style={{ width: '300px' }} />
          )}
        </div>
      )}
    </>
  );
};

export default Card;
