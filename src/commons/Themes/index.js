import { createTheme } from "@material-ui/core";

const theme = createTheme({
  color: {
    primary: "#D32F2F",
    secondary: "#00BCD4",
    error: "#E64A19",
    paper: "#fff",
    lightSecondary: "#e33371",
    white: "#fff",
    lightPrimary: "#4791db",
    darkPrimary: "#3f51b5",
    defaultColor: "#000000",
    transparentBlur: "rgba(0,0,0,0.1)",
  },
  typography: {
    fontFamily: "Roboto",
  },
  shape: {
    borderRadius: 4,
    background: "#7B1FA2",
    textColor: "#FFFFFF",
    border: "#CCCCC",
  },
  textField: {
    width: "100%",
  },
  icon: {
    cursor: "pointer",
  },
});

export default theme;
