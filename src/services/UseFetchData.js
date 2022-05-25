import { useEffect, useState} from 'react';
import axios from 'axios';

const useFetchData = (pokemon) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(pokemon);
                setData(response);
                console.log(response)
            } catch (error) {
                console.error(error)
            }
            setLoading(false);
        };
        setTimeout(()=>{
            fetchData();
        }, 1000)

    }, []);

    return {
        data,
        loading,
    };
};

export default useFetchData;