import React from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";

const Main: React.FC = () => {
  return (
    <Box>
      <Outlet />
    </Box>
  );
};

export default Main;
