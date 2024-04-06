import {FC} from "react";
import TabRooms from "../../components/TabRooms"
import Highlight from "../../components/Highlight"
import PantipPick from "@/components/PantipPick";
import PantipHitz from "@/components/PantipHitz";
import PantipRealtime from "@/components/PantipRealtime";

const HomePage: FC = () => {
    return (
        <>
            <Highlight/>
            <PantipRealtime/>
            <PantipPick/>
            <PantipHitz/>
            <TabRooms/>
        </>
    )
}
export default HomePage