import { MovieSharp } from '@material-ui/icons'
import axios from './axios'
import React, { useState,useEffect } from 'react'
import './Results.css'
import VideoCard from './VideoCard'
import FlipMove from "react-flip-move"


function Results({selectedOption}) {
    const[movies,setMovies]=useState([]);
    
    useEffect(()=>
    {
      //run this code when the compnent mounts/loads
      async function fetchData(){

        
        const request=await axios.get(selectedOption);

            setMovies(request.data.results);
        console.log(request);  
    }

      fetchData();
    
    },[selectedOption]);
    
    return (
        <div className="results">
         {
            movies.map((movie)=>{
                return <VideoCard key={movie.id} movie={movie}/>
            })
            
         }
        
        
       

        </div>
    )
}

export default Results
