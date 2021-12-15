import React from "react";
import { Routes, Route, HashRouter} from "react-router-dom";
import {VisitDetailsForm} from "../VisitDetailsForm";
import {DoctorForm} from "../DoctorForm";
import {AppRoutes} from "./constants/routes";
import {SummaryCards} from "../SummaryCards";
import './App.css';
import {NotFoundPage} from "../NotFoundPage";
import {Doctors} from "../Doctors";
import {DoctorsContextProvider} from "../../contexts/DoctorsContext";
import {LoadingWrapper} from "../LoadingWrapper";
import {VisitsContextProvider} from "../../contexts/VisitsContext";

function App() {

    return (
        <div className="App">
            <HashRouter>
                <DoctorsContextProvider>
                    <VisitsContextProvider>
                        <LoadingWrapper>
                            <Routes>
                                <Route exact path={AppRoutes.DOCTOR_VISIT_FORM} element={<VisitDetailsForm/>}/>
                                <Route exact path={AppRoutes.DOCTOR} element={<SummaryCards/>}/>
                                <Route exact path={AppRoutes.DOCTOR_FORM} element={<DoctorForm/>}/>
                                <Route exact path={AppRoutes.DOCTORS} element={<Doctors/>}/>
                                <Route path="*" element={<NotFoundPage/>}/>
                            </Routes>
                        </LoadingWrapper>
                    </VisitsContextProvider>
                </DoctorsContextProvider>

            </HashRouter>
        </div>

    );
}

export default App;
