const useStyles = (sideMenuWidth: boolean) => ({
  container: {
    position: "static",
  },

  content: {
    minWidth: sideMenuWidth ? "200px" : "10px",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  list: {
    flex: 1,
  },

  listItemButton: { display: "flex", gap: 1 },
});

export default useStyles;
