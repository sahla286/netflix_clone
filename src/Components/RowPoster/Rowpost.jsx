import React, { useEffect, useState } from 'react';
import './Rowpost.css';
import { imageUrl, API_KEY } from '../../Constant/constant';
import axios from '../../Axios';
import Youtube from 'react-youtube';

function Rowpost(props) {
  const [movies, setMovie] = useState([]);
  const [urlId, setUrlId] = useState('');

  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data);
        setMovie(response.data.results);
      })
      .catch((err) => {
        console.error('Error fetching movies:', err);
      });
  }, [props.url]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    console.log(id);
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          const videoKey = response.data.results[0].key;
          setUrlId(videoKey);
        } else {
          console.log('No videos available');
        }
      })
      .catch((err) => {
        console.error('Error fetching movie videos:', err);
      });
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            onClick={() => handleMovie(obj.id)}
            className={props.isSmall ? 'smallposter' : 'poster'}
            src={`${imageUrl + obj.backdrop_path}`}
            alt="poster"
            key={obj.id}
          />
        ))}
      </div>
      {urlId && <Youtube videoId={urlId} opts={opts} />}
    </div>
  );
}

export default Rowpost;
