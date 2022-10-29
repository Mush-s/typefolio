import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import React, { useState } from "react";
import DrawerComp from "./DrawerComp";

const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar>
      <Toolbar>
        <RecordVoiceOverIcon />
        {isMatch ? (
          <>
            <Typography>MEMO TO TALK</Typography>
            <DrawerComp />
          </>
        ) : (
          <>
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, value) => setValue(value)}
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
          </>
        )}
        )
      </Toolbar>
    </AppBar>
  );
};

export default Header;
