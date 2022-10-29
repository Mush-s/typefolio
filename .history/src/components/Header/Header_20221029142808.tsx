import { AppBar, Toolbar } from "@mui/material";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import React from "react";

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <RecordVoiceOverIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
