import React, {useState, useEffect} from "react";
import axios from'./axios';
import requests from './requests.js';
import './Banner.css';

const base_url = "https://image.tmdb.org/t/p/original";

function Banner() {
    const [movie,setMovie] = useState([]);
    useEffect(() =>{
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length-1)]);
            return request;
        }
        fetchData();
    }, []);
  return (
     <header className="banner" 
        style={{
            backgroundSize:"cover",
            backgroundImage:  `url("${base_url}${movie?.backdrop_path}")`,
            backgroundPosition:"center center",
            position:"alternative"
        }}>
         <div className="banner__contents">
            <h1 className="banner__title">{movie?.name || movie?.name || movie?.original_name}</h1>
            <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
            </div>

            <h1 className="banner__description">{movie?.overview}</h1>
         </div>
        <div className="banner__fadeBottom"></div>
    </header>
  );
}

export default Banner;