export const useStyles = () => ({
  container: {
    width: "-webkit-fill-available",
    paddingX: 3,
    paddingY: 2,
    display: "flex",
    flexDirection: "column",
    gap: 2,
    marginLeft: { xs: "80px", sm: "80px", md: "170px", lg: "170px" },
  },

  cardHeader: {
    padding: 2,

    h1: {
      fontSize: "24px",
      fontWeight: "bold",
    },

    searchAndAvatar: {
      display: "flex",
      justifyContent: "flex-end",
      flexDirection: "row",
      alignItems: "center",
      gap: 1,
    },
  },
});
