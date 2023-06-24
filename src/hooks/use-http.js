import { useState, useEffect } from "react";

const useHttp = () => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const loadData = async (url) => {

        setIsLoading(true);
        setError(null);
        const response = await fetch(url);
        try {

            if (!response.ok) {
                throw Error('Something went wrong......');
            }

            const resJson = await response.json();
            setData(resJson);

        } catch (err) {
            setError(err.message);
        }
        setIsLoading(false);
    }

    return { data, isLoading, error, loadData };

};

export default useHttp;