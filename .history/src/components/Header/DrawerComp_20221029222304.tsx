import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";

interface Page {
  pages: {
    name: string[];
    link: string[];
  };
}
const DrawerComp = (props: Page) => {
  const { name, link } = props.pages;
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {props.pages.map((page) => (
            <li key={page}>
              <ListItemButton>
                <ListItemIcon>
                  <ListItemText>{page.name}</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </li>
          ))}
        </List>
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
