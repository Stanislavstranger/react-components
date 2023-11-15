import { ChangeEvent } from 'react';
import Input from '../input/Input';
import Button from '../button/Button';
import classes from './SearchSection.module.css';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { searchSlice } from '../../../store/reducers/SearchSlice';

interface SearchSectionProps {
  onSearch: (term: string) => void;
  loading: boolean;
}

const SearchSection: React.FC<SearchSectionProps> = ({ onSearch, loading }) => {
  const { searchTerm } = useAppSelector((state) => state.searchReducer);
  const { change } = searchSlice.actions;
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
    onSearch(searchTerm);
    localStorage.setItem('searchTerm', searchTerm.trim());
    dispatch(change(searchTerm.trim()));
  };

  return (
    <div className={classes.top_section}>
      <Input
        type="text"
        value={searchTerm}
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
