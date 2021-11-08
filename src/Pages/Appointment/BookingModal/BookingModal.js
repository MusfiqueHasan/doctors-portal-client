import { Fade, Modal, Typography, Backdrop, TextField, Button } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const BookingModal = ({ openBooking, handleBookingClose, booking, date, setBookingSuccess }) => {
    const { name, time } = booking
    const { user } = useAuth()

    const [bookingInfo, setBookingInfo] = useState({
        patientName: user.displayName,
        email: user.email,
        phone: ''
    })

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo }
        newInfo[field] = value;
        setBookingInfo(newInfo)
    }

    const handleBookingSubmit = e => {
        const appointment = {
            ...bookingInfo,
            time,
            serviceName: name,
            date: date.toLocaleDateString()
        }


        axios.post('https://dry-ocean-42817.herokuapp.com/appointments', appointment)
            .then(res => {
                if (res.data.insertedId) {
                    setBookingSuccess(true)
                    handleBookingClose()
                }
            })
        e.preventDefault()
    }
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography style={{ textAlign: 'center' }} id="transition-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <form onSubmit={handleBookingSubmit}>
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={time}
                            size="small"
                        />
                        <TextField

                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="patientName"
                            onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                            size="small"
                        />
                        <TextField

                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="email"
                            onBlur={handleOnBlur}
                            defaultValue={user.email}
                            size="small"
                        />
                        <TextField

                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="phone"
                            onBlur={handleOnBlur}
                            defaultValue="Phone number"
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={date.toDateString()}
                            size="small"
                        />
                        <Button type="submit" variant="contained">Submit</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;