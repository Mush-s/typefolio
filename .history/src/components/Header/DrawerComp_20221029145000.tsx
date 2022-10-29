import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

const DrawerComp = () => {
  return (
    <div>
      <Drawer open={true}>
        <List>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText></ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
    </div>
  );
};

export default DrawerComp;
