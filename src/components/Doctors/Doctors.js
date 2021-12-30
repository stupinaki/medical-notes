import React, {useCallback} from "react";
import {Link, useNavigate} from "react-router-dom";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {useDoctorsContext} from "../../contexts/DoctorsContext";
import {useVisitsContext} from "../../contexts/VisitsContext";
import {AppRoutes} from "../App/constants/routes";
import {DoctorItem} from "./DoctorItem";
import Fab from "../Fab/Fab";
import './Doctors.css'


export default function Doctors() {
    const {doctors, deleteDoctor} = useDoctorsContext();
    const {deleteVisitsByDoctorId} = useVisitsContext();
    const handleDeleteDoctor = useCallback((id) => {
        deleteDoctor(id);
        deleteVisitsByDoctorId(id)
    }, [deleteVisitsByDoctorId, deleteDoctor])
    const navigate = useNavigate();
    const onClickHandle = React.useCallback((id) =>
            navigate(AppRoutes.DOCTOR.replace(':id', id)),
        [navigate]
    );

    if (!doctors.length) {
        return (
            <div className="welcomePage">
                    <div className="welcomePage__welcome"> Добрый день! <br/> Вам необходимо добавить врачей</div>
                <div className='welcomePage__fab'>
                    <Link to={AppRoutes.DOCTOR_FORM}>
                        <Fab color="primary" aria-label="add">
                            +
                        </Fab>
                    </Link>
                </div>

            </div>
        );

    }
    return (
        <div className="doctors">
            <div className="doctors__wrapper">
                <div className={'list__title'}> Общий список врачей</div>
                <TransitionGroup
                    component={'div'}
                    className="doctors__list"
                >
                    {doctors.map(doctor => (
                        <CSSTransition
                            key={doctor.id}
                            timeout={500}
                            classNames="list__doctor"
                        >
                            <DoctorItem
                                key={doctor.value}
                                onClick={onClickHandle}
                                doctor={doctor}
                                onDelete={handleDeleteDoctor}
                            />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
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



