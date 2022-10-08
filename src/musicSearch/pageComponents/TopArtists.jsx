import React, { useEffect, useState } from 'react';
import { API } from '../API';
import { useTopArtists } from '../hooks/customHooks';
import { Loading } from '../components/Loading';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const getImg = ({ images }, size) => {
  if (!images || images.length < 1) {
    return 'http://developer-assets.ws.sonos.com/doc-assets/portalDocs-sonosApp-defaultArtAlone.png';
  }

  const image = size === 'M' ? images[0] : images[images.length - 1];
  return image.url;
};

const ArtistImage = ({ id, size }) => {
  const imageCollection = useArtistImageCollection(id);
  // const imageLink = API.getArtistImg(id, size);
  return (
    <div
      style={{
        width: '100%',
        aspectRatio: '8/5',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '10px',
      }}
    >
      {imageCollection ? (
        <img
          style={{ width: '100%' }}
          src={getImg(imageCollection, size)}
          alt={id}
        />
      ) : (
        <Loading />
      )}
      {/* <img style={{ width: '100%' }} src={imageLink} alt={id} /> */}
    </div>
  );
};

const useArtistImageCollection = (id) => {
  const [imageCollection, setImageCollection] = useState(null);
  useEffect(() => {
    API.getArtistImgList(setImageCollection, id);
  }, [id]);

  return imageCollection;
};

const ArtistBanner = ({ name, id, className }) => {
  return (
    <div className={className}>
      <ArtistImage id={id} size={'M'} />
      <div style={{ fontWeight: '600' }}>{name}</div>
    </div>
  );
};

const StyledArtistBanner = styled(ArtistBanner)`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 10px;
  background-color: rgba(150, 150, 150, 0.1);
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    border: 1px solid skyblue;
  }
`;

const ArtistBanners = ({ artists }) => {
  return (
    <React.Fragment>
      {artists.map(({ name, id }) => (
        <Link
          to={`/artist/${id}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
          key={id}
        >
          <StyledArtistBanner name={name} id={id} key={id} />
        </Link>
      ))}
    </React.Fragment>
  );
};

const TopArtists = (props) => {
  const artists = useTopArtists();
  return artists ? (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
        gridTemplateRows: 'auto',
        gap: '2em',
      }}
    >
      <ArtistBanners artists={artists} />
    </div>
  ) : (
    <Loading />
  );
};

export { TopArtists, ArtistImage };
