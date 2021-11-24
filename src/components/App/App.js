import React from "react";
import {BrowserRouter, Routes, Route, useNavigate, useParams} from "react-router-dom";
import {VisitDetailsForm} from "../VisitDetailsForm";
import {DoctorForm} from "../DoctorForm";
import {AppRoutes} from "./constants/routes";
import {SummaryCards} from "../SummaryCards";
import './App.css';
import {NotFoundPage} from "../NotFoundPage";
import {Doctors} from "../Doctors";
import {useDoctorData} from "../../hooks/useDoctorData";
import useDoctorsData from "../../hooks/useDoctorsData";

function App() {
    const {doctors, loading} = useDoctorsData();

    if (loading) {
        // todo переделать
        return "Loading";
    }
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={AppRoutes.DOCTOR_VISIT_FORM} element={<VisitDetailsForm doctors={doctors}/>}/>
                    {/*<Route path={AppRoutes.LIST_OF_DOCTORS} element={<ListOfDoctors/>}/>*/}
                    {/*<Route path={AppRoutes.SUMMARY_CARDS} element={<SummaryCards/>}/>*/}

                    <Route path={AppRoutes.DOCTOR} element={<SummaryCards doctors={doctors}/>}/>
                    <Route path={AppRoutes.DOCTOR_FORM} element={<DoctorForm doctors={doctors} />}/>
                    <Route path={AppRoutes.DOCTORS} element={<Doctors doctors={doctors} />}/>
                    <Route path="*" element={<NotFoundPage />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
