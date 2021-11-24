import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {AppRoutes} from "../App/constants/routes";

/**
 * как перейти на эту страницу?
 * при указани несуществующего адреса сначала появилась welcomePage на пару секунд, а следом основная с докторами
 * @returns {JSX.Element}
 * @constructor
 */
export default function NotFoundPage() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate(AppRoutes.DOCTORS)
    }, [navigate])
    return (
        <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
        </main>
    )
}
