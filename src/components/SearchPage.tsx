import { useState, useEffect, useCallback } from 'react';
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
import { loadingSlice } from '../store/reducers/loadingSlice';
import { animalsAPI } from '../services/AnimalsService';

const SearchPage = () => {
  const [error, setError] = useState<Error | null>(null);
  const [searched, setSearched] = useState(false);
  const [pageSize, setPageSize] = useState(50);
  const [totalElements, setTotalElements] = useState(0);
  const pagesArray = getPagesArray(getPageCount(totalElements, pageSize));
  const [selectedPage, setSelectedPage] = useState(0);
  const navigate = useNavigate();
  const { searchTerm } = useAppSelector((state) => state.searchReducer);
  const { loading } = useAppSelector((state) => state.loadingReducer);
  const { changeItems } = itemsSlice.actions;
  const { changeLoading } = loadingSlice.actions;
  const dispatch = useAppDispatch();

  const {
    data: animals,
    isLoading,
    isError,
  } = animalsAPI.useFetchAllAnimalsQuery({
    pageNumber: selectedPage,
    pageSize,
  });

  const [searchAnimalsByName, { isLoading: searchLoading }] =
    animalsAPI.useSearchAnimalsByNameMutation();

  useEffect(() => {
    dispatch(changeLoading(searchLoading || isLoading));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, isLoading, searchLoading, selectedPage]);

  useEffect(() => {
    if (!isLoading && !searchLoading && !isError) {
      updateSearchResults(searchTerm, selectedPage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animals, isError, selectedPage]);

  const updateSearchResults = useCallback(
    async (term: string, pageNumber: number = 0) => {
      setError(null);
      try {
        let animalsData;
        if (term !== '') {
          animalsData = await searchAnimalsByName({
            term,
            pageNumber,
            pageSize,
          }).unwrap();
        } else {
          animalsData = animals;
          setSearched(!!animalsData!.animals.length);
        }
        if (animalsData) {
          dispatch(changeItems(animalsData.animals));
          setTotalElements(animalsData.page.totalElements);
        }
      } catch (error) {
        setError(error as Error);
      } finally {
        dispatch(changeLoading(false));
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [animals, pageSize]
  );

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
        <SearchSection onSearch={updateSearchResults} />
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
        selectedPage={selectedPage}
      ></Pagination>

      <ResultSection
        error={error}
        searched={searched}
        selectedPage={selectedPage}
      />
    </div>
  );
};

export default SearchPage;
