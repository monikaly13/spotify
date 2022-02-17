import React from "react";
import Divider from "@mui/material/Divider";

import NewReleases from "./NewRelease";
import styled from "styled-components";
import Recommendation from "./Recommendation";
import YouMayLinks from "./YouMayLike";

const Home = React.memo(() => {
  return (
    <StyledWrapper>
      <NewReleases title=" Releases" subtitle="New"/>
      <Divider sx={{ marginTop: 5, marginBottom: 5 }} />
      <NewReleases title="Featured Playlists" subtitle="Editor's picks" />
      <Divider sx={{ marginTop: 5, marginBottom: 5 }} />
      <Recommendation title="More Like This" subtitle="Recommendation" />
      <Divider sx={{ marginTop: 5, marginBottom: 5 }} />
      <YouMayLinks title="More Like This" subtitle="Recommendation" />
    </StyledWrapper>
  );
});
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-Top: 35px;
  padding-left: 70px;
  padding-right: 70px;
`;

export default Home;
