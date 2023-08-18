import { GifCard } from "./GifCard"

function RenderGifs({gifs, loading, lastElementRef}) {
    
    return (
        
        <section className='columns-1 md:columns-2 lg:columns-3 justify-items-center gap-3 mt-5'>
        { loading ? <div>loading...</div> : 
            gifs?.map((gif, i) => {
                return (
                    <GifCard 
                        key={i} 
                        url={gif.images.downsized.url} 
                        title={gif.title} 
                        img={gif.images.downsized.url}
                        gifs={gifs}
                        lastElementRef={lastElementRef}
                        i={i}
                    />
                )
            })
        }
    </section>
    )
}

export { RenderGifs } 