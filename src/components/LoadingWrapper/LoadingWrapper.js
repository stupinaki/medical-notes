import React from 'react';
import {useDoctorsContext} from "../../contexts/DoctorsContext";
import './LoadingWrapper.css'


function LoadingWrapper({children}) {
    const { loading } = useDoctorsContext();
    if (loading) {
        return (
            <div className='loading'>
                <div className="loading__inside">

                </div>
            </div>
        )
    }
    return children;
}

export default LoadingWrapper;