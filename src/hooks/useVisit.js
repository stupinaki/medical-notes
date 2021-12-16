import {useVisitsContext} from "../contexts/VisitsContext";
import {useMemo} from "react";


export function useVisitsByDoctor(id) {
    const { visitsByAllDoctors } = useVisitsContext();
    return useMemo(() => visitsByAllDoctors[id] || [], [id, visitsByAllDoctors]);
}


