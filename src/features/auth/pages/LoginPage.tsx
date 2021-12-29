import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Typography,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { useAppDispatch, useAppSelector } from "app/hooks";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authAction, selectIsLogin, selectIsLoginIn } from "../authSlice";

const useStyles = makeStyles((theme: any) =>
  createStyles({
    root: {
      display: "flex",
      flexFlow: "row nowrap",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
    },
    box: {
      padding: "16px",
    },
  })
);
const LoginPage = () => {
  const classes = useStyles();
  const nav = useNavigate();
  const isLogged = Boolean(localStorage.getItem("access_token"));
  const isLogin = useAppSelector(selectIsLogin);
  useEffect(() => {
    if (isLogged) nav("/admin");
  }, [isLogged]);
  const dispatch = useAppDispatch();
  const handleLogin = () => {
    dispatch(
      authAction.login({
        username: "",
        password: "",
      })
    );
  };
  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant="h5" component="h1">
          Student Management
        </Typography>
        <Box mt={4}>
          <Button
            variant="contained"
            fullWidth
            color="primary"
            onClick={handleLogin}
          >
            {isLogin && <CircularProgress size={20} color="secondary" />} &nbsp;
            Login
          </Button>
        </Box>
      </Paper>
    </div>
  );
};

export default LoginPage;
