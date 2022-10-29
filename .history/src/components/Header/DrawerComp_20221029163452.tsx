import {
  Drawer,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import FriendList from "../Friend/FriendList";

interface Page {
  page: string[];
}
const DrawerComp = (props: Page) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        {props.page.map((page) => (
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>{page}</ListItemText>
            </ListItemIcon>
          </ListItemButton>
        ))}
      </Drawer>
      <IconButton
        sx={{ color: "white" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </div>
  );
};

export default DrawerComp;
