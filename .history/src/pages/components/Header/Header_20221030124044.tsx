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
  const [value, setValue] = useState(0,1,2,3);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const PAGES = [
    { name: "add friend", link: "nveo" },
    { name: "about me", link: "nvoenv" },
    { name: "contact me", link: "nove" },
    { name: "nvineovnv", link: "nvoen" },
  ];
  return (
    <AppBar>
      <Toolbar>
        <DrawerFriend />

        {isMatch ? (
          <>
            <Typography sx={{ margin: "auto" }}>MEMO TO TALK</Typography>
            <DrawerComp pages={PAGES} />
          </>
        ) : (
          <>
            <Tabs
              textColor="inherit"
              sx={{ marginLeft: "auto" }}
              value={value}
              onChange={() => setValue}
            >
              {PAGES.map((page, index) => (
                <Tab key={index} label={page.name} href={page.link} />
              ))}
            </Tabs>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
