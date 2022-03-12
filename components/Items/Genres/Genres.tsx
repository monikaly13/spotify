import React from "react";
import { Stack, Typography } from "@mui/material";
import styled from "styled-components";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import HomeIcon from "@mui/icons-material/Home";
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import AirIcon from '@mui/icons-material/Air';
import MicExternalOnIcon from '@mui/icons-material/MicExternalOn';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AttractionsIcon from '@mui/icons-material/Attractions';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function srcset(
  image: string,
  width: number,
  height: number,
  rows = 1,
  cols = 1
) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
const itemData = [
  {
    img: "hiphop.jpg",
    title: "Hip Hop",
    author: "@rollelflex_graphy726",
    icon : <TheaterComedyIcon/>,
  },
  {
    img: "gaming.jpg",
    title: "Gaming",
    author: "@helloimnik",
    icon: <SportsEsportsIcon/>,
  },
  {
    img: "koreanjpg.jpg",
    title: "KPOP",
    author: "@nolanissac",
    icon: <EmojiFlagsIcon/>,
  },
  {
    img: "sunset.jpg",
    title: "Moods",
    author: "@hjrc33",
    icon: <AirIcon/>,
  },
  {
    img: "sing.jpg",
    title: "Pop",
    author: "@tjdragotta",
    icon: <MicExternalOnIcon/>,
  },
  {
    img: "driving.jpg",
    title: "In the car",
    author: "@katie_wasserman",
    icon: <DirectionsCarIcon/>,
  },
  {
    img: "anime.jpg",
    title: "Anime",
    author: "@silverdalex",
    icon: <AttractionsIcon/>,
  },
  {
    img: "jazz.jpg",
    title: "Jazz",
    author: "@shelleypauls",
    icon: <MusicNoteIcon/>,
  },
];

const Genres = React.memo(() => {
  return (
    <Stack>
      <StyledImageList
        sx={{
          width: 500,
          height: 450,
          // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
          transform: "translateZ(0)",
        }}
        rowHeight={200}
        gap={1}
      >
        {itemData.map((item) => {
          const cols = item.featured ? 2 : 1;
          const rows = item.featured ? 2 : 1;

          return (
            <ImageListItem key={item.img} cols={cols} rows={rows}>
              <img
                {...srcset(item.img, 250, 200, rows, cols)}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                sx={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                    "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                }}
                title={item.title}
                position="top"
                actionIcon={
                  <IconButton
                    sx={{ color: "white" }}
                    aria-label={`star ${item.title}`}
                  >
                    {item.icon}
                    {/* <StarBorderIcon /> */}
                  </IconButton>
                }
                actionPosition="left"
              />
            </ImageListItem>
          );
        })}
      </StyledImageList>
    </Stack>
  );
});

const StyledImageList = styled(ImageList)`
  && {
    .MuiImageListItemBar-root {
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .MuiImageListItemBar-titleWrap {
        flex-grow: unset;
      }
      .MuiSvgIcon-root {
        width: 80px;
        height: 80px;
      }
    }
  }
`;
export default Genres;