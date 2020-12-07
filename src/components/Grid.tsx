import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_VIDEO_GAMES } from '../apollo/queries';
import { VideoGamesData, VideoGamesVars } from '../apollo/types';
import Card from './Card';
import Loading from './Loading';

const Grid: React.FC = () => {

    const { data, loading, error } = useQuery<VideoGamesData, VideoGamesVars>(GET_VIDEO_GAMES);

    if (loading) return <Loading containerClassName="d-inline-block p-4" message="fetching data ..." />;
    if (error) return <p>{error.message}</p>;

    if (data) {
        return (
            <div className="row row-cols-4 row-cols-md-4 mt-4">
                {data.games.map((videoGame, i) => <Card key={i} item={videoGame} />)}
            </div>
        );
    }

    return null;
};

export default Grid;