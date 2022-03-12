import React from "react";
import styled from "styled-components";
import { Button, Stack } from "@mui/material";
import { range } from "lodash";
import Playlists from "./../../components/Items/Playlists";

const Genres = React.memo(() => {
  return (
    <StyledWrapper>
      <Stack direction="row" spacing={2}>
        {range(0, 4).map((item, i) => (
          <Playlists key={i} title={"title" + item} />
        ))}
      </Stack>
    </StyledWrapper>
  );
});
const StyledWrapper = styled(Stack)`
  && {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 30px 50px;
  }
`;

export default Genres;