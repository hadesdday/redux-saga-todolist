import { withStyles } from "@material-ui/styles";
import { Checkbox, FormControlLabel, TextField } from "@material-ui/core";
import styles from "./styles";
import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

function SignUpPage(props) {
  const { classes } = props;
  return (
    <>
      <div className={classes.background}>
        <div className={classes.signup}>
          <Card className={classes.root}>
            <CardContent>
              <form>
                <div className="text-xs-center pb-xs">
                  <Typography variant="caption">Sign Up</Typography>
                </div>
                <TextField
                  id="email"
                  label="Email"
                  className={classes.textField}
                  fullWidth
                  margin="normal"
                  type="email"
                />
                <TextField
                  id="password"
                  label="Password"
                  className={classes.textField}
                  fullWidth
                  margin="normal"
                  type="password"
                />
                <TextField
                  id="cPassword"
                  label="Confirm Password"
                  className={classes.textField}
                  fullWidth
                  margin="normal"
                  type="password"
                />
                <FormControlLabel
                  control={<Checkbox value="agree" />}
                  label="I agree with Conditions of Use and Privacy Notice."
                  className={classes.fullWidth}
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Sign Up
                </Button>
                <div className="pt-1 text-md-center">
                  <Link to="/login">
                    <Button type="button">
                      Already have an account ? Login now
                    </Button>
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default withStyles(styles)(SignUpPage);
