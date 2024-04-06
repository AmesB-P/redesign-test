"use client"
import CustomCard from "@/components/CustomCard";
import React from "react";
import { Card, CardMedia, CardContent, Typography} from '@mui/material'
import {highlightData} from "@/data/highlightData";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

interface itemProps {
    img: string
    title: string
}

function Item({props}: { props: itemProps }) {
    return (
        <Tab label={
            <Card sx={{width: "100%", marginRight: 1, marginBottom: 1}}>
                <CardMedia
                    component="img"
                    height="194"
                    image={props.img}
                    alt={props.title}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {props.title}
                    </Typography>
                </CardContent>
            </Card>
        }/>

    )
}

const Highlight = () => {
    return (
        <CustomCard title={"Highlight"} style={{ margin : 1, maxWidth: "100%"}}>
            <Box sx={{maxWidth: "100%", marginTop: 2, bgcolor: 'background.paper'}}>
                <Tabs
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="scrollable force tabs example"
                >
                    {
                        highlightData.map((item, index) => <Item key={index} props={item}/>)
                    }
                </Tabs>
            </Box>
        </CustomCard>
    )
}

export default Highlight