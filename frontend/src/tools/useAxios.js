import { useEffect, useState } from "react";

const useAxios = (dataService, info) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const resp = await dataService(info);
                if (resp.status !== 200) {
                    setIsError(true);
                    setIsLoading(false);
                    return;
                }
                setData(resp.data.data);
            } catch (error) {
                setIsError(true);
                console.log(error);
            };
            setIsLoading(false);
        }
        getData();
    }, [dataService, info]);
    return { isLoading, isError, data };
}

export default useAxios;