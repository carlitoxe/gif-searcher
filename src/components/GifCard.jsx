function GifCard({url, title}) {
    return (
        <div className="gif-container">
            <img src={url} alt={title} className="gif-img" />
        </div>
    )
}

export { GifCard }