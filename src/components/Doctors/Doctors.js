import useDoctorsData from "../../hooks/useDoctorsData";
import {Link, useNavigate} from "react-router-dom";
import {AppRoutes} from "../App/constants/routes";
import {Fab} from "@mui/material";
import React from "react";
import {DoctorItem} from "./DoctorItem";
import './Doctors.css'

export default function Doctors({ doctors }) {
    const navigate = useNavigate();
    // todo
    const {deleteDoctor} = useDoctorsData();
    /**
     * функция для замены id в адресе страницы на id нужного врача
     * @type {function(*=): *}
     */
    const onClickHandle = React.useCallback((id) =>
            navigate(AppRoutes.DOCTOR.replace(':id', id)),
        [navigate]
    );
    const onDeleteHandle = React.useCallback((id) => {
        const newDoctors = doctors.filter(doctor => doctor.id !== id);
        deleteDoctor(newDoctors);
    }, [doctors, deleteDoctor])

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
                            onDelete={onDeleteHandle}
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
