const useStyles = () => ({
  container: {
    top: 20,
    position: "relative",
  },

  list: {
    flex: 1,
  },

  listItemButton: { display: "flex", gap: 1 },

  listItemButtonName: {
    display: {
      xs: "none",
      sm: "none",
      md: "block",
      lg: "block",
    },
  },
});

export default useStyles;
