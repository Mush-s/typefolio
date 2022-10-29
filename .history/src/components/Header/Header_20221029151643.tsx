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
  const PAGE = ["add friend", "about me", "contact me"];
  return (
    <AppBar>
      <Toolbar>
        <RecordVoiceOverIcon />
        {isMatch ? (
          <>
            <Typography sx={{ margin: "auto" }}>MEMO TO TALK</Typography>
            <DrawerComp page={PAGE} />
          </>
        ) : (
          <>
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, value) => setValue(value)}
            >
              {PAGE.map((page, index) => (
                <Tab xs={3} key={index} label={page} />
              ))}
            </Tabs>
            <Button sx={{ marginLeft: "auto" }} variant="contained">
              Login
            </Button>
            <Button sx={{ marginLeft: "10px" }} variant="contained">
              Signin
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
