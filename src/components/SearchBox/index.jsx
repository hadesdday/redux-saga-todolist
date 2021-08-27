import { TextField, withStyles } from "@material-ui/core";
import styles from "./styles";

function SearchBox(props) {
  const { classes, handleChange } = props;

  return (
    <>
      <form className={classes.container} noValidate autoComplete="off" />
      <TextField
        id="standard-search"
        placeholder="Enter your keyword"
        type="search"
        onChange={handleChange}
        autoComplete="off"
        className={classes.textField}
      />
    </>
  );
}

export default withStyles(styles)(SearchBox);
