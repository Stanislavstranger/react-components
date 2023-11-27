import { useRouter } from 'next/router';
import Layout from '../../components/layout/Layout';
import { FC, PropsWithChildren } from 'react';
import { Animals } from '../../models';
import { GetServerSideProps } from 'next';
import CardList from '../../components/UI/cardList/CardList';

const Pages: FC<PropsWithChildren<{ animals: Animals[] }>> = ({ animals }) => {
  const router = useRouter();
  const { query } = router;
  const selectedPage = query.id;

  return (
    <>
      <Layout title={`Page ${selectedPage}`}>
        <div className="container_card">
          <CardList animals={animals} />
        </div>
      </Layout>
    </>
  );
};

export default Pages;

export const getServerSideProps: GetServerSideProps<{
  animals: Animals[];
}> = async ({ params }) => {
  if (!params || !params.id) {
    return {
      notFound: true,
    };
  }

  const { id } = params;
  const [pageId, pageSize, searchTerm] = id.toString().split('-');
  const BASE_URL = 'https://stapi.co/api/v1/rest/animal/search';
  if (searchTerm == '') {
    const responseGet = await fetch(
      `${BASE_URL}?&pageNumber=${+pageId - 1}&pageSize=${pageSize}`
    );
    const { animals } = await responseGet.json();
    return {
      props: { animals },
    };
  }
  const responsePost = await fetch(
    `${BASE_URL}?name=${searchTerm}&pageNumber=${
      +pageId - 1
    }&pageSize=${pageSize}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );
  const { animals } = await responsePost.json();
  return {
    props: { animals },
  };
};
