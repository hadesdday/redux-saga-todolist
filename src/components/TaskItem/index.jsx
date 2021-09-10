import {
  Card,
  CardActions,
  CardContent,
  Fab,
  Grid,
  Icon,
  Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

function TaskItem(props) {
  const { classes, task, status, key,onEdit } = props;
  const { title, description } = task;

  return (
    <>
      <Card key={task.id} className={classes.card}>
        <CardContent>
          <Grid container justifyContent="space-between">
            <Grid item md={8}>
              <Typography component="h2">{title}</Typography>
            </Grid>
            <p>{description}</p>
            <Grid item md={4} key={key}>
              {status.label}
            </Grid>
          </Grid>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Fab
            color="primary"
            aria-label="Edit"
            className={classes.fab}
            size="small"
            onClick={onEdit}
          >
            <Icon fontSize="small">edit_icon</Icon>
          </Fab>
          <Fab color="secondary" aria-label="Delete" size="small">
            <Icon fontSize="small">delete</Icon>
          </Fab>
        </CardActions>
      </Card>
    </>
  );
}

export default withStyles(styles)(TaskItem);
