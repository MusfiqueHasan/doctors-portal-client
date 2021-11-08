import React, { useState } from 'react';
import login from '../../../images/login.png'
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Register = () => {
    const { user, registerUser, isLoading, authError } = useAuth()
    const history = useHistory()
    const [loginData, setLoginData] = useState({})
    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value
        console.log(value)
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData)
        setLoginData(newLoginData)
    }
    const handleSubmit = e => {

        if (loginData.password !== loginData.confirmPassword) {
            alert('your password did not match')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault()
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8, textAlign: 'center' }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Register
                    </Typography>
                    {
                        !isLoading && <form onSubmit={handleSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Name"
                                name="name"
                                type="text"
                                onBlur={handleOnBlur}
                                variant="standard"
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                type="email"
                                onBlur={handleOnBlur}
                                variant="standard"
                            />

                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Password"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                variant="standard"
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Retype Your Password"
                                type="password"
                                name="confirmPassword"
                                onBlur={handleOnBlur}
                                variant="standard"
                            />
                            <Button
                                sx={{ width: '75%', m: 1 }}
                                variant="contained"
                                type="submit"
                            >
                                Register
                            </Button>
                            <NavLink to="login" style={{ textDecoration: 'none' }}>
                                <Button

                                    variant="text"
                                >
                                    Already registered? please login
                                </Button>
                            </NavLink>
                        </form>
                    }
                    {isLoading && <CircularProgress />}
                    {
                        user?.email && <Alert severity="success">User created successfully</Alert>
                    }
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} alt="" style={{ width: '100%' }} />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;