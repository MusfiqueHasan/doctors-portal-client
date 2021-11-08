import { Container, Grid } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png'
import Calender from '../../Shared/Calender/Calender';
const AppointmentHeader = ({date,setDate}) => {
    
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Calender date={date} setDate={setDate}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={chair} alt="" style={{ width: '100%' }} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;