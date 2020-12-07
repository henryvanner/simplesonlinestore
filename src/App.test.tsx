import appReducer from "./redux/reducer";
import { ActionTypes, ADD_TO_CART, EMPTY_CART, VideoGame, REMOVE_FROM_CART, State, SET_FOR_PREVIEW } from "./redux/types";

const sampleMovies: VideoGame[] = [{
    "id": "1",
    "title": "Mortal KOMBAT 11 Ultimate - PlayStation 4",
    "poster": "https://tiendamia.com/pe/producto?amz=B08L6FZM6D&pName=Mortal-KOMBAT-11-Ultimate-PlayStation-4",
    "price": 229,
    "brand": "WB Games en Perú",
    "store": "amazon",
    "weight": 0.225,
    "isInCart": false
},
{
    "id": "2",
    "title": "Hitman 3 - PlayStation 4 Standard Edition",
    "poster": "https://tiendamia.com/pe/producto?amz=B08MG7QWN7&pName=Hitman-3-PlayStation-4-Standard-Edition",
    "price": 229,
    "brand": "IO Interactive A/S en Perú",
    "store": "amazon",
    "weight": 0.225,
    "isInCart": false
}];

test('Add item to cart', () => {
    const initialState: State = {
        cart: [],
        selectedForPreview: null
    };
    const action: ActionTypes = {
        type: ADD_TO_CART, payload: sampleMovies[0]
    };
    const result = appReducer(initialState, action);
    expect(result.cart.length).toBe(1);
});

test("Try to add already added item", () => {
    const initalState: State = {
        cart: sampleMovies,
        selectedForPreview: null
    };
    const action: ActionTypes = {
        type: ADD_TO_CART,
        payload: sampleMovies[0]
    };
    const result = appReducer(initalState, action);
    expect(result.cart.length).toBe(2);
});

test('Remove item from cart', () => {
    const initalState: State = {
        cart: sampleMovies,
        selectedForPreview: null
    };
    const action: ActionTypes = {
        type: REMOVE_FROM_CART, meta: { id: "1" }
    };
    const result = appReducer(initalState, action);
    expect(result.cart.length).toBe(1);
});

test('Empty cart', () => {
    const initalState: State = {
        cart: sampleMovies,
        selectedForPreview: null
    };
    const action: ActionTypes = {
        type: EMPTY_CART
    };
    const result = appReducer(initalState, action);
    expect(result.cart.length).toBe(0);
});

test('Set item for preview', () => {
    const action: ActionTypes = {
        type: SET_FOR_PREVIEW,
        meta: {
            id: "1"
        }
    };
    const result = appReducer(undefined, action);
    expect(result.selectedForPreview).toBe("1")
});