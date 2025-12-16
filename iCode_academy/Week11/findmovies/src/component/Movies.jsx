import React, { useEffect, useState } from 'react'
import { MovieCard } from './MovieCard';

export const Movies = ({movieId}) => {
        const [movies, setMovies] = useState([]);

    useEffect(() => {
      async function fetchMovies(){
        try{
            const result = [];

            for(let id of movieId){
                const fetchedMovies = await fetch(`https://imdb.iamidiotareyoutoo.com/search?tt=${id}`);
                const data = await fetchedMovies.json();
                result.push(data);
                // console.log(result);
                
            }
            setMovies(result);
        } catch(err) {
            console.error(err);
        }
      }
      fetchMovies();

    }, [movieId]);
    


  return (

    
    <div className='flex gap-4 overflow-y-auto'>
        {
            movies.map((movie, index) => {
                return <MovieCard movie={movie} key={index} />
            })
        }

    </div>
  )
}
