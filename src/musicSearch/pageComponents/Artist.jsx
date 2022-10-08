import React from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from '../components/Loading';
import { useArtist } from '../hooks/customHooks';
import { ArtistImage } from './TopArtists';

const ArtistDetails = ({ id }) => {
  const artists = useArtist(id);

  if (artists) {
    const artist = artists[0];
    let heading = 'Unknown';
    let contents = 'Something might be wrong !';

    if (artist) {
      heading = artist.name;
      contents = artist.blurbs.join('');
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ fontSize: '1.8em', marginBottom: '0.5em' }}>{heading}</h2>
        <p style={{ lineHeight: '1.2em', fontSize: '1.2em' }}>
          {contents || 'Nothing to say !'}
        </p>
      </div>
    );
  }

  return <Loading />;
};

const Artist = (props) => {
  const { id } = useParams();
  return (
    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr',
          height: '450px',
        }}
      >
        <div
          style={{
            gridColumn: '1',
            gridRow: '1',
          }}
        >
          <ArtistImage id={id} size={'L'} /> {/* Unnecessary size */}
        </div>
        <div style={{ padding: '20px', overflow: 'scroll' }}>
          <ArtistDetails id={id} />
        </div>
      </div>
    </div>
  );
};

export default Artist;
