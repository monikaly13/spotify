import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Artists = React.memo(() => {
  return (
    <Box
      sx={{
        display: "flex",
        flex: 2,
        flexDirection: "column",
      }}
    >
      <Stack direction="row" spacing={2}>
        <Avatar
          alt="Remy Sharp"
          src="https://spillmagazine.com/wp-content/uploads/2020/02/Rex-Orange-County-790x790.jpg"
          sx={{ width: 90, height: 90 }}
        />
      </Stack>
      <Typography variant="subtitle1">Rex Orange</Typography>
    </Box>
  );
});
export default Artists;
