import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Error, Loader, SongCard } from '../components';
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';

const AroundYou = () => {
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByCountryQuery(country);

  useEffect(() => {
    axios.get('https://geo.ipify.org/api/v2/country?apiKey=at_geMgqdzDsveiYESi8JEhqgPwTbtfE')
      .then((res) => setCountry(res?.data?.location?.country))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [country]);

  if (isFetching && loading) return <Loader title="Loading songs around you..." />;
  if (error && country) return <Error />;

  return (
    <div />
  );
};

export default AroundYou;
