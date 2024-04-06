import {FC} from "react";
import TabRooms from "../../components/TabRooms"
import Highlight from "../../components/Highlight"
import PantipPick from "@/components/PantipPick";
import PantipHitz from "@/components/PantipHitz";
import PantipRealtime from "@/components/PantipRealtime";
import Grid2 from "@mui/material/Unstable_Grid2";

const HomePage: FC = () => {
    return (
        <>
            <Highlight/>
            <Grid2 container spacing={2} sx={{paddingRight : {xs : 2 , sm : 0}}}>
                <Grid2 xs={12}>
                    <PantipRealtime/>
                </Grid2>
                <Grid2 xs={12} sm={6}>
                    <PantipPick/>
                </Grid2>
                <Grid2 xs={12} sm={6}>
                    <PantipHitz/>
                </Grid2>
            </Grid2>
            <TabRooms/>
        </>
    )
}
export default HomePage