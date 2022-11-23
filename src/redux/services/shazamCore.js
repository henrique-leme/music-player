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
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world' }),
    getSongsByCountry: builder.query({ query: (countryCode) => `/charts/country?country_code=${countryCode}` }),
    getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}` }),
    getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
    getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}` }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongsByCountryQuery,
  useGetArtistDetailsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
} = shazamCoreApi;
