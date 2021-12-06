
import React, {useCallback} from "react";
import {LocalStorage} from "../components/App/constants/localStorage";


function delay(fn, ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const result = fn();
                resolve(result);
            } catch (e) {
                reject(e);
            }
        }, ms);
    })
}

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
        setDoctors(doctors => {
            const result = doctors.filter(d => d.id !== id);
            localStorage.setItem(LocalStorage.DOCTORS, JSON.stringify(result));
            return result;
        });
    }, []);

    React.useEffect(() => {
        const fn = async () => {
            await delay(getDoctors,1000);
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
        [doctors, loading, updateDoctor]
    );
}
