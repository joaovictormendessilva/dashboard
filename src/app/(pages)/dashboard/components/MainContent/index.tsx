import {
  Avatar,
  Box,
  Card,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { TodaysDataSection } from "./components/TodaysDataSection";
import { useStyles } from "./styles";
import { FinancesDataSection } from "./components/FinancesDataSection";

export const MainContent = () => {
  const styles = useStyles();
  return (
    <Box sx={styles.container}>
      <Card sx={styles.cardHeader}>
        <Typography variant="h1">Dashboard</Typography>

        <Box sx={styles.cardHeader.searchAndAvatar}>
          <TextField
            size="small"
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Avatar alt="user picture" />
        </Box>
      </Card>

      <TodaysDataSection />

      <FinancesDataSection />
    </Box>
  );
};
