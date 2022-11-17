import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { setActiveSong, playPause } from '../redux/features/playerSlice';
import { useGeSongsDetailsQuery } from '../redux/services/shazamCore';

const SongDetails = () => {
  const { songid } = useParams();
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  console.log(songid);

  return (
    <div className="flex felx-col">
      <DetailsHeader artistId={artistId} songData={songData} />

      <div className="mb-10">
        <h2 className="text-white text-3x1 font-bold">Lyrics</h2>
        <div className="mt-5" />
      </div>
    </div>
  );
};

export default SongDetails;
