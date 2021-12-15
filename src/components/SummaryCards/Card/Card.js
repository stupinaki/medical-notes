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
                <h4 className="value__title"> Дата приёма:</h4>
                <p className="value__text">{receiptDate}</p>
                <h4 className="value__title"> ФИО врача:</h4>
                <p className="value__text">{doctorName}</p>
                <h4 className="value__title"> Адрес клиники:</h4>
                <p className="value__text"> {addressClinic}</p>
                <h4 className="value__title"> Наименование клиники:</h4>
                <p className="value__text">{clinicName}</p>
                <h4 className="value__title"> Анализы:</h4>
                <p className="value__text">{analyzes}</p>
                <h4 className="value__title"> Диагноз:</h4>
                <p className="value__text">{diagnosis}</p>
                <h4 className="value__title"> Лечение:</h4>
                <p className="value__text">{treatment}</p>
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

