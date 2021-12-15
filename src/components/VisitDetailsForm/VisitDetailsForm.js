import React, {useCallback, useState} from "react";
import {VisitDetailsInput} from "./VisitDetailsInput/VisitDetailsInput";
import './VisitDetailsForm.css';
import {useNavigate, useParams, Link} from "react-router-dom";
import {AppRoutes} from "../App/constants/routes";
import {LocalStorage} from "../App/constants/localStorage";
import Fab from "../Fab/Fab";
import useVisitsByAllDoctors from "../../hooks/useVisitsByAllDoctors";
import {useVisitsContext} from "../../contexts/VisitsContext";

export default function VisitDetailsForm() {
    const {id} = useParams();
    const {updateVisitsByAllDoctors} = useVisitsContext();
    const navigate = useNavigate();

    const [value, setValue] = useState({});
    const handleChange = useCallback((name, text) => {
        setValue(currentValue => ({...currentValue, [name]: text}));
    }, [setValue]);


    const handleSubmit = React.useCallback((e) => {
        e.preventDefault();

        const detailsStr = localStorage.getItem(LocalStorage.DETAILS);
        const details = JSON.parse(detailsStr) || {};
        const doctorDetails = details[id] || [];
        const arrId = doctorDetails.map(detail => detail.id);
        const maxId = arrId.length === 0 ? -1 : Math.max(...arrId);
        const newDetail = {id: maxId + 1, ...value};
        const result = {...details, [id]: [...doctorDetails, newDetail]};

        updateVisitsByAllDoctors(result)
        navigate(AppRoutes.DOCTOR.replace(':id', id));

    }, [navigate, value, id])


    return (
        <div className="visitDetailsForm">
            <form className='visitDetailsForm__form' onSubmit={handleSubmit}>
                <VisitDetailsInput
                    name={'receiptDate'}
                    value={value.receiptDate}
                    onChange={handleChange}
                    placeholder={'Введите дату приема'}
                    type={'date'}
                    autoFocus={true}
                />
                <br/>
                <VisitDetailsInput
                    name={'doctorName'}
                    value={value.doctorName}
                    onChange={handleChange}
                    placeholder={'Введите ФИО врача'}
                />
                <br/>
                <VisitDetailsInput
                    name={'addressClinic'}
                    value={value.addressClinic}
                    onChange={handleChange}
                    placeholder={'Введите адрес клиники'}
                />
                <br/>
                <VisitDetailsInput
                    name={'clinicName'}
                    value={value.clinicName}
                    onChange={handleChange}
                    placeholder={'Введите наименование клиники'}
                />
                <br/>
                <VisitDetailsInput
                    name={'analyzes'}
                    value={value.analyzes}
                    onChange={handleChange}
                    placeholder={'Введите анализы'}
                />
                <br/>
                <VisitDetailsInput
                    name={'diagnosis'}
                    value={value.diagnosis}
                    onChange={handleChange}
                    placeholder={'Введите диагноз'}
                />
                <br/>
                <VisitDetailsInput
                    name={'treatment'}
                    value={value.treatment}
                    onChange={handleChange}
                    placeholder={'Введите лечение'}
                />
                <br/>
                <button className='visitDetailsForm__saveButton' type="submit">
                    Сохранить
                </button>
            </form>

            <Link to={AppRoutes.DOCTOR.replace(':id', id)}>
                <Fab className='visitDetailsForm__backButton'>
                    🠔
                </Fab>
            </Link>
        </div>
    )
}
