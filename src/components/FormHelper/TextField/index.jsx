import { makeStyles, TextField } from "@material-ui/core";
import { Field } from "react-final-form";

function renderTextField(props) {
  const { multiline, maxRows, label } = props;

  const useHelperTextStyles = makeStyles(() => ({
    root: {
      color: "red",
    },
  }));
  const helperTextStyles = useHelperTextStyles();

  return (
    <>
      <Field name={props.name}>
        {(props) => (
          <div>
            <TextField
              id={props.input.id}
              label={label}
              className={props.input.classesName}
              name={props.input.name}
              value={props.input.value}
              onChange={props.input.onChange}
              multiline={multiline}
              maxRows={maxRows}
              margin="normal"
              helperText={
                props.meta.error && props.meta.touched && props.meta.error
              }
              FormHelperTextProps={{
                classes: {
                  root: helperTextStyles.root,
                },
              }}
              fullWidth
            />
          </div>
        )}
      </Field>
    </>
  );
}

export default renderTextField;
