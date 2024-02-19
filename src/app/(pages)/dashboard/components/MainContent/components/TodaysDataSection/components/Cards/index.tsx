import { Card, Box, Typography, Icon } from "@mui/material";
import { red, purple, green, indigo } from "@mui/material/colors";
import { CardsType } from "./Types";

const useStyles = (type: string) => ({
  container: {
    padding: 2,
    width: "100%",
    backgroundColor:
      type === "amount"
        ? red[50]
        : type === "order"
        ? purple[50]
        : type === "customer"
        ? green[50]
        : indigo[50],

    columns: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
    },

    titleAndIcon: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },

    title: {
      fontSize: "12px",
      fontWeight: "bold",
    },
    value: {
      fontSize: "20px",
      fontWeight: "bold",
    },

    infoNumbers: {
      textAlign: "center",
    },
  },
});

export const Cards = ({ title, value, icon, infoNumbers, type }: CardsType) => {
  const styles = useStyles(type);
  return (
    <Card sx={styles.container}>
      <Box sx={styles.container.columns}>
        <Box sx={styles.container.titleAndIcon}>
          <Box>
            <Typography variant="h6" sx={styles.container.title}>
              {title}
            </Typography>
            <Typography variant="h6" sx={styles.container.value}>
              $ {value}
            </Typography>
          </Box>

          <Box>{icon}</Box>
        </Box>

        <Box>
          <Typography variant="h6" sx={styles.container.infoNumbers}>
            {infoNumbers}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};
