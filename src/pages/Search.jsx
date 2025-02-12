import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useGetSongBySearchQuery } from '../redux/services/shazamCore';
import { useParams } from 'react-router-dom';
import { Error, Loader, SongCard } from '../components'

const Search = () => {
  const { searchTerm } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongBySearchQuery(searchTerm)

  if (isFetching) return <Loader title='Searching Songs...' />

  if (error) return <Error />

  const songs = data?.tracks?.hits?.map((song)=> song.track);

  return (
    <div className='flex flex-col'>
      <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>Showing results for <span className='font-black'>{searchTerm}</span></h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs?.map((song, i) => (
          <SongCard key={song.key} song={song} isPlaying={isPlaying} activeSong={activeSong} data={data} i={i} />
        ))}
      </div>
    </div>
  )
}

export default Search;
