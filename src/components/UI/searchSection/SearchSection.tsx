import { ChangeEvent, useEffect } from 'react';
import Input from '../input/Input';
import Button from '../button/Button';
import classes from './SearchSection.module.css';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { searchSlice } from '../../../store/reducers/SearchSlice';
import { useRouter } from 'next/router';

interface SearchSectionProps {
  onSearch: (searchTerm: string) => void;
}

const SearchSection: React.FC<SearchSectionProps> = ({ onSearch }) => {
  const { searchTerm: reduxSearchTerm } = useAppSelector(
    (state) => state.searchReducer
  );
  const { change, initializeFromLocalStorage } = searchSlice.actions;
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(initializeFromLocalStorage());
    router.push(`/page/1-50-${reduxSearchTerm}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    const storedSearchTerm = localStorage.getItem('searchTerm')?.trim() || '';

    if (trimmedSearchTerm !== storedSearchTerm) {
      localStorage.setItem('searchTerm', trimmedSearchTerm);
      dispatch(initializeFromLocalStorage());
      router.push(`/page/1-50-${trimmedSearchTerm}`);
      onSearch(trimmedSearchTerm);
    }
  };

  useEffect(() => {
    console.log(reduxSearchTerm);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
