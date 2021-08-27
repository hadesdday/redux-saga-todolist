import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button } from "@material-ui/core";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";

function TaskForm(props) {
  const { open, classes } = props;

  return (
    <>
      <Dialog
        open={open}
        onClose={props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add new item</DialogTitle>
        <DialogContent>
          <TextField
            id="standard-basic"
            label="Name"
            className={classes.textfield}
          />
          <br />
          <TextField
            id="standard-multiline-flexible"
            label="Description"
            multiline
            maxRows={4}
            className={classes.textfield}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={props.handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default withStyles(styles)(TaskForm);
