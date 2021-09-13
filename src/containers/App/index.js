import { ThemeProvider, withStyles } from "@material-ui/core";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminLayoutRoute from "../../commons/Layout/AdminLayoutRoute";
import theme from "../../commons/Themes";
import GlobalLoading from "../../components/GlobalLoading";
import CommonModal from "../../components/Modal/index";
import { ADMIN_ROUTES } from "../../constants/index";
import configureStore from "../../redux/configureStore";
import Taskboard from "../Taskboard";
import styles from "./styles";

function App() {
  const store = configureStore();

  function renderAdminRoutes() {
    return ADMIN_ROUTES.map((route) => {
      return (
        <AdminLayoutRoute
          key={route.path}
          name={route.name}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      );
    });
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <div className="App">
            <ToastContainer />
            <CommonModal />
            <GlobalLoading />
            <Switch>{renderAdminRoutes()}</Switch>
            {/* <Taskboard /> */}
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default withStyles(styles)(App);
