import { Error, Loader, ArtistCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Loading songs around you..." />;
  if (error) return <Error />;
};

export default TopArtists;
