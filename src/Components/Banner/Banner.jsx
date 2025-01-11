import React from 'react'
import './Banner.css'
import { useEffect } from 'react'
import axios from '../../Axios'
import { API_KEY } from '../../Constant/constant'
import { useState } from 'react'
import { imageUrl } from '../../Constant/constant'

function Banner() {
    const [movie,setMovie]=useState()
    
    // useEffect(()=>{
    //     axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
    //         console.log(response.data.results[0]);
    //         setMovie(response.data.results[0])
            
    //     })
    // },[])

    useEffect(() => {
        // Fetch the movies
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
            .then((response) => {
                const movies = response.data.results;
                // Select a random movie
                const randomIndex = Math.floor(Math.random() * movies.length);
                setMovie(movies[randomIndex]);
            });
    }, []);
  return (
    <div style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : ''})`}} className='banner'>
        <div className="content">
        <h1 className="title">{movie ? movie.title : " "}</h1>

            <div className="buttons">
                <button className="button">Play</button>
                <button className="button">My list</button>
            </div>
            <h1 className="desc">{movie ? movie.overview : ""} </h1>
        </div>
      <div className="fade"></div>
    </div>
  )
}

export default Banner
