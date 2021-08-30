const styles = (theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.color.paper,
    boxShadow: theme.shadows[5],
  },
  header: {
    backgroundColor: theme.color.darkPrimary,
    padding: theme.spacing(2),
  },
  title: {
    fontFamily: theme.typography.fontFamily,
    color: theme.color.white,
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  content: {
    padding: theme.spacing(2),
  },
  icon: {
    cursor: "pointer",
  },
});

export default styles;
