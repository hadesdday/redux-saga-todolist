import { withStyles } from "@material-ui/styles";
import classNames from "classnames";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as uiActions from "../../actions/ui";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styles from "./styles";

function Dashboard(props) {
  const { children, classes, name, showSidebar, uiActionCreators } = props;
  const { showSidebar: showSidebarAction, hideSidebar } = uiActionCreators;

  function handleToggleSidebar(value) {
    if (value === true) {
      showSidebarAction();
    } else {
      hideSidebar();
    }
  }

  return (
    <>
      <div className={classes.dashboard}>
        <Header
          name={name}
          showSidebar={showSidebar}
          toggleSidebar={handleToggleSidebar}
        />
        <div className={classes.wrapper}>
          <Sidebar
            showSidebar={showSidebar}
            onToggleSidebar={handleToggleSidebar}
          />
          <div
            className={classNames(classes.wrapperContent, {
              [classes.shiftLeft]: showSidebar === false,
            })}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    showSidebar: state.ui.showSidebar,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uiActionCreators: bindActionCreators(uiActions, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withStyles(styles))(Dashboard);
