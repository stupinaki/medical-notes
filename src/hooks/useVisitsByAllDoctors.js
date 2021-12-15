import React from "react";
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
        localStorage.setItem(localStorage.DETAILS, JSON.stringify(visits));
    }, []);
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
            updateVisitsByAllDoctors,
        }),
        [visitsByAllDoctors, loading, updateVisitsByAllDoctors]
    );
}

