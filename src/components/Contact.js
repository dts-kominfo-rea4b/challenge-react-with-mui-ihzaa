// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import { Avatar, Box, Grid, Typography } from '@mui/material';
import React from 'react';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
        <>
            <Grid
                sx={{
                    backgroundColor: '#58b2db',
                    maxWidth: 400,
                    padding: "10px"
                }}
                container wrap="nowrap" spacing={2} >
                <Grid item>
                    <Avatar src={data.photo}></Avatar>
                </Grid>
                <Grid item xs zeroMinWidth>
                    <Typography noWrap>{data.name}</Typography>
                    <Typography noWrap>{data.phone}</Typography>
                    <Typography noWrap>{data.email}</Typography>
                    <hr></hr>
                </Grid>
            </Grid>
        </>);
};

export default Contact;
