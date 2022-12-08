import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography, Grid, Button } from '@mui/material';

const serverendpoint = "http://127.0.0.1:5000/classify?"

export default function Classifier() {

    const [review, setReview] = useState("Review Text");
    const [rating, setRating] = useState();

    const getData = async () => {
        const params = { review }
        const paramsString = new URLSearchParams(params).toString()
        const response = await fetch(serverendpoint + paramsString)
        const data = await response.json();

        console.log(review)
        console.log(data)
        setRating(data);
    }

    return (
        <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{ marginTop: '20px' }} >
            <Grid item xs={12}>
                <Typography sx={{ textAlign: "center" }}>Type or paste in a review below, then click on Submit to classify its sentiment.</Typography>
            </Grid>
            <Grid item xs={12}>
                <Box sx={{ textAlign: "center" }}>
                    <TextField
                        sx={{ width: 500 }}
                        id="outlined-multiline-flexible"
                        multiline
                        onChange={(e) => { setReview(e.target.value) }}
                        rows={10}
                    />
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box sx={{ textAlign: "center" }}>
                    <Button onClick={() => { getData() }} variant="outlined">Submit</Button>
                </Box>
            </Grid>
            <Grid item>
                <Typography sx={{ color: rating === 'positive' ? 'green' : rating === 'negative' ? 'red' : 'gray' }} variant="h5">{rating}</Typography>
            </Grid>

        </Grid>
    )
}
