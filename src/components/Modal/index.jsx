import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import { Backdrop, Fade, Modal } from "@material-ui/core";
import { bindActionCreators, compose } from "redux";
import * as modalActions from "../../actions/modal";
import { connect } from "react-redux";
import CloseIcon from "@material-ui/icons/Close";

function CommonModal(props) {
  const { classes, open, component, modalActionsCreators, title } = props;
  const { hideModal } = modalActionsCreators;

  return (
    <>
      <Modal
        open={open}
        onClose={hideModal}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.header}>
              <span className={classes.title}>
                {title}
                <CloseIcon className={classes.icon} onClick={hideModal} />
              </span>
            </div>
            <div className={classes.content}>{component}</div>
          </div>
        </Fade>
      </Modal>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    open: state.modal.showModal,
    title: state.modal.title,
    component: state.modal.component,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    modalActionsCreators: bindActionCreators(modalActions, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const composer = compose(withStyles(styles), withConnect);

export default composer(CommonModal);
