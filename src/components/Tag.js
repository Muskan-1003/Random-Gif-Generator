import React, { useState } from 'react'

import Spinner from './Spinner'
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag= () => {
  const [tag,setTag]=useState('');
    // const [gif, setGif]=useState('');
    // const [loading,setLoading]=useState('false');
    


    // async function fetchData() {
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     try {
    //         setLoading(true);
    //         const { data } = await axios.get(url);
    //         const imageSource = data.data.images.downsized_large.url;
    //         setGif(imageSource);
    //         setLoading(false);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    
    // useEffect(()=>{ 
    //     fetchData();
    // },[])
    const{gif,loading,fetchData}=useGif();

    function clickHandler(){
        fetchData(tag);

    }
    function changeHandler(event){
      setTag(event.target.value)

    }
  return (
    <div className='w-1/2  bg-green-500 rounded-lg border mx-auto  border-black flex flex-col
    items-center gap-y-5 mt-[15px] overflow-hidden'>
      <h1 className='mt-[15px] text-2xl underline upppercase font-bold'>Random Gif </h1>
      {
        loading?(<Spinner/>): (<img src={gif} width="450"  alt="Random Gif" />)
      }
      <input className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
       onChange={changeHandler}
       value={tag}/>
      
      <button onClick={clickHandler} className='w-11/12 bg-white text-lg py-2  font-bold rounded-lg mb-[20px]'>
        Generate
      </button>
    </div>
  )
}

export default Tag;
