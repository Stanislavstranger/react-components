import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { getPageCount, getPagesArray } from '../../../utils/getPageCount';
import SearchSection from '../searchSection/SearchSection';
import Notification from '../notification/Notification';
import Button from '../button/Button';
import Select from '../select/Select';
import Pagination from '../pagination/Pagination';
import { useRouter } from 'next/router';
import { useAppSelector } from '../../../hooks/redux';

const Header: FC<PropsWithChildren<unknown>> = () => {
  const [error, setError] = useState<Error | null>(null);
  const [pageSize, setPageSize] = useState(50);
  const [totalElements, setTotalElements] = useState(0);
  let pagesArray = getPagesArray(getPageCount(totalElements, pageSize));
  const { searchTerm: reduxSearchTerm } = useAppSelector(
    (state) => state.searchReducer
  );

  const handleSearch = async (searchTerm: string) => {
    try {
      const response = await fetch(
        `https://stapi.co/api/v1/rest/animal/search?name=${searchTerm}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      const { page } = await response.json();
      setTotalElements(page.totalElements);
    } catch (error) {
      throwError();
    }
  };

  useEffect(() => {
    if (reduxSearchTerm !== undefined) {
      handleSearch(String(localStorage.getItem('searchTerm')));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setError(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    pagesArray = getPagesArray(getPageCount(totalElements, pageSize));
  }, [pageSize, totalElements]);

  const throwError = () => {
    const error = new Error('This is a test error');
    setError(error);
  };

  const router = useRouter();

  const changePagination = (value: number) => {
    setPageSize(value);
    router.push(
      `/page/${0}-${value}-${String(localStorage.getItem('searchTerm'))}`
    );
  };

  const closeNotification = () => {
    setError(null);
  };

  return (
    <>
      <div className="container">
        <header>
          <SearchSection onSearch={handleSearch} />

          <Button className="error-button" onClick={throwError}>
            Throw Error
          </Button>
        </header>

        <Select
          value={pageSize}
          onChange={(value: number) => {
            changePagination(value);
          }}
          defaultValue="Number of elements per page"
          options={[
            { value: 10, name: '10' },
            { value: 15, name: '15' },
            { value: 25, name: '25' },
            { value: 50, name: '50' },
          ]}
        />

        <Pagination pagesArray={pagesArray} pageSize={pageSize}></Pagination>
        {error && (
          <Notification onClose={closeNotification}>
            Error: {error.message}
          </Notification>
        )}
      </div>
    </>
  );
};

export default Header;
