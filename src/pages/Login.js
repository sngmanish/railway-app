


import { Button, CircularProgress, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "./Login.css";
import config from "../config/index"
import Header from "../components/Header"



const Login = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPostRequestRunningCurrently, setIsPostRequestRunningCurrently] = useState(false);
  const history = useHistory();

  
  const login = async (formData) => {

    // const requestURL= config.loginURL;

    // const userName = process.env.REACT_APP_Username;
    // const password = process.env.REACT_APP_Password;

    if (validateInput(formData)) {
      setIsPostRequestRunningCurrently(true);
      try {
        const postURL = `${config.endpoint}/login`;
        const postData = {
          auth:{
            username: formData.username,
            password: formData.password
          }
        };
        const postRequestResponse = await axios.post(postURL,{}, postData);
        const successMessage = "Logged in successfully";
        enqueueSnackbar(successMessage, { variant: 'success' });
        const { access_token, token_type, expires_in } = postRequestResponse.data;
        console.log(postRequestResponse)
        persistLogin(access_token, expires_in);
        history.push('/');
      } catch (error) {
        if (error.response) {
          console.log(error.response);
          const backendErrorMessage = error.response.data.message;
          enqueueSnackbar(backendErrorMessage, { variant: 'error' });
        } else {
          const errorMessage = "Something went wrong. ";
          enqueueSnackbar(errorMessage, { variant: 'error' });
        }
      }
      setIsPostRequestRunningCurrently(false);
    }
  };

  
  const validateInput = (data) => {
    const isUsernameEmpty = (data.username.length === 0 );
    if (isUsernameEmpty) {
      const usernameEmptyMessage = "Username is a required field";
      enqueueSnackbar(usernameEmptyMessage, { variant: 'warning' });
      return false;
    }
    

    const isPasswordEmpty = (data.password.length === 0 );
    if (isPasswordEmpty) {
      const passwordEmptyMessage = "Password is a required field";
      enqueueSnackbar(passwordEmptyMessage, { variant: 'warning' });
      return false;
    }

    const isWrongUserName =(data.username !== config.Username);
    if (isWrongUserName) {
      const usernameEmptyMessage = "Username Provided is Wrong";
      enqueueSnackbar(usernameEmptyMessage, { variant: 'warning' });
      return false;
    }

    const isWrongPassword =(data.password !== config.Password);
    if (isWrongPassword) {
      const usernameEmptyMessage = "Password Provided is Wrong";
      enqueueSnackbar(usernameEmptyMessage, { variant: 'warning' });
      return false;
    }

    

    return true;
  };



  const persistLogin = (access_token, expires_in) => {
    localStorage.setItem('token', access_token.toString());
    
    localStorage.setItem('time', expires_in);
  };

  return (
    <>
    <Header/>
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      minHeight="100vh"
    >
      
      <Box className="content">
        <Stack spacing={2} className="form">
          <h2 className="title">Login</h2>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            title="Username"
            name="username"
            placeholder="Enter Username"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            id="password"
            variant="outlined"
            label="Password"
            name="password"
            type="password"
            fullWidth
            placeholder="Enter a password with minimum 6 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {
            isPostRequestRunningCurrently
              ?
              (
                <Box display="flex" width={384} height={36.5} alignItems="center" justifyContent="center">
                  <CircularProgress size={36.5} />
                </Box>
              )
              :
              (
                <Button className="button" variant="contained" onClick={() => login({ username, password })}>
                  Login to Indian Railways 
                </Button>
              )
          }
        </Stack>
      </Box>
      
    </Box>
    </>
  );
};

export default Login;

