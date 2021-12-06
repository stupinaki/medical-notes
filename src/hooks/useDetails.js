import React from "react";

//возможно удалить т.к. отдельно не будет деталей, они будут в массиве докторов
function delay(fn, ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const result = fn();
                resolve(result);
            } catch (e) {
                reject(e);
            }
        }, ms);
    })
}

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
            await delay(getDetails, 1000)
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

