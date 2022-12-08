import React from 'react'
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import Classifier from './Classifier';

export default function ProjectScreen() {

    return (
        <>
            <Typography sx={{ textAlign: 'center' }} variant="h3">Video Game Review Classifer</Typography>
            <Typography gutterBottom sx={{ textAlign: 'center' }} variant="h6">CS410 Text Information Systems Final Project by Nate Smolczyk</Typography>
            <Divider></Divider>
            <Classifier />

        </>
    )
}
