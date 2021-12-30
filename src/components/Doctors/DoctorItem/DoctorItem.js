import React from "react";
import {ReactComponent as TrashBin} from "../../../icons/trash-2.svg";
import './DoctorItem.css';


export default function DoctorItem({doctor, onClick, onDelete}) {

    // todo change 'wrapper' class name
    return (
        <div className='wrapper'>
            <div
                className='doctorItem'
                onClick={() => onClick(doctor.id)}
            >
                <div className='doctorItem__value'>
                    {doctor.value}
                </div>
                <div
                    className='doctorItem__delete'
                    onClick={(e) => {
                        e.stopPropagation();
                        setTimeout(onDelete(doctor.id), 5000);
                    }}
                >
                    <TrashBin className={'delete__icon'}/>
                </div>
            </div>

        </div>
    )
}
