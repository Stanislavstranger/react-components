import { ChangeEvent } from 'react';
import Input from '../input/Input';
import Button from '../button/Button';
import classes from './SearchSection.module.css';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { searchSlice } from '../../../store/reducers/SearchSlice';

interface SearchSectionProps {
  onSearch: (term: string) => void;
}

const SearchSection: React.FC<SearchSectionProps> = ({ onSearch }) => {
  const { searchTerm: reduxSearchTerm } = useAppSelector((state) => state.searchReducer);
  const { change } = searchSlice.actions;
  const { loading } = useAppSelector((state) => state.loadingReducer);
  const dispatch = useAppDispatch();

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
      onSearch(trimmedSearchTerm);
      localStorage.setItem('searchTerm', trimmedSearchTerm);
      dispatch(change(trimmedSearchTerm));
    }
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
      <Button onClick={handleSearchClick} disabled={loading}>
        Search
      </Button>
    </div>
  );
};

export default SearchSection;
