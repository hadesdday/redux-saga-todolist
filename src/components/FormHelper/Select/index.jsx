import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { Field } from "react-final-form";
import styles from "./styles";

function RenderSelect(props) {
  const { name, label, classes } = props;

  return (
    <>
      <Field
        name={name}
        render={(props) => (
          <div>
            <FormControl
              className={classes.formControl}
              errors={props.touched && props.invalid}
            >
              <InputLabel id={label}>Status</InputLabel>
              <Select
                labelId="select-label"
                id="select"
                value={props.input.value}
                onChange={props.input.onChange}
              >
                <MenuItem value={0}>Ready</MenuItem>
                <MenuItem value={1}>In Progress</MenuItem>
                <MenuItem value={2}>Completed</MenuItem>
              </Select>
            </FormControl>
          </div>
        )}
      />
    </>
  );
}

export default withStyles(styles)(RenderSelect);
