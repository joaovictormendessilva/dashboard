import { SideMenu } from "@/app/shared/components/SideMenu";
import { Box } from "@mui/material";
import { MainContent } from "./components/MainContent";
import { useStyles } from "./styles";

const Dashboard = () => {
  const styles = useStyles();

  return (
    <Box sx={styles.container}>
      <SideMenu />

      <MainContent />
    </Box>
  );
};

export default Dashboard;
