import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'






export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '1bb34e48femsheddcf74e3dd3454p1cb0b7jsn16d5310cca24');

            return headers
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world' }),
        getSongByGenre:builder.query({query:(genre)=>`/charts/genre-world?genre_code=${genre}` }),
        getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
        getSongRelated: builder.query({query: ({songid})=> `/tracks/related?track_id=${songid}`}),
        getArtistDetails: builder.query({query: (artistId)=> `/artists/details?artist_id=${artistId}`}),
        getSongByCountry: builder.query({query: (countryCode)=> `/charts/country?country_code=${countryCode}`}),
        getSongByCountry: builder.query({query: (countryCode)=> `/charts/country?country_code=${countryCode}`}),
        getSongBySearch:builder.query({query: (searchTerm)=> `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`}),
    })
})

export const { useGetTopChartsQuery, useGetSongDetailsQuery, useGetSongRelatedQuery,useGetArtistDetailsQuery, useGetSongByCountryQuery, useGetSongByGenreQuery, useGetSongBySearchQuery } = shazamCoreApi;