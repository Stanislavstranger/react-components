export interface DataForm {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: 'male' | 'female';
  acceptTC: boolean;
  picture: string;
  country: string;
}