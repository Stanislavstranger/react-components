import { useState } from 'react';
import Button from '../../components/UI/button/Button';

const ControlledPage = () => {
  const [name, setName] = useState('');

  function handleSubmit() {
    alert(`Name: ${name}`);
  }
  return (
    <div className="container">
      <h3>Controlled Component</h3>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default ControlledPage;
