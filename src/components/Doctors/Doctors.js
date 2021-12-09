import {Link, useNavigate} from "react-router-dom";
import {AppRoutes} from "../App/constants/routes";
import Fab from "../Fab/Fab";
import React from "react";
import {DoctorItem} from "./DoctorItem";
import './Doctors.css'
import {useDoctorsContext} from "../../contexts/DoctorsContext";

export default function Doctors() {
    const {doctors, deleteDoctor} = useDoctorsContext();
    const navigate = useNavigate();
    const onClickHandle = React.useCallback((id) =>
            navigate(AppRoutes.DOCTOR.replace(':id', id)),
        [navigate]
    );

    return (
        <div className="Doctors">
            <div className="Doctors__wrapper">
                {!doctors.length && (
                    <div className="Doctors__welcome"> Привет! <br/> Добавь врачей</div>
                )}
                <div className='Doctors__list'>
                    {doctors.map(doctor => (
                        /*по аналогии сделать с формой детелей посещения*/
                        <DoctorItem
                            key={doctor.value}
                            onClick={onClickHandle}
                            doctor={doctor}
                            onDelete={deleteDoctor}
                        />
                    ))}
                </div>
                <div className='Doctors__fab'>
                    <Link to={AppRoutes.DOCTOR_FORM}>
                        <Fab color="primary" aria-label="add">
                            +
                        </Fab>
                    </Link>
                </div>
            </div>
        </div>
    );
}
