import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {useTabRooms} from "@/hooks/useTabRooms";
import {tabRooms} from "@/data/tabRooms";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
            key={`tabpanel-${index}`}
        >
            {value === index && (
                <Box key={index} sx={{ p: 3 , color : "white" }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default function TabTopic() {

    const{value} = useTabRooms()

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: '#2d2a49', display: 'flex', height: 500 }}
        >
            {
                tabRooms.map((item , index) =>(
                    <TabPanel value={value} index={index}>
                        {item}
                    </TabPanel>
                ))
            }
        </Box>
    );
}
