import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {LocalStorage} from "../App/constants/localStorage";
import {AppRoutes} from "../App/constants/routes";
import './DoctorForm.css';
import {Fab} from "@mui/material";
import useDoctorsData from "../../hooks/useDoctorsData";
import {useUpdateDoctor} from "../../hooks/useUpdateDoctor";

// function getDoctorsFromLS() {
//     const doctorsStr = localStorage.getItem(LocalStorage.DOCTORS);
//     const doctorsValue = JSON.parse(doctorsStr);
//     return Array.isArray(doctorsValue) ? doctorsValue : [];
// }
function validateDoctorForm(value, doctors) {
    if (!value) {
        return '*Обязательное поле';
    }
    const isDuplicate = doctors.some(doctor => doctor.value.toLowerCase() === value.toLowerCase());
    if(isDuplicate){
        return '*Ошибка! Такой врач уже существует';
    }
    const checkSpace = value.trim();
    if(checkSpace === ''){
        return '*Недопустимое название врача';
    }
    return '';
}

export default function DoctorForm({ doctors }) {
    const navigate = useNavigate();
    const updateDoctor = useUpdateDoctor();
    const [message, setMessage] = React.useState('');
    const [value, setValue] = React.useState('');
    const handleChange = React.useCallback((e) => {
        setValue(e.target.value);
        setMessage('');
    }, []);
    const handleSubmit = React.useCallback((e) => {
        // todo move to hook
        e.preventDefault();
        const message = validateDoctorForm(value, doctors);
        if (message) {
            setMessage(message);
            return;
        }
        debugger;
        updateDoctor({ value });
        // navigate(AppRoutes.DOCTORS);
        }, [value, navigate, updateDoctor, doctors]);
    return (
        <div className="doctorForm">
            <form className='doctorForm__form' onSubmit={handleSubmit}>
                <input
                    value={value}
                    onChange={handleChange}
                    className='doctorForm__input'
                    placeholder="Введите врача"
                    name="doctorName"
                />
                <div className='doctorForm__message'>
                    {message}
                </div>
                <button className='doctorForm__saveButton' type="submit">
                    Сохранить
                </button>
                <div className='doctorForm__back'>
                    <Link to={AppRoutes.DOCTORS}>
                        <Fab color="primary" aria-label="add" className='back__fab'>
                            🠔
                        </Fab>
                    </Link>
                </div>
            </form>
        </div>
    )
}
