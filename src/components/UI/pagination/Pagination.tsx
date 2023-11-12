import { MouseEventHandler } from 'react';
import Button from '../button/Button';

interface PaginationProps {
  selectPage: MouseEventHandler<HTMLButtonElement>;
  pagesArray: number[];
  loading: boolean;
  selectedPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  selectPage,
  pagesArray,
  loading,
  selectedPage,
}) => {
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
