import { ChangeEvent, useState } from 'react';
import Input from '../input/Input';
import Button from '../button/Button';
import classes from './SearchSection.module.css';

interface SearchSectionProps {
  onSearch: (term: string) => void;
  loading: boolean;
}

const SearchSection: React.FC<SearchSectionProps> = ({ onSearch, loading }) => {
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem('searchTerm') || ''
  );

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearchClick();
    }
  };

  const handleSearchClick = () => {
    onSearch(searchTerm);
    localStorage.setItem('searchTerm', searchTerm.trim());
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
