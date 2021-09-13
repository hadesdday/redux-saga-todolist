import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Dashboard(props) {
  const { children, classes } = props;
  return (
    <>
      <div className={classes.dashboard}>
        <Header />
        <Sidebar />
        {children}
      </div>
    </>
  );
}

export default withStyles(styles)(Dashboard);
