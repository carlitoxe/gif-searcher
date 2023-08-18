import axios from "axios";
import { useState } from "react";

const API_KEY = 'BLQPJBUKtAf37DC8MlyK9cIhipqrS0ZN';
const api = axios.create({
        baseURL: 'https://api.giphy.com/v1/gifs/',  
        params: {
            'api_key': API_KEY,
        }
})

function useGetItemsAPI() {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const getItems = async (path, params = {}) => {
        setLoading(true);
        await api.get(path, { params: {...params} })
                 .then(res => {
                    setPage(page + 1);
                    console.log(res);
                    setItems(res.data)
                    if (res.data.page === res.data.total_pages) return setHasMore(false);
                 })
                 .catch(err => console.error(err))
                 .finally(() => setLoading(false))

    }

    return [items, getItems, loading, hasMore]

}

export { useGetItemsAPI }