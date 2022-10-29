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
  const [open, setOpen] = usestate(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const PAGE = ["add friend", "about me", "contact me", "nvineovnv"];
  return (
    <AppBar>
      <Toolbar>
        <Button onClick={}>
          <RecordVoiceOverIcon />
        </Button>
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
              sx={{ marginLeft: "auto" }}
            >
              {PAGE.map((page, index) => (
                <Tab key={index} label={page} />
              ))}
            </Tabs>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
