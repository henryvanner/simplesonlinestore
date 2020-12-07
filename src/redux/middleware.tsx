import { gql } from "@apollo/client";
import { Middleware } from "redux"
import cache from "../apollo/cache";
import client from "../apollo/client";
import { GET_VIDEO_GAMES } from "../apollo/queries";
import { VideoGamesData } from "../apollo/types";
import { ActionTypes, ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART, State } from "./types"

type Data = {
    isInCart: boolean
}

const setIsInCart = (id: string, isInCart: boolean) => {
    client.writeQuery<Data>({
        id,
        query: gql`
    {
        isInCart @client
    }
    `,
        data: { isInCart }
    });
};

export const updateIsInCart: Middleware<{}, State> = () => (next) => (action: ActionTypes) => {
    let id;
    switch (action.type) {
        case ADD_TO_CART:
            id = cache.identify(action.payload);
            if (id) {
                setIsInCart(id, true);
            }
            break;
        case REMOVE_FROM_CART:
            id = cache.identify({ __typename: "Game", id: action.meta.id });
            if (id) {
                setIsInCart(id, false);
            }
            break;
        case EMPTY_CART:
            const data = client.readQuery<VideoGamesData>({ query: GET_VIDEO_GAMES });
            if (data) {
                client.writeQuery<VideoGamesData>({
                    query: GET_VIDEO_GAMES,
                    data: {
                        games: data.games.map(game => {
                            if (game.isInCart) {
                                return { ...game, isInCart: false };
                            }
                            return game;
                        })
                    }
                })
            }
            break;
        default:
            break;
    }
    return next(action)
}