import React from 'react';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';


const bannerBg = {
    background: `url(${bg})`,

}


const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 450

}
const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{ ...verticalCenter, textAlign: 'left' }}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ my:3, fontSize: 13, color: 'gray', fontWeight: 300 }}>
                            Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter} >
                    <img src={chair} alt="" style={{ width: '400px' }} />
                </Grid>

            </Grid>
        </Container>

    );
};

export default Banner;