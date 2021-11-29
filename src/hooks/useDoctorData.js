import {useMemo} from "react";
import {useParams} from "react-router-dom";
import {useDoctorsContext} from "../contexts/DoctorsContext";

export function useDoctorData() {
    const { id } = useParams();
    const {doctors} = useDoctorsContext();
    return useMemo(() => doctors.find(d => d.id === +id), [id, doctors]);
}
