export const useStyles = () => ({
  container: {
    marginLeft: "200px",
    width: "100%",
    paddingX: 3,
    paddingTop: 2,
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },

  cardHeader: {
    padding: 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    h1: {
      fontSize: "24px",
      fontWeight: "bold",
    },

    searchAndAvatar: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 1,
    },
  },
});
