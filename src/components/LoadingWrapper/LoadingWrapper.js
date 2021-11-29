import React from 'react';
import {useDoctorsContext} from "../../contexts/DoctorsContext";

function LoadingWrapper({children}) {
    const { loading } = useDoctorsContext();
    if (loading) {
        return (
            <div>
                Loading...
            </div>
        )
    }
    return children;
}

export default LoadingWrapper;