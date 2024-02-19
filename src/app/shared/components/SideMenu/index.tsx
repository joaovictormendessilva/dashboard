"use client";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { routes } from "./utils";
import LogoutIcon from "@mui/icons-material/Logout";
import useStyles from "./styles";

export const SideMenu = () => {
  const theme = useTheme();
  const sideMenuWidth: boolean = useMediaQuery(theme.breakpoints.up("sm"));

  const styles = useStyles(sideMenuWidth);

  return (
    <Box sx={styles.container}>
      <Drawer variant="permanent" open={true}>
        <Box sx={styles.content}>
          <List sx={styles.list}>
            {routes.map((route) => (
              <ListItem key={route.name}>
                {sideMenuWidth ? (
                  <ListItemButton href={route.link} sx={styles.listItemButton}>
                    {route.icon}
                    <Typography>{route.name}</Typography>
                  </ListItemButton>
                ) : (
                  <IconButton key={route.name} href={route.link}>
                    {route.icon}
                  </IconButton>
                )}
              </ListItem>
            ))}
          </List>

          <List>
            <ListItem sx={styles.listItemButton}>
              {sideMenuWidth ? (
                <ListItemButton>
                  <LogoutIcon />
                  <Typography>Logout</Typography>
                </ListItemButton>
              ) : (
                <IconButton>
                  <LogoutIcon />
                </IconButton>
              )}
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
