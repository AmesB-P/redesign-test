import CustomCard from "@/components/CustomCard";
import Tabs from "@mui/material/Tabs";
import {highlightData} from "@/data/highlightData";
import React from "react";
import {List , ListItem  , ListItemText ,ListItemAvatar ,Avatar  ,Box , IconButton} from "@mui/material";
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import CommentIcon from '@mui/icons-material/Comment';
import Grid2 from "@mui/material/Unstable_Grid2";

const PantipHitz = () => {

    type listTypes = {
        title : string,
        username : string,
        totalComment : number
    }

    const itemList : listTypes[] = [
        {
            title : "test 1",
            username : "user 1",
            totalComment : 10
        },{
            title : "test 2",
            username : "user 2",
            totalComment : 10
        },{
            title : "test 3",
            username : "user 3",
            totalComment : 10
        },{
            title : "test 4",
            username : "user 4",
            totalComment : 10
        },{
            title : "test 5",
            username : "user 5",
            totalComment : 10
        },
    ]
    return (
        <CustomCard style={{ margin : 1, width : { xs : "100%" } ,maxWidth: "100%"}} title={"Pantip Hitz"}>
            <Box sx={{width: "100%", bgcolor: 'background.paper'}}>
                <List sx={{maxWidth: "100%", bgcolor: 'background.paper' }}>
                    <Grid2 container>
                        {
                            itemList.map((item , index) => (
                                <Grid2 xs={12} >
                                    <ListItem
                                        secondaryAction={
                                            <IconButton edge="end" aria-label="comments">
                                                <CommentIcon />
                                                {item.totalComment}
                                            </IconButton>
                                        }
                                        disablePadding
                                    >
                                        <ListItemAvatar sx={{display : {xs : "none" , sm : "flex"}}}>
                                            <Avatar>
                                                <ImageIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={item.title} secondary={item.username} />
                                    </ListItem>
                                </Grid2>
                            ))
                        }
                    </Grid2>
                </List>
            </Box>
        </CustomCard>
    )
}

export default PantipHitz