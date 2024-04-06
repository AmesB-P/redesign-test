"use client"
import CustomCard from "@/components/CustomCard";
import React from "react";
import Carousel from 'react-material-ui-carousel'
import {Paper, Button, Card, CardMedia, CardContent, Typography} from '@mui/material'
import {highlightData} from "@/data/highlightData";
import mockUpPic from "../../assets/img/mockUpPic.jpg"
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import {tabRooms} from "@/data/tabRooms";
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
                    // src={props.img}
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
                    // value={value}
                    // onChange={handleChange}
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
            {/*<Carousel*/}
            {/*    navButtonsAlwaysVisible*/}
            {/*    indicators={false}*/}
            {/*    autoPlay={false}*/}
            {/*    animation={"slide"}*/}
            {/*>*/}
            {/*    {*/}
            {/*        highlightData.map((item , index)=> <Item key={index} props={item}/>)*/}
            {/*    }*/}
            {/*</Carousel>*/}
        </CustomCard>
    )
}

export default Highlight