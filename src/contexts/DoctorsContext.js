import React, {useContext} from "react";
import useDoctorsData from "../hooks/useDoctorsData";

const DoctorsContext = React.createContext({});

export function useDoctorsContext() {
    const context = useContext(DoctorsContext);
    if (context === undefined) {
        throw new Error('Ошибка')
    }
    return context;
}

export function DoctorsContextProvider({children}) {
    const doctorsData = useDoctorsData();

    return (
        <DoctorsContext.Provider value={doctorsData}>
            {children}
        </DoctorsContext.Provider>
    )
}