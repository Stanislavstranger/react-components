import Button from '../../button/Button';
import { ChangeEvent, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { FormValuesSlice } from '../../../../store/reducers/FormValuesSlice';
import validationSchema from '../../../../utils/validationSchema';
import '../../../../styles/index.scss';
import { FormValues } from '../../../../models/Interface';
import { ReducersMapObject } from '@reduxjs/toolkit';

const UncontrolledForm = () => {
  const formRef = useRef(null);
  const { changeFormValues } = FormValuesSlice.actions;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState<FormValues>({} as FormValues);
  const [isValid, setIsValid] = useState<boolean>(true);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(formRef.current! as HTMLFormElement);
    const data: FormValues = {} as FormValues;

    formData.forEach((value, key) => {
      if (key === 'acceptTerms') {
        data[key] = value === 'on' ? true : false;
      } else if (key === 'picture') {
        data[key] = (formRef.current![key] as HTMLInputElement).files;
      } else if (
        key === 'name' ||
        key === 'age' ||
        key === 'email' ||
        key === 'password' ||
        key === 'confirmPassword' ||
        key === 'gender' ||
        key === 'country'
      ) {
        data[key] = value.toString() as string;
      }
    });

    try {
      await validationSchema.validate(data, { abortEarly: false });

      setIsValid(true);
      dispatch(changeFormValues(data));
      navigate('/');
    } catch (error) {
      if (
        (error as { name: string; errors: string }).name === 'ValidationError'
      ) {
        console.error(
          'Validation error:',
          (error as { name: string; errors: string }).errors
        );
        setIsValid(true);
        setErrors(
          (
            error as { name: string; errors: string; inner: ReducersMapObject }
          ).inner.reduce(
            (
              acc: Record<string, string | boolean | FileList | null>,
              curr: Record<string, string>
            ) => {
              acc[curr.path] = curr.message;
              return acc;
            },
            {}
          )
        );
      } else {
        console.error('Other error occurred:', error);
      }
    }
  };

  const { countries } = useAppSelector((state) => state.CountryReducer);
  const [filteredCountries, setFilteredCountries] = useState<string[]>([]);

  function suggestCountry(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    const filtered = countries.filter((country) =>
      country.toLowerCase().startsWith(value.toLowerCase())
    );

    setFilteredCountries(filtered);
  }

  return (
    <>
      <div className="container">
        <form ref={formRef} onSubmit={handleSubmit}>
          <h2>Fill the form</h2>
          <div className="form-list">
            <div className="form-items">
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                placeholder="Enter your name"
                autoComplete="off"
                name="name"
              />
            </div>
            {errors['name'] && <span>{errors['name']}</span>}
          </div>

          <div className="form-list">
            <div className="form-items">
              <label htmlFor="age">Age: </label>
              <input
                type="number"
                min="1"
                max="100"
                placeholder="Enter your age"
                autoComplete="off"
                name="age"
              />
            </div>
            {errors['age'] && <span>{errors['age']}</span>}
          </div>

          <div className="form-list">
            <div className="form-items">
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                placeholder="Enter your email"
                autoComplete="off"
                name="email"
              />
            </div>
            {errors['email'] && <span>{errors['email']}</span>}
          </div>

          <div className="form-list">
            <div className="form-items">
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                placeholder="Enter your password"
                autoComplete="off"
                name="password"
              />
            </div>
            {errors['password'] && <span>{errors['password']}</span>}
          </div>

          <div className="form-list">
            <div className="form-items">
              <label htmlFor="confirmPassword">Confirm password: </label>
              <input
                type="password"
                placeholder="Confirm your password"
                autoComplete="off"
                name="confirmPassword"
              />
            </div>
            {errors['confirmPassword'] && (
              <span>{errors['confirmPassword']}</span>
            )}
          </div>

          <div className="form-list">
            <div className="form-items">
              <label htmlFor="gender">Gender: </label>
              <select defaultValue="" name="gender">
                <option disabled value="">
                  Choise gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            {errors['gender'] && <span>{errors['gender']}</span>}
          </div>

          <div className="form-list">
            <div className="form-items">
              <label htmlFor="acceptTerms">Accept Terms: </label>
              <input type="checkbox" name="acceptTerms" />
            </div>
            {errors['acceptTerms'] && <span>{errors['acceptTerms']}</span>}
          </div>

          <div className="form-list">
            <div className="form-items">
              <label htmlFor="picture">Picture: </label>
              <input type="file" accept=".jpg, .jpeg, .png" name="picture" />
            </div>
            {errors['picture'] && <span>{String(errors['picture'])}</span>}
          </div>

          <div className="form-list">
            <div className="form-items">
              <label htmlFor="country">Country: </label>
              <input
                list="countryList"
                placeholder="Enter your country"
                onChange={suggestCountry}
                autoComplete="off"
                name="country"
              />
              <datalist id="countryList">
                {filteredCountries.map((country) => (
                  <option key={country} value={country} />
                ))}
              </datalist>
            </div>
            {errors['country'] && <span>{errors['country']}</span>}
          </div>

          <Button type="submit" disabled={!isValid}>
            Submit
          </Button>
        </form>
      </div>
      <p className="alarm">
        ⚠ Кнопка здесь не заблокирована! так как неконтролируемая форма должна
        проверять данные только после нажатия кнопки.<br></br> И в тоже время
        она не должна быть разблокирована пока данные не проверены.😖 Это
        противоречащие друг другу нереализуемые требования. ⚠
      </p>
    </>
  );
};

export default UncontrolledForm;
