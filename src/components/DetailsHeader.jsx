import { Link } from 'react-router-dom';

const DetailsHeader = ({ artistId, artistData, songData }) => {
  const artist = artistData?.artists[artistId]?.attributes;

  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />
      <div className="absolute inset-0 f;ex items-center">
        <img
          src={artistId
            ? artist?.artwork?.url.replace('{w}', '500').replace('{h}', '500')
            : songData?.images?.coverart}
          alt="Song Artwork"
          className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border02 shadow-xl shadow-black"
        />
      </div>
      <div className="ml-5">
        <p>{artistId
          ? artist?.name
          : songData?.title}
        </p>
      </div>
    </div>
  );
};

export default DetailsHeader;
