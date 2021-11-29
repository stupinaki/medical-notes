import React, {useContext} from "react";
import useDoctorsData from "../hooks/useDoctorsData";
import {useParams} from "react-router-dom";

const DoctorsContext = React.createContext({});

export function useDoctorsContext() {
    const context = useContext(DoctorsContext);
    if (context === undefined) {
        throw new Error('ты дурачок')
    }
    return context;
}

export function DoctorsContextProvider({children}) {
    const doctorsData = useDoctorsData();
    const params = useParams();
    console.log('DoctorsContextProvider', {doctorsData})

    return (
        <DoctorsContext.Provider value={doctorsData}>
            {children}
        </DoctorsContext.Provider>
    )
}