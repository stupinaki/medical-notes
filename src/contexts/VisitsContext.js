import React, {useContext} from "react";
import useVisitsByAllDoctors from "../hooks/useVisitsByAllDoctors";

const VisitsContext = React.createContext({});

export function useVisitsContext() {
    const context = useContext(VisitsContext);
    if (context === undefined) {
        throw new Error('Ошибка')
    }
    return context;
}

export function VisitsContextProvider({children}) {
    const visitsData = useVisitsByAllDoctors();
    return (
        <VisitsContext.Provider value={visitsData}>
            {children}
        </VisitsContext.Provider>
    )
}