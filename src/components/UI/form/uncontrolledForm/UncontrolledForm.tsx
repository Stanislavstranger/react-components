import { useEffect, useRef } from 'react';
import Button from '../../button/Button';
import Input from '../../input/Input';

const UncontrolledForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  function handleSubmit() {
    if (inputRef.current) {
      alert(`Name: ${inputRef.current.value}`);
    }
  }

  return (
    <div className="container">
      <h3>Uncontrolled Component</h3>
      <form onSubmit={handleSubmit}>
        <Input label={'Name'} type={'text'} name={'name'} />
        <Input label={'Age'} type={'text'} name={'name'} />
        <Input label={'Password'} type={'password'} name={'name'} />
        <Input label={'Password'} type={'checkbox'} name={'name'} />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default UncontrolledForm;
