import { GifCard } from "./GifCard"

function RenderGifs({gifs, loading}) {
    
    return (
        
        <section className='gifs grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 justify-items-center gap-3'>
        { loading ? <div>loading...</div> : 
            gifs?.data?.map((gif, i) => {
                return (
                    <GifCard url={gif.images.downsized.url} title={gif.title} key={i} />
                )
            })
        }
    </section>
    )
}

export { RenderGifs } 