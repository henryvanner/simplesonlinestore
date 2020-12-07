export type VideoGame = {
    id: string,
    title: string,
    poster: string,
    brand: string,
    store: string,
    weight: number,
    price: number,
    isInCart: boolean
}

export type State = {
    cart: VideoGame[],
    selectedForPreview: string | null
}

export const ADD_TO_CART = 'cart/addItem';
export const REMOVE_FROM_CART = 'cart/removeItem';
export const EMPTY_CART = 'cart/empty';
export const SET_FOR_PREVIEW = 'preview/set';

export type AddToCartAction = {
    type: typeof ADD_TO_CART,
    payload: VideoGame
}

export type RemoveFromCartAction = {
    type: typeof REMOVE_FROM_CART,
    meta: {
        id: string
    }
}

export type EmptyCartAction = {
    type: typeof EMPTY_CART
}

export type SetPreviewAction = {
    type: typeof SET_FOR_PREVIEW,
    meta: {
        id: string
    }
}

export type ActionTypes = AddToCartAction | RemoveFromCartAction | EmptyCartAction | SetPreviewAction;