import Artist from '../pageComponents/Artist';
import HomePageContent from '../pageComponents/HomePage';
import { TopArtists } from '../pageComponents/TopArtists';

const routes = [
  {
    to: '/artist/:id',
    content: Artist,
    heading: 'Artist :'
  },
  {
    to: '/top-artists',
    content: TopArtists,
    heading: 'Top Artists'
  },
  {
    to: '/top-artists',
    content: TopArtists,
    heading: 'Top Artists'
  },
  {
    to: '/home',
    content: HomePageContent,
    heading: 'Musify'
  },
  {
    to: '/',
    content: HomePageContent,
    heading: 'Musify'
  },
];

export { routes };
