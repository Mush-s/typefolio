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
          <Tab label="111111" />
        </Tabs>
        <Button variant="contained">Login</Button>
        <Button variant="contained">Signin</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
