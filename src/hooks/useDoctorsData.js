import React, {useCallback} from "react";
import {LocalStorage} from "../components/App/constants/localStorage";
import delay from "../function/delay";


export default function useDoctorsData() {
    const [loading, setLoading] = React.useState(true);
    const [doctors, setDoctors] = React.useState([]);

    const getDoctors = React.useCallback(() => {
        const doctorsStr = localStorage.getItem(LocalStorage.DOCTORS);
        try {
            setDoctors(JSON.parse(doctorsStr) || []);
        } catch (e) {
            setDoctors([]);
        }
        setLoading(false);
    }, []);

    const updateDoctor = useCallback(doctor => {
        setDoctors(doctors => {
            const otherDoctors = doctors.filter(d => d.id !== doctor.id);
            if (otherDoctors.length === doctors.length) {
                const maxId = otherDoctors.reduce((acc, d) => acc > d.id ? acc : d.id, 0);
                doctor.id = maxId + 1;
            }
            const result = [...otherDoctors, doctor];
            localStorage.setItem(LocalStorage.DOCTORS, JSON.stringify(result));
            return result;
        });
    }, []);

    const deleteDoctor = React.useCallback(id => {
        //работает, но не обновляет стейт, как результат если удалить всех врачей вместе с их деталями посещений
        //а потом добавить новых и такими же id, то при открытии их карточек там отобразятся старые детали по старым врачам
        //вероятно потому что хоть в localStorage мы данные и заменили, но стейт мы не обновляли
        const visitsStr = localStorage.getItem(LocalStorage.DETAILS);
        const visits = JSON.parse(visitsStr) || {};
        const newVisits = Object.assign(visits);
        delete newVisits[id];

        setDoctors(doctors => {
            const result = doctors.filter(d => d.id !== id);
            localStorage.setItem(LocalStorage.DOCTORS, JSON.stringify(result));
            localStorage.setItem(LocalStorage.DETAILS, JSON.stringify(newVisits))
            return result;
        });
    }, []);

    React.useEffect(() => {
        const fn = async () => {
            await delay(getDoctors, 1000);
            window.addEventListener('storage', getDoctors)
        }
        fn();
        return () => {
            window.removeEventListener('storage', getDoctors)
        }
    }, [getDoctors])

    return React.useMemo(
        () => ({
            doctors,
            loading,
            updateDoctor,
            deleteDoctor,
            setDoctors
        }),
        [doctors, loading, updateDoctor, deleteDoctor]
    );
}
