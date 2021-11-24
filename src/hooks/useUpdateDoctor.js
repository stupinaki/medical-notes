import {useCallback} from "react";
import {LocalStorage} from "../components/App/constants/localStorage";
import useDoctorsData from "./useDoctorsData";

export function useUpdateDoctor() {
    const { setDoctors } = useDoctorsData();
    return useCallback(doctor => {
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
    }, [setDoctors])
}
