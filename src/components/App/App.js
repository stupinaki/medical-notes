import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {VisitDetailsForm} from "../VisitDetailsForm";
import {DoctorForm} from "../DoctorForm";
import {AppRoutes} from "./constants/routes";
import {SummaryCards} from "../SummaryCards";
import './App.css';
import {NotFoundPage} from "../NotFoundPage";
import {Doctors} from "../Doctors";
import {DoctorsContextProvider} from "../../contexts/DoctorsContext";
import {LoadingWrapper} from "../LoadingWrapper";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <DoctorsContextProvider>
                    <LoadingWrapper>
                        <Routes>
                            <Route path={AppRoutes.DOCTOR_VISIT_FORM} element={<VisitDetailsForm/>}/>
                            {/*<Route path={AppRoutes.LIST_OF_DOCTORS} element={<ListOfDoctors/>}/>*/}
                            {/*<Route path={AppRoutes.SUMMARY_CARDS} element={<SummaryCards/>}/>*/}

                            <Route path={AppRoutes.DOCTOR} element={<SummaryCards/>}/>
                            <Route path={AppRoutes.DOCTOR_FORM} element={<DoctorForm/>}/>
                            <Route path={AppRoutes.DOCTORS} element={<Doctors/>}/>
                            <Route path="*" element={<NotFoundPage/>}/>
                        </Routes>
                    </LoadingWrapper>
                </DoctorsContextProvider>

            </BrowserRouter>
        </div>

    );
}

export default App;
