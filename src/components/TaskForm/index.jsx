import TextField from "@material-ui/core/TextField";
import { Backdrop, Box, Button, Fade, Grid, Modal } from "@material-ui/core";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import CloseIcon from "@material-ui/icons/Close";

function TaskForm(props) {
  const { open, classes, handleClose } = props;

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
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
                Add new todo
                <CloseIcon className={classes.icon} onClick={handleClose} />
              </span>
            </div>
            <div className={classes.content}>
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
                      <Button
                        variant="contained"
                        color="default"
                        onClick={handleClose}
                      >
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
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
}

export default withStyles(styles)(TaskForm);
