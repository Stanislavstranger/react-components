import { FC, PropsWithChildren } from 'react';
import Meta from '../seo/Meta';
import { IMeta } from '../seo/meta.interface';
import Header from '../UI/header/Header';

const Layout: FC<PropsWithChildren<IMeta>> = ({
  title,
  description,
  children,
}) => {
  return (
    <>
      <Meta title={title} description={description}></Meta>
      <Header />
      {children}
    </>
  );
};

export default Layout;
