import { AppBar, Button, Tab, Tabs, Toolbar } from "@mui/material";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import React from "react";

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <RecordVoiceOverIcon />
        <Tabs textColor="inherit">
          <Tab label="Add Friend" />
          <Tab label="About Me" />
          <Tab label="Contact me" />
        </Tabs>
        <Button sx={{ marginLeft: "auto" }} variant="contained">
          Login
        </Button>
        <Button sx={{ marginLeft: "10px" }} variant="contained">
          Signin
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
