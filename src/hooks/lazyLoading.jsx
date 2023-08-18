function lazyLoading(ref) {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // console.log(entry);
            if (!entry.isIntersecting) return
            const img = entry.target;
            if (entry.isIntersecting) {
                const src = img.dataset.src;
                // console.log(img);
                img.src = src;
                // observer.unobserve(img)
            } else {
                const src = img.src
                img.setAttribute('src', src)
            }

            // img.onError = () => {
            //     img.src = noimage
            // }

            observer.unobserve(img); 
        })
    })
    observer.observe(ref.current)
    // console.log(ref.current);   
}

export { lazyLoading }