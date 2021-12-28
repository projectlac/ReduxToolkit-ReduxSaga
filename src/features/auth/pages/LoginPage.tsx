import { Box, Button, Paper, Typography } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import React from "react";

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
  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant="h5" component="h1">
          Student Management
        </Typography>
        <Box mt={4}>
          <Button variant="contained" fullWidth color="primary">
            Login
          </Button>
        </Box>
      </Paper>
    </div>
  );
};

export default LoginPage;
