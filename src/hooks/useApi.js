import React, {useState, useEffect} from "react"
export default function useApi(id = "") {
    
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
                const results = await response.json();
                setData(results)
            } catch (error) {
                setIsError(error.message);
            } finally {
                setIsLoading(false);
            }
        }
        getData();
    }, []);
    return {data, isLoading, isError};

}