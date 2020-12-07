import { ActionTypes, ADD_TO_CART, VideoGame, REMOVE_FROM_CART, EMPTY_CART, SET_FOR_PREVIEW } from "./types";

export function addToCart(videoGame: VideoGame): ActionTypes {
    return { type: ADD_TO_CART, payload: videoGame };
}

export function removeFromCart(id: string): ActionTypes {
    return { type: REMOVE_FROM_CART, meta: { id } };
}

export function emptyCart(): ActionTypes {
    return { type: EMPTY_CART };
}

export function setForPreview(id: string): ActionTypes {
    return { type: SET_FOR_PREVIEW, meta: { id } };
}