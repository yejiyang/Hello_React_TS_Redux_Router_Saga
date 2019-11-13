import React from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import { Dispatch } from "redux";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { State } from "../../reducers";
import { setLogin, setUserName, setUserPWD } from "../../actions/login";

const mapStateToProps = (state: State) => ({
  isLogin: state.login.isLogin
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSetLogin: () => dispatch(setLogin()),
  onSetUserName: (userNaame: string) => dispatch(setUserName(userNaame)),
  onSetUserPWD: (userNaame: string) => dispatch(setUserPWD(userNaame))
});

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  toPublic: {
    margin: theme.spacing(3, 0, 2)
  }
}));
interface SignInProps {
  onSetLogin: () => void;
  isLogin: boolean;
  onSetUserName: (userName) => void;
  onSetUserPWD: (userPwd) => void;
}
function SignIn(props: SignInProps) {
  const classes = useStyles();
  const history = useHistory();

  const handelBtn = () => {
    props.onSetLogin();
    history.push("/");
  };
  const handulePulicPage = () => {
    history.push("/login");
  };
  const userNameInputChange = e => {
    props.onSetUserName(e.target.value);
  };
  const userPWDInputChange = e => {
    props.onSetUserPWD(e.target.value);
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            onChange={userNameInputChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            onChange={userPWDInputChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handelBtn}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      {/* <Grid container className={classes.toPublic}>
        <Grid item xs>
          <Link onClick={handulePulicPage} href="#" variant="body2">
            go to public page
          </Link>
        </Grid>
      </Grid> */}

      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
