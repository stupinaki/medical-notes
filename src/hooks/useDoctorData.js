import {useMemo} from "react";

export function useDoctorData(id, doctors) {
    return useMemo(() => doctors.find(d => d.id === +id), [id, doctors]);
}
