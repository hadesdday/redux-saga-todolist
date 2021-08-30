import TextField from "@material-ui/core/TextField";
import { Box, Button, Grid } from "@material-ui/core";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import * as modalActions from "../../actions/modal";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";

function TaskForm(props) {
  const { classes, modalActionsCreators } = props;
  const { hideModal } = modalActionsCreators;

  return (
    <>
      <form>
        <Grid container spacing={4}>
          <Grid item md={12}>
            <TextField
              id="standard-basic"
              label="Name"
              className={classes.textField}
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              id="standard-multiline-flexible"
              label="Description"
              multiline
              maxRows={4}
              className={classes.textField}
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item md={12}>
            <Box display="flex" flexDirection="row-reverse">
              <Button variant="contained" color="default" onClick={hideModal}>
                Cancel
              </Button>
              <Box mr={2}>
                <Button variant="contained" color="primary">
                  Save
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    modalActionsCreators: bindActionCreators(modalActions, dispatch),
  };
};

const withConnect = connect(null, mapDispatchToProps);

const composer = compose(withStyles(styles), withConnect);

export default composer(TaskForm);
