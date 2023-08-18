import { useEffect, useRef } from "react"
import { lazyLoading } from "../hooks/lazyLoading";

function GifCard({url, title, img, gifs, lastElementRef, i}) {
    const imgRef = useRef(null);

    useEffect(() => {
        if (imgRef.current) {
            // console.log(imgRef);
            lazyLoading(imgRef)
        }

    }, [img])

    return (
        <div className="gif-container mb-6 flex justify-center mr-3 bg-gray-400 rounded-lg" ref={i === gifs.length - 1 ? lastElementRef: null}>
            <img data-src={url} alt={title} className="gif-img rounded-lg w-full" ref={imgRef} />
        </div>
    )
}

export { GifCard }