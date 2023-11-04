import { useState, useEffect } from 'react';
import {
  searchAllAnimals,
  searchAnimalsByName,
} from '../services/LoadingDataService';
import './SearchPage.css';
import SearchSection from './UI/searchSection/SearchSection';
import ResultSection from './UI/resultSection/ResultSection';
import Button from './UI/button/Button';

const SearchPage = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const [searched, setSearched] = useState(true);

  const updateSearchResults = async (term: string) => {
    setLoading(true);
    setError(null);
    setSearched(true);

    try {
      let animalsData;
      if (term !== '') {
        animalsData = await searchAnimalsByName(term);
      } else {
        animalsData = await searchAllAnimals();
      }
      setAnimals(animalsData.animals);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    updateSearchResults(localStorage.getItem('searchTerm') || '');
  }, []);

  const throwError = () => {
    const error = new Error('This is a test error');
    setError(error);
  };

  return (
    <div className="container">
      <header>
        <SearchSection onSearch={updateSearchResults} />
        <Button
          className="error-button"
          onClick={throwError}
          disabled={loading}
        >
          Throw Error
        </Button>
      </header>

      <ResultSection
        loading={loading}
        error={error}
        animals={animals}
        searched={searched}
      />
    </div>
  );
};

export default SearchPage;
