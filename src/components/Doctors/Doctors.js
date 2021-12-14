import {Link, useNavigate} from "react-router-dom";
import {AppRoutes} from "../App/constants/routes";
import Fab from "../Fab/Fab";
import React from "react";
import {DoctorItem} from "./DoctorItem";
import './Doctors.css'
import {useDoctorsContext} from "../../contexts/DoctorsContext";
import {CSSTransition, TransitionGroup} from 'react-transition-group';


export default function Doctors() {
    const {doctors, deleteDoctor} = useDoctorsContext();
    const navigate = useNavigate();
    const onClickHandle = React.useCallback((id) =>
            navigate(AppRoutes.DOCTOR.replace(':id', id)),
        [navigate]
    );

    if (!doctors.length) {
        return (
            <div className="welcomePage">
                {!doctors.length && (
                    <div className="welcomePage__welcome"> Добрый день! <br/> Вам необходимо добавить врачей</div>
                )}
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
                                onDelete={deleteDoctor}
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



