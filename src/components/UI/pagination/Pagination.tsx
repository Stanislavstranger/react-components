import { MouseEventHandler } from 'react';
import Button from '../button/Button';
import { useAppSelector } from '../../../hooks/redux';

interface PaginationProps {
  selectPage: MouseEventHandler<HTMLButtonElement>;
  pagesArray: number[];
  selectedPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  selectPage,
  pagesArray,
  selectedPage,
}) => {
  const { loading } = useAppSelector((state) => state.loadingReducer);
  return (
    <div style={{ marginBottom: '10px' }} className="buttonPage_container">
      {pagesArray.map((pageItem) => (
        <Button
          key={pageItem}
          onClick={selectPage}
          disabled={loading}
          active={pageItem === selectedPage + 1}
        >
          {pageItem}
        </Button>
      ))}
    </div>
  );
};

export default Pagination;
