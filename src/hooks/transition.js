import React, {useState} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {Doctors} from "../components/Doctors";
import {DoctorItem} from "../components/Doctors/DoctorItem";


export default function Transition() {
    const [doctors, setDoctors] = useState([]);
    return (
            <Doctors>
                <TransitionGroup className="doctors__list">
                    {doctors.map(({id}) => (
                        <CSSTransition
                            key={id}
                            timeout={500}
                            classNames="doctor"
                        >
                            <DoctorItem/>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </Doctors>
    );
}

