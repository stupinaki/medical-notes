import React, {useCallback} from "react";
import delay from "../function/delay";
import {LocalStorage} from "../components/App/constants/localStorage";


export default function useVisitsByAllDoctors() {
    const [loading, setLoading] = React.useState(true);
    const [visitsByAllDoctors, setVisitsByAllDoctors] = React.useState({});
    const getVisitsByAllDoctors = React.useCallback(() => {
        const visitsStr = localStorage.getItem(LocalStorage.DETAILS);
        try {
            setVisitsByAllDoctors(JSON.parse(visitsStr) || {});
        } catch (e) {
            setVisitsByAllDoctors({});
        }
        setLoading(false);
    }, []);

    const updateVisitsByAllDoctors = React.useCallback(visits => {
        setVisitsByAllDoctors(visits);
        localStorage.setItem(LocalStorage.DETAILS, JSON.stringify(visits));
    }, []);

    const updateVisitsByOneDoctor = React.useCallback((doctorId, visits) => {
        updateVisitsByAllDoctors({
            ...visitsByAllDoctors,
            [doctorId]: visits
        });
    }, [visitsByAllDoctors, updateVisitsByAllDoctors]);

    const deleteVisitsByDoctorId = useCallback((doctorId) => {
        updateVisitsByAllDoctors({ ...visitsByAllDoctors, [doctorId]: [] })
    }, [updateVisitsByAllDoctors, visitsByAllDoctors]);

    React.useEffect( () => {
        const fn = async () => {
            await delay(getVisitsByAllDoctors, 1000)
            window.addEventListener('storage', getVisitsByAllDoctors)
        }
        fn();

        return () => {
            window.removeEventListener('storage', getVisitsByAllDoctors)
        }
    }, [getVisitsByAllDoctors]);

    return React.useMemo(
        () => ({
            visitsByAllDoctors,
            loading,
            deleteVisitsByDoctorId,
            updateVisitsByOneDoctor,
            updateVisitsByAllDoctors,
        }),
        [visitsByAllDoctors, loading, updateVisitsByAllDoctors, updateVisitsByOneDoctor, deleteVisitsByDoctorId]
    );
}

