import { ThemeProvider, withStyles } from "@material-ui/core";
import React from "react";
import { Provider } from "react-redux";
import theme from "../../commons/Themes";
import configureStore from "../../redux/configureStore";
import Taskboard from "../Taskboard";
import styles from "./styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalLoading from "../../components/GlobalLoading";

function App(props) {
  //  const { classes } = props;

  const store = configureStore();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <ToastContainer />
          <GlobalLoading/>
          <Taskboard />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default withStyles(styles)(App);
