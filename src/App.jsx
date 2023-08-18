import { useState, useEffect } from 'react'
import { useGetItemsAPI } from './hooks/useApi';
import './App.css'
import { RenderGifs } from './components/RenderGifs'

function App() {
    const [gifs, getGifs, loadingGifs, hasMore] = useGetItemsAPI();
    
    // const navigate = useNavigate();
    const [query, setQuery] = useState([]);
    // const { language, texts } = useContext(UserContext);
    const q = query

    // const request = async () => {
    //   getGifs(`search`, { q })
    // }

    // useEffect(() => {
    //   request()
    // }, [q])

    console.log(gifs);

    const onSubmit = (e) => {
        e.preventDefault();
        if (query) {
          getGifs(`search`, { q })
        }

        // if (search) {
        //     navigate(`/results?search=${search}`)
        // } else {
        //     navigate('/')
        // }
    }


  
    return (
      <>
      <a href="/"><h1 className='font-semibold text-white text-3xl'>Search GIFs</h1></a>
      {/* //     <div className="search-form-container md:px-4 w-full flex justify-center mt-4 md:mt-0 px-3 md:px-0">
      //     <form className="search-form flex rounded-full p-1 h-[35px] bg-transparent outline-2 border border-gray-600 items-center" onSubmit={onSubmit}>
      //         <input value={search} onChange={e => setSearch(e.target.value.toLowerCase())} className="search-input rounded-full bg-transparent w-full px-4 focus:bg-gray-600 w-full placeholder:text-slate-500" type="text" placeholder="Search for movies..." />
      //         <button type="submit" className="search-button pb-0.5" onClick={() => setValue(search)}> 
      //             <svg width="1em" height="1em" viewBox="0 0 20 20" className="w-[18px] h-[18px] mr-3 align-middle text-gray-300 shrink-0 group-betterhover:hover:text-gray-70"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" strokeWidth="2" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      //         </button>
      //     </form>
      // </div> */}
      <form onSubmit={onSubmit} className="px-8 mt-4 md:px-0 flex justify-center">
    {/* <label
      htmlFor="default-search"
      className="mb-2 text-sm font-medium sr-only text-white"
    >
      Search
    </label> */}
    <div className="relative max-w-[302px]">
      {/* <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div> */}
      <input
        value={query} 
        onChange={e => setQuery(e.target.value.toLowerCase())}
        className="block w-full px-8 py-1.5 pl-5 border rounded-full bg-transparent border-gray-700  placeholder-gray-500  text-white focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
        placeholder="Search GIFs"
       
      />
      <button
    type="submit"
    onClick={() => setQuery(query)}
    className="absolute top-0 right-0 p-2 px-2.5 h-full text-white bg-blue-600 rounded-r-full border border-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none  hover:bg-blue-800 focus:ring-blue-800"
  >
    <svg
      className="w-4 h-4"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
      />
    </svg>
    <span className="sr-only">Search</span>
  </button>
  
   
    </div>
  </form>
  
  <RenderGifs gifs={gifs} loading={loadingGifs}/>
  


  </>
  
  
  
  
      )
}

export default App
