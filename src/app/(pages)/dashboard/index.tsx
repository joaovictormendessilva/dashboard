import { SideMenu } from "@/app/shared/components/SideMenu";
import { Box, Typography } from "@mui/material";

const useStyles = () => ({
  container: {
    display: "flex",
    height: "100vh",
    width: "100%",
    backgroundColor: "grey",
  },
});

const Dashboard = () => {
  const styles = useStyles();

  return (
    <Box sx={styles.container}>
      <SideMenu />
    </Box>
  );
};

export default Dashboard;
