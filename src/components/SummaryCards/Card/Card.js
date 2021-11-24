import './Card.css';
import React from "react";

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
                <h3> Дата приёма</h3>
                <p>{receiptDate}</p>
                <h3> ФИО врача</h3>
                <p>{doctorName}</p>
                <h3> Адрес клиники</h3>
                <p> {addressClinic}</p>
                <h3> Наименование клиники</h3>
                <p>{clinicName}</p>
                <h3> Анализы</h3>
                <p>{analyzes}</p>
                <h3> Диагноз</h3>
                <p>{diagnosis}</p>
                <h3> Лечение</h3>
                <p>{treatment}</p>
            </div>

            <div
                className='card__delete'
                onClick={(e) => {
                    e.stopPropagation();
                    onDelete(visit.id)
                }}
            >
                🗑
            </div>
        </div>
    )
}

