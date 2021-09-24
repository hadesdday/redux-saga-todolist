import { withStyles } from "@material-ui/styles";
import { TextField } from "@material-ui/core";
import styles from "./styles";
import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

function LoginPage(props) {
  const { classes } = props;
  return (
    <>
      <div className={classes.background}>
        <div className={classes.login}>
          <Card className={classes.root}>
            <CardContent>
              <form>
                <div className="text-xs-center pb-xs">
                  <Typography variant="caption">
                    Welcome to the app . Login now !
                  </Typography>
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
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Login
                </Button>
                <div className="pt-1 text-md-center">
                  <Link to="/signup">
                    <Button type="button">
                      Don't have an account ? Create one
                    </Button>
                  </Link>
                </div>
              </form>
            </CardContent>
            <Typography>Or</Typography>
            <CardActions>
              <div className={classes.socialLogin}>
                <Button className={classes.googleBtn}>
                  Login with Google +
                </Button>
                <Button className={classes.facebookBtn}>
                  Login with Facebook
                </Button>
              </div>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
}

export default withStyles(styles)(LoginPage);
