import React, { ChangeEvent } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useLocation, useNavigate } from "react-router-dom";
import { PostUser } from "../types/AuthenticationTypes";
import { toast } from "react-toastify";
import { inputStyling } from "../style/FormStyle";

const Authentication: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // authentication function
  const handleSubmit = (event: ChangeEvent<HTMLFormElement | undefined>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userInfo: PostUser = {
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email"),
    };
    // store user info into local storage
    if (
      userInfo.name !== "" &&
      userInfo.phone !== "" &&
      userInfo.email !== ""
    ) {
      localStorage.setItem("user", JSON.stringify(userInfo));
      navigate("/");
      toast.success("Congratulation! You have successfully loged in.");
    } else {
      // error message
      toast.error(
        "Yout must have to enter your details before accessing the application."
      );
    }
  };

  // when user rerote to authentication page, localstorage will be cleared
  if (location.pathname === "/authentication") {
    localStorage.removeItem("user");
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* icon */}
        <Avatar sx={{ m: 2, width: 70, height: 70 }}>
          <LockOutlinedIcon sx={{ width: 40, height: 40 }} />
        </Avatar>

        {/* title */}
        <Typography component="h1" variant="h5">
          Put your information
        </Typography>

        {/* form sention */}
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          {/* name input */}
          <TextField
            margin="normal"
            required={true}
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            sx={inputStyling}
          />

          {/* phone input */}
          <TextField
            margin="normal"
            required={true}
            fullWidth
            id="phone"
            label="Phone Number"
            name="phone"
            autoComplete="phone"
            sx={inputStyling}
          />

          {/* email input */}
          <TextField
            margin="normal"
            required={true}
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            sx={inputStyling}
          />

          {/* sign in button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{
              mt: 3,
              mb: 2,
              bgcolor: "darkcyan",
              color: "white",
              boxShadow:
                " 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.05)",
            }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Authentication;
