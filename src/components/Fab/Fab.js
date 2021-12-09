import React from "react";
import './Fab.css'


export default function Fab({className, children}){

    return (
        <button color="primary" aria-label="add" className={`fab ${className || ''}`}>
            {children}
        </button>

    )
}