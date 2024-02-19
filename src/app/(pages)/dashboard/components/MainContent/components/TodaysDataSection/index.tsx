import { Grid } from "@mui/material";
import { Cards } from "./components/Cards";
import PaidIcon from "@mui/icons-material/Paid";
import PlaylistAddCheckCircleIcon from "@mui/icons-material/PlaylistAddCheckCircle";
import GroupsIcon from "@mui/icons-material/Groups";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useStyles } from "./styles";
import { CardSectionLayout } from "../CardSectionLayout";

export const TodaysDataSection = () => {
  const styles = useStyles();

  return (
    <CardSectionLayout title="Today's data">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Cards
            title="Payment amount"
            value="500.00"
            icon={<PaidIcon sx={styles.icon} />}
            infoNumbers="**** **** **** 3484"
            type="amount"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Cards
            title="Payment order"
            value="200.00"
            icon={<PlaylistAddCheckCircleIcon sx={styles.icon} />}
            infoNumbers="**** **** **** 5542"
            type="order"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Cards
            title="Payment customer"
            value="350.00"
            icon={<GroupsIcon sx={styles.icon} />}
            infoNumbers="**** **** **** 8896"
            type="customer"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Cards
            title="Payment proceed"
            value="150.00"
            icon={<CheckCircleIcon sx={styles.icon} />}
            infoNumbers="**** **** **** 7745"
            type="proceed"
          />
        </Grid>
      </Grid>
    </CardSectionLayout>
  );
};
