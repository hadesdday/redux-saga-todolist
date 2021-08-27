import { Box, Button, Grid, withStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import AddIcon from "@material-ui/icons/Add";
import { STATUSES, STATUS_CODE } from "../../constants";
import TaskList from "../../components/TaskList";
import TaskForm from "../../components/TaskForm";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as taskActions from "../../actions/task";
import SearchBox from "../../components/SearchBox";

function Taskboard(props) {
  const { classes } = props;

  // useEffect(() => {
  //   const { taskActionCreators } = props;
  //   const { fetchTasks } = taskActionCreators;
  //   // const { fetchTasksRequest } = taskActionCreators;
  //   fetchTasks();
  //   // fetchTasksRequest();
  // }, []);

  const { listTask, filterTask } = props;

  function renderBoard() {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status, index) => {
          const listFiltered = listTask.filter(
            (task) => task.status === status.value
          );
          return <TaskList key={index} tasks={listFiltered} status={status} />;
        })}
      </Grid>
    );
    return xhtml;
  }
  const [open, setOpen] = useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function renderForm() {
    let xhtml = null;
    xhtml = <TaskForm open={open} handleClose={handleClose} />;
    return xhtml;
  }

  function loadData() {
    const { taskActionCreators } = props;
    const { fetchTasks } = taskActionCreators;
    // const { fetchTasksRequest } = taskActionCreators;
    fetchTasks();
    // fetchTasksRequest();
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
        {renderForm()}
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
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Taskboard)
);
