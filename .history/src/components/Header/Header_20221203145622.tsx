import {
  AppBar,
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
  const [value, setValue] = useState(0);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const PAGES = [
    { name: "add friend", link: "/Friend/Add" },
    { name: "delete friend", link: "/Friend/Delete" },
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
                <Tab
                  key={index}
                  label={page.name}
                  href={page.link}
                  value={value}
                />
              ))}
            </Tabs>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
