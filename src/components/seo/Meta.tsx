import { FC, PropsWithChildren } from 'react';
import { IMeta } from './meta.interface';
import Head from 'next/head';

const getTitle = (title: string) => `${title} | Star Trek Animals`;

const Meta: FC<PropsWithChildren<IMeta>> = ({
  title,
  description,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{getTitle(title)}</title>
        {description ? (
          <>
            <meta name="dercription" content="dercription" />
          </>
        ) : (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Head>
      {children}
    </>
  );
};

export default Meta;
