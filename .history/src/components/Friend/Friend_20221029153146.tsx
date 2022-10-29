import React from "react";

const Friend = () => {
  return (
    <List>
      {props.page.map((page, index) => (
        <ListItemButton key={index} onClick={() => setOpenDrawer(false)}>
          <ListItemIcon>
            <ListItemText>{page}</ListItemText>
          </ListItemIcon>
        </ListItemButton>
      ))}
    </List>
  );
};

export default Friend;
