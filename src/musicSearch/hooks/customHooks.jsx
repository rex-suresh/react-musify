import { useEffect, useState } from 'react';
import API from '../API';

const capitalize = (id) => {
  return id.toUpperCase()[0] + id.slice(1);
};

const useTopArtists = () => {
  const [data, setData] = useState(null);
  useEffect(() => API.getTopArtist(setData), []);
  return data;
};

const useArtist = (id) => {
  const [artistData, setArtist] = useState(null);
  const modifiedId = capitalize(id);

  useEffect(() => API.getArtistData(setArtist, modifiedId), [modifiedId]);
  return artistData;
};

const useTopTracks = () => {
  const [artistData, setArtist] = useState(null);

  useEffect(() => API.getTopTracks(setArtist), []);
  return artistData;
};

export { useTopArtists, useArtist, useTopTracks };
