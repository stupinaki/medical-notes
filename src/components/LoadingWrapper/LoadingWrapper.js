import React from 'react';
import {useDoctorsContext} from "../../contexts/DoctorsContext";
import {useVisitsContext} from "../../contexts/VisitsContext";
import './LoadingWrapper.css'


function LoadingWrapper({children}) {
    const {loading: visitLoading} = useVisitsContext();
    const {loading: doctorsLoading} = useDoctorsContext();
    if (doctorsLoading || visitLoading) {
        return (
            <div className={'loading__wrapper'}>
                <div className='loading__outside'>
                    <div className="loading__inside"/>
                </div>
            </div>
        )
    }
    return children;
}

export default LoadingWrapper;