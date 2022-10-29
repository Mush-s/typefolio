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
import React, { useState } from "react";
import DrawerComp from "./DrawerComp";
import DrawerFriend from "./DrawerFriend";

const Header = () => {
  const [value, setValue] = useState();

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const PAGE = ["add friend", "about me", "contact me", "nvineovnv"];
  return (
    <AppBar>
      <Toolbar>
        <DrawerFriend />

        {isMatch ? (
          <>
            <Typography sx={{ margin: "auto" }}>MEMO TO TALK</Typography>
            <DrawerComp page={PAGE} />
          </>
        ) : (
          <>
            <Tabs
              textColor="inherit"
              sx={{ marginLeft: "auto" }}
              value={value}
              onChange={() => setValue}
            >
              {PAGE.map((page, index) => (
                <Tab key={index} label={page} value={value} />
              ))}
            </Tabs>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
