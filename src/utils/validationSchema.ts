import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[А-ЯЁA-Z][а-яёА-ЯЁa-zA-Z]*$/,
      'First letter should be uppercase. Enter name only '
    )
    .required('Name is required'),
  age: Yup.number()
    .positive('Age should be a positive number')
    .integer('Age should be an integer')
    .max(100, 'Age should be less than or equal to 100')
    .required('Age is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/,
      'Password must contain at least one number, one uppercase letter, one lowercase letter, and one special character'
    )
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), ''], 'Passwords must match')
    .required('Please confirm your password'),
  gender: Yup.string().required('Gender is required'),
  acceptTerms: Yup.bool().oneOf(
    [true],
    'Accept Terms & Conditions is required'
  ),
  picture: Yup.mixed().test(
    'fileFormat',
    'Unsupported file format',
    (value) => {
      if (!value || !value[0]) {
        return false;
      }

      const acceptedFormats = ['image/png', 'image/jpeg'];
      const file = value[0];
      return acceptedFormats.includes(file.type);
    }
  ),
  country: Yup.string().required('Country is required'),
});

export default validationSchema;
