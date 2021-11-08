import {  Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const SingleService = (props) => {

    const { name, description, img } = props.service
    return (

        <Grid item xs={4} sm={4} md={4} >

            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 ,textAlign: 'center' }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>

                    <Typography variant="h5" component="div" >
                        {name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {description}

                    </Typography>
                </CardContent>

            </Card>


        </Grid>

    );
};

export default SingleService;