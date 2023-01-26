import React, { FC } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { RootState } from "@redux/reducers";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const LoginPageContainer: FC = () => {
  const router = useRouter();
  const { history } = useSelector((state: RootState) => state.rootReducer.navigation);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get("username") as string;
    const password = data.get("password") as string;

    if (username && password) {
      const user = await signIn("credentials", {
        redirect: false,
        username,
        password,
      });
      if (user) {
        if (history.length !== 0) {
          router.push(history.at(-1) as string);
        } else {
          router.push("/");
        }
      } else {
        alert("Wrong username of password");
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">{"Find login details in the source code :))"}</Typography>
        <Typography>{"Hint: its in pages/api/auth"}</Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPageContainer;
