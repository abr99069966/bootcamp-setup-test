import React, { useEffect, useState } from 'react'

export const MovieDetail = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() =>  {
        async function fetchMovie(){
            try{
                const result = await fetch(`https://imdb.iamidiotareyoutoo.com/search?tt=${id}`);
                const data = await result.json();
                setMovie(data);
            } catch (error){
                console.error(error);
            }
        }
        fetchMovie();
    }, [movie]);
    if (!movie){
        return <div className='text-white p-6'></div>;
    }
  return (
    <div className='min-h-screen text-white'>
        <div>
            <span className='text-sm font-semibold text-yellow-400'></span>
            <h1 className='mt-2 max-w-5xl text-4xl'>{movia.short.name}</h1>
            <div>
                <span>{movie.main.releaseDate.year}</span>
            </div>
            
        </div>

    </div>
  )
}
