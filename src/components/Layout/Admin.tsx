import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Header from "components/Common/Header";

import React from "react";

interface Props {}
const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "auto 1fr",
    gridTemplateAreas: `"header" " main"`,
    minHeight: "100vh",
  },
  header: {
    gridArea: "header",
  },

  main: {
    gridArea: "main",
  },
}));
export const Admin = (props: Props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Header />
      </Box>

      <Box className={classes.main}>M</Box>
    </Box>
  );
};
