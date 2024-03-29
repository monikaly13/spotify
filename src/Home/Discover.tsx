import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styled from "styled-components";
import { range } from "lodash";
import { Genres } from "components/Items";
// import { SPOTIFY_API } from "config";

interface IProps {
  title?: string;
  subtitle?: string;
  showSeeAll?: boolean;
}
const Discover = React.memo((props: IProps) => {
  const { title, subtitle, showSeeAll } = props;

  return (
    <StyledWrapper>
      <Typography variant="h6">{subtitle || "New"}</Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Typography variant="h5">{title}</Typography>
        {showSeeAll && <Button endIcon={<ArrowForwardIcon />}>see all</Button>}
      </Stack>
      <Stack direction="row" spacing={2}>
        <Genres />
        {/* <Grid container spacing={2}>
          {range(0, 4).map((item, i) => (
            <Grid key={i} item xs={6}>
              <Genres key={i} />
            </Grid>
          ))}
        </Grid> */}
      </Stack>
    </StyledWrapper>
  );
});
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export default Discover;