import { useState, useEffect, useCallback } from 'react';
/* import { searchAnimalsByName } from '../services/LoadingDataService'; */
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
import { loadingSlice } from '../store/reducers/LoadingSlice';
import { animalsAPI } from '../services/AnimalsService';

const SearchPage = () => {
  const [error, setError] = useState<Error | null>(null);
  const [searched, setSearched] = useState(true);
  const [pageSize, setPageSize] = useState(50);
  const [totalElements, setTotalElements] = useState(0);
  const pagesArray = getPagesArray(getPageCount(totalElements, pageSize));
  const [selectedPage, setSelectedPage] = useState(0);
  const navigate = useNavigate();
  const { searchTerm } = useAppSelector((state) => state.searchReducer);
  const { changeItems } = itemsSlice.actions;
  const { loading } = useAppSelector((state) => state.loadingReducer);
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

  const [searchAnimalsByName] = animalsAPI.useSearchAnimalsByNameMutation();

  useEffect(() => {
    if (!isLoading && !isError && animals) {
      updateSearchResults(searchTerm, selectedPage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animals]);

  const updateSearchResults = useCallback(
    async (term: string, pageNumber: number = 0) => {
      dispatch(changeLoading(loading));
      setError(null);
      setSearched(true);

      try {
        let animalsData;
        if (term !== '') {
          dispatch(changeLoading(true))
          searchAnimalsByName({ term, pageNumber, pageSize })
            .unwrap()
            .then((data) => {
              animalsData = data;
              dispatch(changeItems(animalsData.animals));
              setTotalElements(animalsData.page.totalElements);
            })
            .catch((error) => {
              setError(error as Error);
            });
        } else {
          animalsData = animals;
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
    [animals, pageSize, selectedPage]
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
