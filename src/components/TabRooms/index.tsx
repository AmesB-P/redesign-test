"use client"
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {pages} from "@/data/pages";
import Button from "@mui/material/Button";
import {tabRooms} from "@/data/tabRooms";

export default function ScrollableTabsButtonForce() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{maxWidth : "100%" , marginTop : 2, bgcolor: 'background.paper' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                aria-label="scrollable force tabs example"
            >
                {tabRooms.map((name , index) => (
                    <Tab
                        key={index}
                        label={name}
                        // onClick={handleCloseNavMenu}
                        // sx={{ my: 2, color: 'white', display: 'block' }}
                    />
                ))}
            </Tabs>
        </Box>
    );
}
