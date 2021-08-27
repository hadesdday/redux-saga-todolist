import { Box, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import TaskItem from "../TaskItem";
import styles from "./styles";

function TaskList(props) {
  const { classes, tasks, status } = props;

  return (
    <>
      <Grid item md={4} xs={12} key={status.value}>
        <Box mt={3} mb={3}>
          <div className={classes.status}>{status.label}</div>
        </Box>

        <div className={classes.wrapperListTask}>
          {tasks.map((task, index) => {
            return <TaskItem key={task.id} task={task} status={status} />;
          })}
        </div>
      </Grid>
    </>
  );
}

export default withStyles(styles)(TaskList);
