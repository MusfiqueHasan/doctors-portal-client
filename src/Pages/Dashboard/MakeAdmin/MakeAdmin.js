import { Alert, Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const { token } = useAuth()
    const handleAdminEmail = (e) => {
        setEmail(e.target.value)
        e.preventDefault()
    }
    const header = {

    }

    const handleAdminSubmit = (e) => {
        axios.put('https://dry-ocean-42817.herokuapp.com/users/admin', { email }, { headers: { 'authorization': `Bearer ${token}` } })
            .then(res => {
                if (res.data.modifiedCount) {
                    setSuccess(true)
                }
            })
        e.preventDefault()
    }
    return (
        <div>
            <h2>Make admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    onBlur={handleAdminEmail}
                    label="email"
                    type="email"
                    variant="standard"
                />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin Successfully</Alert>}
        </div>
    );
};

export default MakeAdmin