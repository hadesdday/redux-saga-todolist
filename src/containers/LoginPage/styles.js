const styles = (theme) => ({
  background: {
    backgroundColor: theme.palette.primary.main,
    padding: 40,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    textAlign: "center",
    flex: "1 0 auto",
  },
  socialLogin: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 60,
  },
  googleBtn: {
    background: theme.palette.error.main,
    color: theme.color.white,
    "&:hover": {
      color: "black",
    },
    marginRight: 10,
  },
  facebookBtn: {
    background: theme.palette.info.main,
    color: theme.color.white,
    "&:hover": {
      color: "black",
    },
  },
});

export default styles;
