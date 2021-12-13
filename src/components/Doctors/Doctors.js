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
        <div className="doctors">
            <div className="doctors__wrapper">
                {!doctors.length && (
                    <div className="doctors__welcome"> Добрый день! <br/> Вам необходимо добавить врачей</div>
                )}

                <div className={'list__title'}> Общий список врачей</div>
                <div className='doctors__list'>
                    {doctors.map(doctor => (
                        <DoctorItem
                            key={doctor.value}
                            onClick={onClickHandle}
                            doctor={doctor}
                            onDelete={deleteDoctor}
                        />
                    ))}
                </div>
                <div className='doctors__fab'>
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
