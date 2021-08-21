import React, { useContext, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import firebase from 'firebase/app'
import "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';





function Copyright() {

    
   
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Go To Home
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const [logInUser, setLogInUser] = useContext(UserContext);
  const [error,setError] = useState("")
  const classes = useStyles();
  const [user, setUser] = useState({
    email:'',
    password:'',
  })

  const history = useHistory();
const location = useLocation();
const { from } =  { from: { pathname: "/" } };
  const [loggedInUser, setLoggedInUser] = useState([]);
  const handleSignIn = (e) => {
    firebase.auth().signInWithEmailAndPassword(user.email,user.password)
    .then(res => {
      console.log(res)
        user = res.user;
        storeAuthToken();
        setLoggedInUser(user);
      })
      .catch((error) => {
        if (error.message ==="Assignment to constant variable."){
          alert("login successfully")
          history.replace(from);
          return error.message
        }
        var errorMessage = error.message;
        console.log(errorMessage)
        setError(errorMessage)
      });
    e.preventDefault();


    const storeAuthToken = () => {
      firebase.auth().currentUser.getIdToken(true)
      .then(function(idToken) {
        console.log("token",idToken)
        sessionStorage.setItem('token', idToken);
        
      })
      .catch(function(error) {
      });
    }
    }

   
    const is_valid_email = email =>  /(.+)@(.+){2,}\.(.+){2,}/.test(email); 
    const hasNumber = input => /\d/.test(input);
    const handleOnChange = (e) => {
      const newUserInfo = {
          ...user
        };
      let isValid = true;
      if(e.target.name === 'email'){
          isValid = is_valid_email(e.target.value);
        }
        if(e.target.name === "password"){
          isValid = e.target.value.length > 8 && hasNumber(e.target.value);
        }
        newUserInfo[e.target.name] = e.target.value;
        newUserInfo.isValid = isValid;
        setUser(newUserInfo);
  }

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
        <form onSubmit={(e)=>handleSignIn(e)} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            onBlur={handleOnChange}
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onBlur={handleOnChange}
            autoComplete="current-password"
          />
          {
            error && <p>{error}</p>
          }
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}