import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {  makeStyles } from "@material-ui/core/styles";
import Avatar from "@mui/material/Avatar";
import TwitterIcon from "@mui/icons-material/Twitter";

const useStyles = makeStyles((theme) => ({
  logo: {
    maxWidth: "150px",
    minWidth: "80px",
    border: "solid",
  },
  barLogoContainer: {
    maxWidth: "150px",
    minWidth: "80px",
    border: "solid",
  },
}));

export default function Bar() {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <a href="/">
            <Avatar
              src="/originalCheese.png"
              sx={{ width: 75, height: 75, marginTop: "15px" }}
              alt="image"
            />
          </a>
          <Typography sx={{ flexGrow: 1 }}></Typography>

          <a href="https://twitter.com/EtherCheeseNFT" className="twitter-link">
            <TwitterIcon fontSize="large"/>
          </a>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
