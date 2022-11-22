import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': 'cd2fa4c330mshbae98045be8bca9p1de4adjsn5174c75d389d',
//     'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com',
//   },
// };

// fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'cd2fa4c330mshbae98045be8bca9p1de4adjsn5174c75d389d');
      return headers;
    },
  }),
  endpoints: (builders) => ({
    getTopCharts: builders.query({ query: () => '/charts/world' }),
    getSongDetails: builders.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
    getSongRelated: builders.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}` }),
    getArtistDetails: builders.query({ query: ({ artistId }) => `/artists/details?artist_id${artistId}` }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} = shazamCoreApi;
