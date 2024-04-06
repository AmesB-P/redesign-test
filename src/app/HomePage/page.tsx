import {FC} from "react";
import TabRooms from "../../components/TabRooms"
import Highlight from "../../components/Highlight"
import PantipPick from "@/components/PantipPick";

const HomePage: FC = () => {
    return (
        <>
            <Highlight/>
            <PantipPick/>
            <TabRooms/>
        </>
    )
}
export default HomePage