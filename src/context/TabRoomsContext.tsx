"use client"

import React, {createContext, useState } from "react";

type TabRoomsContextTypes = {
    value: number;
    setValue: (value: number) => void ;
};
export const TabRoomsContext = createContext<TabRoomsContextTypes | null>(null);

export const TabRoomsProvider =({children}: Readonly<{
    children: React.ReactNode;
}>)=>{
    const [value, setValue] = React.useState(0);
    return (
        <TabRoomsContext.Provider value={{value , setValue}}>
            {children}
        </TabRoomsContext.Provider>
    )
}