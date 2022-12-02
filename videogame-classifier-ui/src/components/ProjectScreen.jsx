import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Data from './Data';
import Classifier from './Classifier';

export default function ProjectScreen() {

    const [tab, setTab] = useState(0)

    return (
        <>
            <Typography sx={{ textAlign: 'center' }} variant="h3">Video Game Review Classifer</Typography>
            <Typography sx={{ textAlign: 'center' }} variant="h6">CS410 Text Information Systems Final Project by Nate Smolczyk</Typography>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs centered value={tab} onChange={(event, newVal) => { setTab(newVal) }} aria-label="basic tabs example">
                    <Tab label="The Data" />
                    <Tab label="The Classifier" />
                </Tabs>
            </Box>
            {
                tab === 0 ? <Data /> : <Classifier />
            }
        </>
    )
}
