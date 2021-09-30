import Image from 'next/image'
import { ThumbUpIcon } from '@heroicons/react/outline';
import { forwardRef } from 'react';
 function  Thumbnail ({ result }, ref) {
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
   
    return (
        <div ref={ref} className='group cursor-pointer p-2 transition ease-in transform  sm:hover:scale-105 hover:z-50'>
            <Image alt={result.original_title || result.title || result.name} layout="responsive" height={1080} width={1920} src={ `${BASE_URL}${result.backdrop_path || result.poster_path}` || `${result.poster_path}`}/>
            <div className='px-2'>
                <p className='truncate max-w-md' >{result.overview}  </p>
                <h2 className='mt-1 text-xl text-white transition-all duration-100 ease-in-out group-hover:font-bold '>{result.original_title || result.title || result.name}</h2>
                <p className='flex items-center opacity-0 group-hover:opacity-100'>
                    {result.media_type && `${result.media_type} •`}{" "}
                    {result.release_date || result.first_air_date} •
                    <ThumbUpIcon  className='h-5 mx-2'/> {result.vote_count}
                </p>
        </div>
        </div>
    )
}

export default Thumbnail
