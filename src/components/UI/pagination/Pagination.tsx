import Button from '../button/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAppSelector } from '../../../hooks/redux';

interface PaginationProps {
  pagesArray: number[];
  pageSize: number;
}

const Pagination: React.FC<PaginationProps> = ({ pagesArray, pageSize }) => {
  const router = useRouter();
  const { query } = router;
  const { searchTerm: reduxSearchTerm } = useAppSelector(
    (state) => state.searchReducer
  );

  return (
    <div style={{ marginBottom: '10px' }} className="buttonPage_container">
      {pagesArray.map((pageItem) => (
        <Link
          key={pageItem}
          href={`/page/${pageItem}-${pageSize}-${reduxSearchTerm || ''}`}
        >
          <Button
            active={
              String(pageItem) === String(query.id?.toString().split('-')[0])
            }
          >
            {pageItem}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default Pagination;
