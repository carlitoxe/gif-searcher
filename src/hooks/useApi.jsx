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
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    console.log(hasMore);

    const getItems = async (path, params = {}) => {
        setLoading(true);
        await api.get(path, { params: {...params} })
                 .then(res => {
                    setOffset(offset + res.data.pagination.count);
                    setItems(res.data.data)
                    console.log(res.data);
                    console.log(res.data.pagination.total_count);
                    if (res.data.pagination.count === res.data.pagination.total_count) return setHasMore(false);
                 })
                 .catch(err => console.error(err))
                 .finally(() => setLoading(false))

    }

    const getMoreItems = async (path, params = {}) => {
        setLoading(true);
        await api.get(path, { params: {offset: offset, ...params} })
                 .then(res => {
                    console.log('getMoreGifs offset', offset);
                    setItems(prevData => [...prevData, ...res.data.data]);
                    // if (res.data.page === res.data.total_pages) return setHasMore(false);
                    if (res.data.pagination.count === res.data.pagination.total_count) return setHasMore(false);
                    setOffset(offset + res.data.pagination.count);
                 })
                 .catch(err => console.error(err))
                 .finally(() => {
                    
                    setLoading(false);  
                 })

    }

    return [items, getItems, loading, getMoreItems, hasMore]

}

export { useGetItemsAPI }