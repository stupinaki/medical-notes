import React from "react";
import {LocalStorage} from "../components/App/constants/localStorage";

function useVisitsData(){
    const [visits, setVisits] = React.useState({});
    const [loading, setLoading] = React.useState(true);

    const getVisits = React.useCallback(() => {
        const visitsStr = localStorage.getItem(LocalStorage.DETAILS);
        try{
            setVisits(JSON.parse(visitsStr) || {});
        }
        catch (e){
            setVisits([])
        }
        setLoading(false);
    }, []);

    const updateVisits = React.useCallback( visit => {

    }, [])

}
