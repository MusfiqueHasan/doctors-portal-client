import React, { useState } from 'react';
import login from '../../../images/login.png'
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Login = () => {
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth()
    const [loginData, setLoginData] = useState({})

    const location = useLocation()
    const history = useHistory()

    const handleOnchange = e => {
        const field = e.target.name
        const value = e.target.value
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault()
    }

    const handleGoogleSignIn=()=>{
        signInWithGoogle(location, history)
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8, textAlign: 'center' }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onBlur={handleOnchange}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnchange}
                            variant="standard"
                        />
                        <Button
                            sx={{ width: '75%', m: 1 }}
                            variant="contained"
                            type="submit"
                        >
                            Login
                        </Button>
                        <NavLink to="register" style={{ textDecoration: 'none' }}>
                            <Button

                                variant="text"
                            >
                                new user? please register
                            </Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {  user?.email && <Alert severity="success">Logged in successfully</Alert> }
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <p>--------------------------------------</p>
                    <Button variant="contained" onClick={handleGoogleSignIn}>
                       Google Sign In
                    </Button>

                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} alt="" style={{ width: '100%' }} />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;

