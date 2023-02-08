import React from "react";
import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import { borderRadius } from "@mui/system";
import { useNavigate } from "react-router-dom";

const Sidebar: React.FC  = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const handleSignout = () => {
    localStorage.removeItem("user");
    navigate("/authentication");
  };

  return (
    <Box
      sx={{
        width: 250,
        borderRadius: "7px",
        padding: "0px 10px",
        bgcolor: "cadetblue",
        color: "white"
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Avatar sx={{ margin: "40px auto 30px", width: 60, height: 60 }} />

        {/* name */}
        <Typography
          component="h1"
          variant="h5"
          sx={{
            textAlign: "center",
          }}
        >
          {user?.name}
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            margin: "5px 0px",
          }}
        >
          {user?.email}
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            margin: "5px 0px",
          }}
        >
          {user?.phone}
        </Typography>
      </Box>
      <Divider />

      <Button
        fullWidth
        size="large"
        onClick={handleSignout}
        sx={{ mt: 3, mb: 2,  bgcolor: "darkcyan", color:"white", boxShadow: " 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.05)"}}
      >
        Sign out
      </Button>
    </Box>
  );
};

export default Sidebar;
