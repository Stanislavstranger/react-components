import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Data } from '../models';

const URL = 'https://stapi.co/api/v1/rest/animal/search';

export const animalsAPI = createApi({
  reducerPath: 'animalsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    fetchAllAnimals: build.query<
      Data,
      { pageNumber: number; pageSize?: number }
    >({
      query: ({ pageNumber = 0, pageSize = 50 }) => ({
        url: '',
        params: {
          pageNumber,
          pageSize,
        },
      }),
    }),

    searchAnimalsByName: build.mutation<
      Data,
      { term: string; pageNumber?: number; pageSize?: number }
    >({
      query: ({ term = '', pageNumber = 0, pageSize = 50 }) => ({
        url: '',
        params: {
          name: term,
          pageNumber,
          pageSize,
        },
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }),
    }),
  }),
});
