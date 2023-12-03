export interface FormValues {
  name: string;
  age: number | string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  acceptTerms?: boolean;
  picture?: FileList | null;
  country: string;
}
