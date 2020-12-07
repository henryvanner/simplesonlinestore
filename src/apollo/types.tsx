import { VideoGame } from '../redux/types';

export type VideoGamesData = {
    games: VideoGame[]
};

export type VideoGamesVars = {};

export type VideoGameData = {
    game: VideoGame
};

export type VideoGameVars = {
    id: string
};