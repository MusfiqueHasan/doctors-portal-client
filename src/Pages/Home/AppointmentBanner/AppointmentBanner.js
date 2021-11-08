import { Button, Container, Grid, Typography } from '@mui/material';
import { Box, textAlign } from '@mui/system';
import React from 'react';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'

const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45,58,74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 150

}

const AppointmentBanner = () => {
    return (
        <Container style={appointmentBanner}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img
                            src={doctor}
                            style={{ width: 400, marginTop: '-110px', }}
                            alt=""
                        />

                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center' }}>
                        <Box >
                            <Typography variant="h6" sx={{mb:3}} style={{ color: '#5CE7ED' }}>
                                Appointment

                            </Typography>
                            <Typography variant="h4" style={{ color: 'white' }} >
                                Make an appointment today
                            </Typography>
                            <Typography variant="h6" sx={{my:5}} style={{ color: 'white', fontSize: '14', fontWeight: 300 }}>
                                Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.
                            </Typography>
                            <Button variant="contained" style={{backgroundColor: '#5CE7ED' }}>Learn more</Button>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </Container>
    );
};

export default AppointmentBanner;