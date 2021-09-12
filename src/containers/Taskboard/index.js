import { Button, Grid, withStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as modalActions from "../../actions/modal";
import * as taskActions from "../../actions/task";
import SearchBox from "../../components/SearchBox";
import TaskList from "../../components/TaskList";
import { STATUSES } from "../../constants";
import TaskForm from "../../containers/TaskForm";
import styles from "./styles";

function Taskboard(props) {
  const { classes } = props;

  const { modalActionsCreators } = props;
  const { showModal, changeModalTitle, changeModalContent } =
    modalActionsCreators;

  const { taskActionCreators } = props;
  const { fetchTasks, setEditingTask } = taskActionCreators;

  useEffect(() => {
    fetchTasks();
  }, []);

  const { listTask } = props;

  function handleEditTask(task) {
    setEditingTask(task);
    showModal();
    changeModalTitle("Edit a task from your list");
    changeModalContent(<TaskForm />);
  }

  function renderBoard() {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status, index) => {
          const listFiltered = listTask.filter(
            (task) => task.status === status.value
          );
          return (
            <TaskList
              key={index}
              tasks={listFiltered}
              status={status}
              onEdit={handleEditTask}
            />
          );
        })}
      </Grid>
    );
    return xhtml;
  }

  function handleClickOpen() {
    setEditingTask({
      title: "",
      description: "",
      status: STATUSES[0].value,
    });
    showModal();
    changeModalTitle("Add new task to your list");
    changeModalContent(<TaskForm />);
  }

  function loadData() {
    const { taskActionCreators } = props;
    const { fetchTasks } = taskActionCreators;
    fetchTasks();
  }

  function handleChange(e) {
    const { value } = e.target;
    const { taskActionCreators } = props;
    const { filterTask } = taskActionCreators;
    filterTask(value);
  }

  function renderSearchBox() {
    let xhtml = null;

    xhtml = <SearchBox handleChange={handleChange} />;

    return xhtml;
  }

  return (
    <>
      <div className={classes.taskboard}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleClickOpen}
        >
          <AddIcon />
          Add new item
        </Button>

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={loadData}
          style={{ margin: "10px" }}
        >
          Load data
        </Button>
        {renderSearchBox()}
        {renderBoard()}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    listTask: state.task.listTasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    taskActionCreators: bindActionCreators(taskActions, dispatch),
    modalActionsCreators: bindActionCreators(modalActions, dispatch),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Taskboard)
);
