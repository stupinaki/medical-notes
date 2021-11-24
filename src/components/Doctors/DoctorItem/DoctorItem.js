import React from "react";
import './DoctorItem.css';

/**
 * плашка с 1 врачем
 */
export default function DoctorItem({doctor, onClick, onDelete}) {
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
                        onDelete(doctor.id);
                    }}
                >
                    🗑
                </div>
            </div>

        </div>
    )
}
