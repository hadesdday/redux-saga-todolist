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
import CommonModal from "../../components/Modal/index";

function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <ToastContainer />
          <CommonModal />
          <GlobalLoading />
          <Taskboard />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default withStyles(styles)(App);
