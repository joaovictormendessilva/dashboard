"use client";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { routes } from "./utils";
import LogoutIcon from "@mui/icons-material/Logout";
import useStyles from "./styles";

export const SideMenu = () => {
  const styles = useStyles();

  return (
    <Box sx={styles.container}>
      <Box>
        <Drawer variant="permanent" open={true}>
          <List sx={styles.list}>
            {routes.map((route) => (
              <ListItem key={route.name}>
                <ListItemButton href={route.link} sx={styles.listItemButton}>
                  {route.icon}
                  <Typography sx={styles.listItemButtonName}>
                    {route.name}
                  </Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <List>
            <ListItem sx={styles.listItemButton}>
              <ListItemButton>
                <LogoutIcon />
                <Typography sx={styles.listItemButtonName}>Logout</Typography>
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </Box>
  );
};
