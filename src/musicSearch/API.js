const links = {
  topArtists: 'https://api.napster.com/v2.2/artists/top',
  artistImgList: 'https://api.napster.com/v2.2/artists/__ART_ID__/images',
  artistImg: 'https://api.napster.com/imageserver/v2/artists/__ART_ID__/images/__SIZE__.jpg',
  artistData: 'https://api.napster.com/v2.2/artists/__ART_ID__'
};
const config = {
  headers: { apikey: 'MjIyZDJjOTEtYzk3Yy00ODAxLTlkNWUtYzM2Y2IwYmE1MTgw' },
};

export const API = {
  fetchJson: (link) => fetch(link, config).then((res) => res.json()),

  getTopArtist: (setter) => {
    API.fetchJson(links.topArtists).then(data => setter(data.artists));
  },
  getArtistImgList: (setter, artistID) => {
    const imagesLink = links.artistImgList.replace('__ART_ID__', artistID);
    API.fetchJson(imagesLink).then(setter);
  },
  getArtistImg: (artistID, size) => {
    const sizes = { S: '150x100', M: '356x237', L: '633x422' };
    const imageLink = links.artistImg
      .replace('__ART_ID__', artistID).replace('__SIZE__', sizes[size]);

    return imageLink;
  },
  getArtistData: (setter, artistID) => {
    const dataLink = links.artistData.replace('__ART_ID__', artistID);
    API.fetchJson(dataLink).then(data => setter(data.artists));
  }
};

export default API;
