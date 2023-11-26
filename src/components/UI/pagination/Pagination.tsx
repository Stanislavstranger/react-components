import Button from '../button/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface PaginationProps {
  pagesArray: number[];
  pageSize: number;
}

const Pagination: React.FC<PaginationProps> = ({ pagesArray, pageSize }) => {
  const router = useRouter();
  const { query } = router;

  return (
    <div style={{ marginBottom: '10px' }} className="buttonPage_container">
      {pagesArray.map((pageItem) => (
        <Link key={pageItem} href={`/page/${pageItem}-${pageSize}`}>
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
