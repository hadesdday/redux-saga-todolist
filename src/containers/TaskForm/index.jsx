import { Box, Button, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { Form } from "react-final-form";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as modalActions from "../../actions/modal";
import * as taskActions from "../../actions/task";
import RenderTextField from "../../components/FormHelper/TextField";
import FormStateToRedux from "./FormStateToRedux";
import styles from "./styles";
import validate from "./validate";

function TaskForm(props) {
  const { classes, modalActionsCreators, taskActionsCreators } = props;
  const { hideModal } = modalActionsCreators;
  const { addTask } = taskActionsCreators;

  function handleSubmitForm(data) {
    const { title, description } = data;
    addTask(title, description);
  }

  return (
    <>
      <Form
        initialValues={
          {
            //same as reducers here
          }
        }
        onSubmit={(values) => {
          // send values to the cloud
          handleSubmitForm(values);
        }}
        validate={validate}
        //có thể điền các action của reducer form ở dưới (có thể vào redux tool
        //xem form reducer có gì)
        render={({ handleSubmit, pristine, form, submitting }) => (
          <form onSubmit={handleSubmit}>
            <FormStateToRedux form="TASK_MANAGEMENT" />
            <Grid container spacing={4}>
              <Grid item md={12}>
                <RenderTextField
                  id="standard-basic"
                  label="Title"
                  className={classes.textField}
                  name="title"
                />
              </Grid>
              <Grid item md={12}>
                <RenderTextField
                  id="standard-multiline-flexible"
                  label="Description"
                  name="description"
                  multiline={true}
                  maxRows={4}
                  className={classes.textField}
                  margin="normal"
                />
              </Grid>
              <Grid item md={12}>
                <Box display="flex" flexDirection="row-reverse">
                  <Button
                    variant="contained"
                    onClick={form.reset}
                    style={{ marginLeft: "10px" }}
                    disabled={pristine}
                  >
                    Clear values
                  </Button>
                  <Button
                    variant="contained"
                    color="default"
                    onClick={hideModal}
                  >
                    Cancel
                  </Button>

                  <Box mr={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      disabled={submitting || pristine}
                    >
                      Save
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            {/* <FormStateFromRedux form="TASK_MANAGEMENT" /> */}
          </form>
        )}
      />
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    modalActionsCreators: bindActionCreators(modalActions, dispatch),
    taskActionsCreators: bindActionCreators(taskActions, dispatch),
  };
};

const withConnect = connect(null, mapDispatchToProps);

const composer = compose(withStyles(styles), withConnect);

export default composer(TaskForm);

// <form>
//   <Grid container spacing={4}>
//     <Grid item md={12}>
//       <TextField
//         id="standard-basic"
//         label="Name"
//         className={classes.textField}
//         margin="normal"
//         fullWidth
//       />
//     </Grid>
//     <Grid item md={12}>
//       <TextField
//         id="standard-multiline-flexible"
//         label="Description"
//         multiline
//         maxRows={4}
//         className={classes.textField}
//         margin="normal"
//         fullWidth
//       />
//     </Grid>
//     <Grid item md={12}>
//       <Box display="flex" flexDirection="row-reverse">
//         <Button variant="contained" color="default" onClick={hideModal}>
//           Cancel
//         </Button>
//         <Box mr={2}>
//           <Button variant="contained" color="primary">
//             Save
//           </Button>
//         </Box>
//       </Box>
//     </Grid>
//   </Grid>
// </form>;
