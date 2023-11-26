import { ChangeEvent } from 'react';
import Input from '../input/Input';
import Button from '../button/Button';
import classes from './SearchSection.module.css';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { searchSlice } from '../../../store/reducers/SearchSlice';
import { useRouter } from 'next/router';

const SearchSection: React.FC<unknown> = () => {
  const { searchTerm: reduxSearchTerm } = useAppSelector(
    (state) => state.searchReducer
  );
  const { change } = searchSlice.actions;
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(change(event.target.value));
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearchClick();
    }
  };

  const handleSearchClick = () => {
    const trimmedSearchTerm = reduxSearchTerm.trim();
    localStorage.setItem('searchTerm', trimmedSearchTerm);
    dispatch(change(trimmedSearchTerm));
    console.log(trimmedSearchTerm)
    router.push(`/page/1-50-${trimmedSearchTerm}`);
  };

  return (
    <div className={classes.top_section}>
      <Input
        type="text"
        value={reduxSearchTerm}
        placeholder="Select animal"
        onChange={handleSearchInputChange}
        onKeyPress={handleKeyPress}
      />
      <Button onClick={handleSearchClick}>Search</Button>
    </div>
  );
};

export default SearchSection;
