import HomeIcon from "@mui/icons-material/Home";
import BoltIcon from "@mui/icons-material/Bolt";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ListIcon from '@mui/icons-material/List';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';

export const MENUS = [
  { label: "Home", value: "home", url: "/", icon: <HomeIcon /> },
  { label: "Charts", value: "charts", url: "/charts", icon: <BoltIcon /> },
  { label: "News", value: "news", url: "/news", icon: <LocalOfferIcon /> },
  { label: "Playlists", value: "playlists", url: "/playlists", icon: <ListIcon /> },
  { label: "Songs", value: "songs", url: "/songs", icon: <FavoriteBorderSharpIcon /> },
  { label: "Artists", value: "artists", url: "/artists", icon: <PersonOutlineSharpIcon /> },
];
export const checkCurrentPage = (url: string, cur_url: string) => {
  if (url === cur_url) {
    return true;
  }
  return false;
};