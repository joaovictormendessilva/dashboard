import {
  Avatar,
  Box,
  Card,
  Grid,
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
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12} sm={5} md={7} lg={8}>
            <Typography variant="h1">Dashboard</Typography>
          </Grid>
          <Grid item xs={12} sm={7} md={5} lg={4}>
            <Box sx={styles.cardHeader.searchAndAvatar}>
              <TextField
                size="small"
                placeholder="Search..."
                fullWidth
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
          </Grid>
        </Grid>
      </Card>

      <TodaysDataSection />

      <FinancesDataSection />
    </Box>
  );
};
