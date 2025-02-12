import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components'
import { useGetArtistDetailsQuery } from '../redux/services/shazamCore';
import { setActiveSong, playPause } from '../redux/features/playerSlice';

const ArtistDetails = () => {

    const { id: artistId } = useParams();
    const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(artistId)
    const { activeSong, isPlaying } = useSelector((state) => state.player)

    

    if(isFetchingArtistDetails) return <Loader title='Loading artist details' />;

    if(error) return <Error/>

    return (
        <div className='flex flex-col'>
            <DetailsHeader artistId={artistId} artistData={artistData} />

            <RelatedSongs data={Object.values(artistData?.songs)} artistId={artistId} isPlaying={isPlaying} activeSong={activeSong}  />
        </div>
    )
};

export default ArtistDetails; 
