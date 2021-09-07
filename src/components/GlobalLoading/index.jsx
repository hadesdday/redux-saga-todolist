import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { compose } from "redux";
import LoadingIcon from "../../assets/images/loading.gif";
import styles from "./styles";
// import * as uiActions from "../../actions/ui";

function GlobalLoading(props) {
  const { classes, showLoading } = props;

  let xhtml = null;

  if (showLoading) {
    xhtml = (
      <div className={classes.globalLoading}>
        <img src={LoadingIcon} alt="loading" className={classes.icon} />
      </div>
    );
  }

  return <>{xhtml}</>;
}

const mapStateToProps = (state) => {
  return {
    showLoading: state.ui.showLoading,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     uiAction: bindActionCreators(uiActions, dispatch),
//   };
// };

const withConnect = connect(mapStateToProps, null);

export default compose(withStyles(styles), withConnect)(GlobalLoading);
