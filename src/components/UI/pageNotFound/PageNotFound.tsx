import Image from 'next/image';
import Button from '../button/Button';
import classes from './PageNotFound.module.css';
import { useRouter } from 'next/router';
import { searchSlice } from '../../../store/reducers/SearchSlice';
import { useAppDispatch } from '../../../hooks/redux';

const NotFound = () => {
  const router = useRouter();
  const { initializeFromLocalStorage } = searchSlice.actions;
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    router.push('/page/1-50- ');
    localStorage.setItem('searchTerm', '');
    dispatch(initializeFromLocalStorage());
  };

  return (
    <div className={classes.page_container}>
      <Image
        priority={true}
        className={classes.image}
        src="/Page_not_found.png"
        alt="Page not found"
        width={1024}
        height={587}
      ></Image>
      <Button onClick={handleButtonClick}>Go back to main page</Button>
    </div>
  );
};

export default NotFound;
