import React from 'react'

export const MovieCard = ({movie}) => {
    return (
        <div className='w-[171px] text-white shrink-0'>
            <div>
                {
                    movie ? (
                        <img src={movie.short.image} alt='' className='h- [258px] w-full object-cover' />
                    ) : (
                        <div className='h-[258px] w-full'>
                            No Image
                        </div>
                    )
                }
            </div>
            <div>
                <p>
                    {
                        movie ? (
                            movie.short.name
                        ) : (
                            "No title"
                        )
                    }
                </p>
            </div>

        </div>
    )
}
