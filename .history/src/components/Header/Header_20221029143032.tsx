import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import React from "react";

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <RecordVoiceOverIcon />
        <Tabs textColor="inherit">
          <Tab label="Add Friend" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
