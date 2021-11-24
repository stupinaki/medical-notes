import './SummaryCards.css';
import React from "react";
import {Fab, } from "@mui/material";
import {Link, useParams} from "react-router-dom";
import {Card} from "./Card";
import {AppRoutes} from "../App/constants/routes";
import {useDoctorData} from "../../hooks/useDoctorData";

export default function SummaryCards({ doctors }) {
    const { id } = useParams();
    const doctor = useDoctorData(id, doctors);
    const doctorVisits = React.useMemo(() =>  doctor?.visits || [], [doctor]);
    const onDeleteHandle = React.useCallback(() => console.log('deleted!'), []);
    return (
        <div className='wrapper'>
            <div className= 'SummaryCards'>
                <div className= 'SummaryCards__header'>
                    {doctor?.value.toUpperCase()}
                </div>
                <div className= 'SummaryCards__cards'>
                    {doctorVisits.map(visit => (
                        <Card
                            visit={visit}
                            onDelete={onDeleteHandle}
                        />
                    ))}

                </div>
                <div className= 'SummaryCards__fab'>

                    <Link to={AppRoutes.DOCTORS}>
                        <Fab color="primary" aria-label="add" className='fab__back'>
                            🠔
                        </Fab>
                    </Link>
                    <Link to={AppRoutes.DOCTOR_VISIT_FORM.replace(':id', doctor.id)} className='fab__add'>
                        <Fab color="primary" aria-label="add">
                            +
                        </Fab>
                    </Link>

                </div>

            </div>
        </div>
    )
}
