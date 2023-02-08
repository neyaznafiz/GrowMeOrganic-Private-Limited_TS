import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const TopBar: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "60px",
        bgcolor: "cadetblue",
        color: "white",
        borderRadius: "7px",
        mb: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h4" sx={{ fontWeight: "500", letterSpacing:"0.5px", fontFamily: "inherit" }}>
        Information Table
      </Typography>
    </Box>
  );
};

export default TopBar;
