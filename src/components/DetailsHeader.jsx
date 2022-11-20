import { Link } from 'react-router-dom';

const DetailsHeader = ({ artistId, artistData, songData }) => (
  <div className="relative w-full flex flex-col">
    <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />
    <div className="absolute inset-0 f;ex items-center">
      <img src={artistId ? artistData?.artists[artistId].attributes?.arwork?.url.replace('{w}', '500').replace('{h}', '500') : songData?.images?.coverart} alt="Song Artwork" />
    </div>
  </div>
);

export default DetailsHeader;
