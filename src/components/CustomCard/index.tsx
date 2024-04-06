"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';


export default function CustomCard({children , title , style} : {children : React.ReactNode , title : string , style? : any }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={style ?? { width : "80%" , maxWidth: "100%" }}>
            <CardHeader
                title={title}
                sx={{bgcolor : "#2d2a49" , color : "white"}}
            />
            <CardContent>
                {children}
            </CardContent>
        </Card>
    );
}
