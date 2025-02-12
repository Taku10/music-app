import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useSelector } from 'react-redux';
import { Error, Loader, ArtistCard} from '../components'
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const TopArtist = () => {
    const [country, setCountry] = useState('');
    const [loading, setLoading] = useState(true);
    const {data, isFetching, error} = useGetTopChartsQuery();

    if (isFetching) return <Loader title='Loading top charts' />
    if( error) return <Error/>
   

    return (
        <div className='flex flex-col'>
            <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>Discover Top Artist</h2>
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {data?.map((track, i)=>(
                    <ArtistCard  key={i} track={track}/>
                ))}
            </div>
        </div>
    )
}

export default TopArtist;
