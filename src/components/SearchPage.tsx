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
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { itemsSlice } from '../store/reducers/ItemsSlice';

const SearchPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [searched, setSearched] = useState(true);
  const [pageSize, setPageSize] = useState(50);
  const [totalElements, setTotalElements] = useState(0);
  const pagesArray = getPagesArray(getPageCount(totalElements, pageSize));
  const [selectedPage, setSelectedPage] = useState(0);
  const navigate = useNavigate();
  const { searchTerm } = useAppSelector((state) => state.searchReducer);
  const { changeItems } = itemsSlice.actions;
  const dispatch = useAppDispatch();

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
        dispatch(changeItems(animalsData.animals))
        setTotalElements(animalsData.page.totalElements);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pageSize]
  );

  useEffect(() => {
    const updateResults = async () => {
      await updateSearchResults(searchTerm, selectedPage);
    };
    updateResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPage, pageSize, updateSearchResults]);

  const throwError = () => {
    const error = new Error('This is a test error');
    setError(error);
  };

  const selectPage = (event: React.MouseEvent<HTMLButtonElement>) => {
    const selectedPage =
      Number((event.target as HTMLButtonElement).textContent) - 1;
    setSelectedPage(selectedPage);
    navigate(`./animals?page=${selectedPage + 1}`);
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
        onChange={(value: number) => {
          setPageSize(value);
          setSelectedPage(0);
        }}
        defaultValue="Number of elements per page"
        options={[
          { value: 10, name: '10' },
          { value: 15, name: '15' },
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
        searched={searched}
        selectedPage={selectedPage}
      />
    </div>
  );
};

export default SearchPage;
