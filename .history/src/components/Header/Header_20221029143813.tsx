import { AppBar, Button, Tab, Tabs, Toolbar } from "@mui/material";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import React, { useState } from "react";

const Header = () => {
  const [value, setValue] = useState();
  return (
    <AppBar>
      <Toolbar>
        <RecordVoiceOverIcon />
        <Tabs
          textColor="inherit"
          value={value}
          onClick={(e, value) => setValue(value)}
        >
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
