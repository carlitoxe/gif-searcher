import { useCallback, useRef } from "react"

function useInfiniteScroll(callback, loading, end) {
    const observer = useRef();

    const lastElementRef = useCallback(
        (node) => {
        if (loading) return;

        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(
            (entries) => {
                // console.log(end);
                if(entries[0].isIntersecting && end) {
                    callback();
                }
            },
            { threshold: 0.5 }
            )
            if (node) observer.current.observe(node);
        },
        [loading, end, callback]
    )

    return lastElementRef
}

export { useInfiniteScroll }