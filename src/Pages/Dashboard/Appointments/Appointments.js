import React, { useState, useEffect } from 'react';
import useAuth from '../../../hooks/useAuth'
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
const Appointments = ({ date }) => {
    const { user, token } = useAuth()
    const [appointments, setAppointments] = useState([])

    useEffect(() => {

        const url = `https://dry-ocean-42817.herokuapp.com/appointments?email=${user.email}&date=${date.toLocaleDateString()}`
        axios.get(url, { headers: { 'authorization': `Bearer ${token}` } })
            .then(res => {
                setAppointments(res.data)
            })


    }, [date, user.email, token])
    return (
        <TableContainer component={Paper}>
            <Table sx={{}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Patient Name</TableCell>
                        <TableCell align="right">Time</TableCell>
                        <TableCell align="right">Service</TableCell>
                        <TableCell align="right">Action</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {appointments.map((row) => (
                        <TableRow
                            key={row._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.patientName}
                            </TableCell>
                            <TableCell align="right">{row.time}</TableCell>
                            <TableCell align="right">{row.serviceName}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Appointments