import { Box, Button, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { Form } from "react-final-form";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as modalActions from "../../actions/modal";
import * as taskActions from "../../actions/task";
import RenderSelect from "../../components/FormHelper/Select";
import RenderTextField from "../../components/FormHelper/TextField";
import FormStateToRedux from "./FormStateToRedux";
import styles from "./styles";
import validate from "./validate";

function TaskForm(props) {
  const { classes, modalActionsCreators, taskActionsCreators } = props;
  const { hideModal } = modalActionsCreators;
  const { addTask, updateTask } = taskActionsCreators;

  function handleSubmitForm(data) {
    const { taskEditing } = props;
    const { title, description, status } = data;

    if (taskEditing && taskEditing.id) {
      updateTask(title, description, status);
    } else {
      addTask(title, description);
    }
  }

  function renderStatus() {
    let xhtml = null;
    const { taskEditing } = props;
    if (taskEditing.id) {
      xhtml = <RenderSelect name="status" />;
    }
    return xhtml;
  }
  const MyForm = ({ subscription }) => (
    <Form
      initialValues={{
        //same as reducers here
        title: props.taskEditing ? props.taskEditing.title : "",
        description: props.taskEditing.description
          ? props.taskEditing.description
          : "",
        status: props.taskEditing ? props.taskEditing.status : "",
      }}
      subscription={subscription}
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
            {renderStatus()}
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
                <Button variant="contained" color="default" onClick={hideModal}>
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
  );
  return (
    <>
      <MyForm subscription={{ submitting: true, pristine: true }} />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    taskEditing: state.task.taskEditing,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    modalActionsCreators: bindActionCreators(modalActions, dispatch),
    taskActionsCreators: bindActionCreators(taskActions, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const composer = compose(withStyles(styles), withConnect);

export default composer(TaskForm);
