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
      <Drawer variant="permanent" open={true}>
        <Box sx={styles.content}>
          <List sx={styles.list}>
            {routes.map((route) => (
              <ListItem key={route.name}>
                <ListItemButton href={route.link} sx={styles.listItemButton}>
                  {route.icon} <Typography>{route.name}</Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <List>
            <ListItem sx={styles.listItemButton}>
              <ListItemButton>
                <LogoutIcon />
                <Typography>Logout</Typography>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
