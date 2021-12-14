import './Card.css';
import React from "react";
import {ReactComponent as TrashBin} from "../../../icons/trash-2.svg";


/**
 * плашка с 1 посещением
 */
export default function Card({visit, onDelete}) {
    const {
        receiptDate,
        doctorName,
        clinicName,
        analyzes,
        diagnosis,
        treatment,
        addressClinic,
    } = visit;

    return (
        <div className='card'>
            <div className="card__value">
                <h4> Дата приёма:</h4>
                <p>{receiptDate}</p>
                <h4> ФИО врача:</h4>
                <p>{doctorName}</p>
                <h4> Адрес клиники:</h4>
                <p> {addressClinic}</p>
                <h4> Наименование клиники:</h4>
                <p>{clinicName}</p>
                <h4> Анализы:</h4>
                <p>{analyzes}</p>
                <h4> Диагноз:</h4>
                <p>{diagnosis}</p>
                <h4> Лечение:</h4>
                <p>{treatment}</p>
            </div>

            <div
                className='card__delete'
                onClick={(e) => {
                    e.stopPropagation();
                    onDelete(visit.id)
                }}
            >
                <TrashBin className={'delete__icon'}/>
            </div>
        </div>
    )
}

