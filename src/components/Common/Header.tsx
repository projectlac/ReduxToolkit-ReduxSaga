import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import {
  Avatar,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { authAction, selectIsLoginIn } from "features/auth/authSlice";
import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  userBox: {
    display: "flex",
  },
  userInfomationBox: {
    marginLeft: "16px",
    fontSize: "20px",
    fontWeight: "bold",
  },
  textHello: {
    margin: "0",
    fontWeight: "600",
    fontSize: "12px",
    fontStyle: "italic",
  },
}));

export default function ButtonAppBar() {
  const isLogged = Boolean(localStorage.getItem("access_token"));
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const handleLogout = () => {
    dispatch(authAction.logout());
  };
  useEffect(() => {
    if (!isLogged) nav("/login");
  }, [isLogged]);

  const [state, setState] = useState<boolean>(false);
  const toggleDrawer = () => {
    setState(!state);
  };
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>

          <Drawer anchor="left" open={state} onClose={toggleDrawer}>
            <Box sx={{ minWidth: 300 }}>
              <Box p={2} className={classes.userBox}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/1.jpg"
                />
                <Box className={classes.userInfomationBox}>
                  <p className={classes.textHello}>Xin chào</p>
                  <Typography variant="h5">Hihihi</Typography>
                </Box>
              </Box>
              <Divider />
              <List>
                {["Inbox", "Starred", "Send email", "Drafts"].map(
                  (text, index) => (
                    <ListItem button key={text}>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                  )
                )}
              </List>
              <Divider />
              <List>
                {["All mail", "Trash", "Spam"].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          {isLogged && (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
