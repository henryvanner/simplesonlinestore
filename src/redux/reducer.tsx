import { ActionTypes, ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART, SET_FOR_PREVIEW, State } from "./types";

const initialState: State = {
    cart: [],
    selectedForPreview: null
}

export default function appReducer(state = initialState, action: ActionTypes): State {
    switch (action.type) {
        case ADD_TO_CART:
            const videoGame = action.payload;
            const alreadyInCart = state.cart.findIndex(_videoGame => _videoGame.id === videoGame.id) !== -1;
            if (alreadyInCart) return state;
            return {
                ...state,
                cart: state.cart.concat([videoGame])
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(videoGame => videoGame.id !== action.meta.id)
            }
        case EMPTY_CART:
            return {
                ...state,
                cart: []
            }
        case SET_FOR_PREVIEW:
            return {
                ...state,
                selectedForPreview: action.meta.id
            };
        default:
            return state;
    }
}