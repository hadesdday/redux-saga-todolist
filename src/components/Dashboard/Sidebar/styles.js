const styles = (theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  drawerPaper: {
    width: 240,
    maxWidth: 240,
    zIndex: 10,
    height: "200%",
    position: "relative",
    overflowX: "hidden",
  },
  menuLink: {
    color: theme.color.defaultColor,
    textDecoration: "none",
  },
  menuLinkActive: {
    "&>div": {
      backgroundColor: theme.color.transparentBlur,
    },
  },
});

export default styles;
