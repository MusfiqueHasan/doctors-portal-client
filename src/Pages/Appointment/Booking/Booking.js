import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess }) => {
    const { name, time, space } = booking
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (

        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper sx={{ py: 5, textAlign: 'center' }} elevation={3} >
                    <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {space} spaces available
                    </Typography>
                    <Button variant="contained" onClick={handleBookingOpen}>Book Appointment</Button>
                </Paper>
            </Grid>
            <BookingModal
                date={date}
                booking={booking}
                handleBookingClose={handleBookingClose}
                openBooking={openBooking}
                setBookingSuccess={setBookingSuccess}
            />
        </>

    );
};

export default Booking;