import {useContext} from "react";
import {TabRoomsContext} from "@/context/TabRoomsContext";



export const useTabRooms = () => {
    const context = useContext(TabRoomsContext);

    if (!context) {
        throw new Error("useThemeContext must be used inside the ThemeProvider");
    }

    return context
};