import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../../components/UI/button/Button';
import validationSchema from '../../utils/validationSchema';
import { ChangeEvent } from 'react';
import { FormValues } from '../../models/Interface';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { FormValuesSlice } from '../../store/reducers/FormValuesSlice';

const ControlledPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setValue(name as keyof FormValues, value);
    trigger(name as keyof FormValues);
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setValue(name as keyof FormValues, checked === true);
    trigger(name as keyof FormValues);
  };

  const { changeFormValues } = FormValuesSlice.actions;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(changeFormValues(data));
    navigate('/');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Fill the form</h2>
        <div className="form-list">
          <div className="form-items">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register('name')}
              onChange={handleInputChange}
            />
          </div>
          {errors.name && <span>{errors.name.message}</span>}
        </div>

        <div className="form-list">
          <div className="form-items">
            <label htmlFor="age">Age: </label>
            <input
              type="number"
              min="1"
              max="100"
              placeholder="Enter your age"
              {...register('age')}
              onChange={handleInputChange}
            />
          </div>
          {errors.age && <span>{errors.age.message}</span>}
        </div>

        <div className="form-list">
          <div className="form-items">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register('email')}
              onChange={handleInputChange}
            />
          </div>
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div className="form-list">
          <div className="form-items">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              placeholder="Enter your password"
              {...register('password')}
              onChange={handleInputChange}
            />
          </div>
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <div className="form-list">
          <div className="form-items">
            <label htmlFor="confirmPassword">Confirm password: </label>
            <input
              type="password"
              placeholder="Confirm your password"
              {...register('confirmPassword')}
              onChange={handleInputChange}
            />
          </div>
          {errors.confirmPassword && (
            <span>{errors.confirmPassword.message}</span>
          )}
        </div>

        <div className="form-list">
          <div className="form-items">
            <label htmlFor="gender">Gender: </label>
            <select
              {...register('gender')}
              onChange={handleInputChange}
              defaultValue=""
            >
              <option disabled value="">
                Choise gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          {errors.gender && <span>{errors.gender.message}</span>}
        </div>

        <div className="form-list">
          <div className="form-items">
            <label htmlFor="acceptTerms">Accept Terms: </label>
            <input
              type="checkbox"
              {...register('acceptTerms')}
              onChange={handleCheckboxChange}
            />
          </div>
          {errors.acceptTerms && <span>{errors.acceptTerms.message}</span>}
        </div>

        <div className="form-list">
          <div className="form-items">
            <label htmlFor="picture">Picture: </label>
            <input
              type="file"
              accept=".jpg, .jpeg, .png"
              {...register('picture')}
            />
          </div>
          {errors.picture && <span>{errors.picture.message}</span>}
        </div>

        <div className="form-list">
          <div className="form-items">
            <label htmlFor="country">Country: </label>
            <input
              placeholder="Enter your country"
              {...register('country')}
              onChange={handleInputChange}
            />
          </div>
          {errors.country && <span>{errors.country.message}</span>}
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default ControlledPage;
