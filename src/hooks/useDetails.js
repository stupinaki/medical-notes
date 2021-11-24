import React from "react";

export default function useDetails() {
    const [loading, setLoading] = React.useState(true);
    const [details, setDetails] = React.useState({});

    const getDetails = React.useCallback(() => {
        const detailsStr = localStorage.getItem(localStorage.DETAILS);
        try {
            setDetails(JSON.parse(detailsStr) || {});
        } catch (e) {
            setDetails({});
        }
        setLoading(false);
    }, []);

    const updateDetails = React.useCallback(details => {
        setDetails(details);
        localStorage.setItem(localStorage.DETAILS, JSON.stringify(details));
    }, []);

    React.useEffect( () => {
        const fn = async () => {
            // todo вынести в функцию которая принимает функцию резолв и таймаут, ЗАЧЕМ?
            const promise = new Promise(resolve => {
                setTimeout(() => resolve(), 1000);
            });
            await promise;

            getDetails();
            window.addEventListener('storage', getDetails)
        }
        fn();

        return () => {
            window.removeEventListener('storage', getDetails)
        }
    }, [getDetails]);

    return React.useMemo(
        () => ({
            details,
            loading,
            updateDetails,
        }),
        [details, loading, updateDetails]
    );
}

