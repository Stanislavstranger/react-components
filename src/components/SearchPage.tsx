import { useState, useEffect, useCallback } from 'react';
import {
  searchAllAnimals,
  searchAnimalsByName,
} from '../services/LoadingDataService';
import './SearchPage.css';
import SearchSection from './UI/searchSection/SearchSection';
import ResultSection from './UI/resultSection/ResultSection';
import Button from './UI/button/Button';
import { getPageCount, getPagesArray } from '../utils/getPageCount';
import Pagination from './UI/pagination/Pagination';
import Select from './UI/select/Select';

const SearchPage = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [searched, setSearched] = useState(true);
  const [pageSize, setPageSize] = useState(50);
  const [totalElements, setTotalElements] = useState(0);
  const pagesArray = getPagesArray(getPageCount(totalElements, pageSize));
  const [selectedPage, setSelectedPage] = useState(0);

  const updateSearchResults = useCallback(
    async (term: string, pageNumber: number = 0) => {
      setLoading(true);
      setError(null);
      setSearched(true);

      try {
        let animalsData;
        if (term !== '') {
          animalsData = await searchAnimalsByName(term, pageNumber, pageSize);
        } else {
          animalsData = await searchAllAnimals(pageNumber, pageSize);
        }
        setAnimals(animalsData.animals);
        setTotalElements(animalsData.page.totalElements);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    },
    [pageSize]
  );

  useEffect(() => {
    const updateResults = async () => {
      await updateSearchResults(
        localStorage.getItem('searchTerm') || '',
        selectedPage
      );
    };
    updateResults();
  }, [selectedPage, pageSize, updateSearchResults]);

  const throwError = () => {
    const error = new Error('This is a test error');
    setError(error);
  };

  const selectPage = (event: React.MouseEvent<HTMLButtonElement>) => {
    const selectedPage =
      Number((event.target as HTMLButtonElement).textContent) - 1;
    setSelectedPage(selectedPage);
  };

  return (
    <div className="container">
      <header>
        <SearchSection onSearch={updateSearchResults} loading={loading} />
        <Button
          className="error-button"
          onClick={throwError}
          disabled={loading}
        >
          Throw Error
        </Button>
      </header>

      <Select
        value={pageSize}
        onChange={(value: number) => setPageSize(value)}
        defaultValue="Number of elements per page"
        options={[
          { value: 5, name: '5' },
          { value: 10, name: '10' },
          { value: 25, name: '25' },
          { value: 50, name: '50' },
        ]}
      />

      <Pagination
        selectPage={selectPage}
        pagesArray={pagesArray}
        loading={loading}
        selectedPage={selectedPage}
      ></Pagination>

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
