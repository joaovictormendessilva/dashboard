import { Card, Typography } from "@mui/material";
import { CardSectionLayoutType } from "./Types";

const useStyles = () => ({
  container: {
    padding: 2,
    display: "flex",
    flexDirection: "column",
    gap: 2,

    title: {
      fontSize: "16px",
      fontWeight: "bold",
    },
  },
});

export const CardSectionLayout = ({
  children,
  title,
}: CardSectionLayoutType) => {
  const styles = useStyles();
  return (
    <Card sx={styles.container}>
      <Typography sx={styles.container.title}>{title}</Typography>

      {children}
    </Card>
  );
};
