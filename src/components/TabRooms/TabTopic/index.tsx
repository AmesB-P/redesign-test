import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
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
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function TabTopic() {

    const{value} = useTabRooms()

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
        >
            {
                tabRooms.map((item , index) =>(
                    <TabPanel value={value} index={index}>
                        {item}
                    </TabPanel>
                ))
            }
            {/*<TabPanel value={value} index={0}>*/}
            {/*    Item One*/}
            {/*</TabPanel>*/}
            {/*<TabPanel value={value} index={1}>*/}
            {/*    Item Two*/}
            {/*</TabPanel>*/}
            {/*<TabPanel value={value} index={2}>*/}
            {/*    Item Three*/}
            {/*</TabPanel>*/}
            {/*<TabPanel value={value} index={3}>*/}
            {/*    Item Four*/}
            {/*</TabPanel>*/}
            {/*<TabPanel value={value} index={4}>*/}
            {/*    Item Five*/}
            {/*</TabPanel>*/}
            {/*<TabPanel value={value} index={5}>*/}
            {/*    Item Six*/}
            {/*</TabPanel>*/}
            {/*<TabPanel value={value} index={6}>*/}
            {/*    Item Seven*/}
            {/*</TabPanel>*/}
        </Box>
    );
}
