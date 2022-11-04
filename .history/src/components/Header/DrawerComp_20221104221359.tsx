import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";

interface Page {
  pages: {
    name: string;
    link: string;
    value: number;
  }[];
}

const DrawerComp = (props: Page) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  console.log(props.value);
  return (
    <div>
      <Drawer
        PaperProps={{ style: { width: "30%" } }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {props.pages.map((page) => (
            <li key={page.link}>
              <ListItemButton href={page.link}>
                <ListItemText>{page.name}</ListItemText>
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
