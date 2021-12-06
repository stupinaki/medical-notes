import React, {useContext} from "react";
import useDoctorsData from "../hooks/useDoctorsData";
import {useParams} from "react-router-dom";

const VisitsContext = React.createContext({});

export function useVisitsContext() {
    const context = useContext(VisitsContext);
    if (context === undefined) {
        throw new Error('ты дурачок')
    }
    return context;
}

export function VisitsContextProvider({children}) {
    const visitsData = useVisitsData();
    const params = useParams();
    console.log('VisitsContextProvider', {visitsData, params})

    return (
        <VisitsContext.Provider value={visitsData}>
            {children}
        </VisitsContext.Provider>
    )
}