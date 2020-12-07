import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions';
import { VideoGame } from '../redux/types';

interface ToggleInCartBtnProps {
    item: VideoGame
}

const ToggleInCartBtn: React.FC<ToggleInCartBtnProps> = ({ item }) => {

    const dispatch = useDispatch();

    function handleAddToCart() {
        dispatch(addToCart(item));
    }

    function handleRemoveFromCart() {
        dispatch(removeFromCart(item.id));
    }

    return (item.isInCart ?
        (
            <button
                className="btn btn-danger btn-sm rounded-pill mr-2"
                onClick={handleRemoveFromCart}
            >
                Eliminar
            </button>
        ) :
        (
            <button
                className="btn btn-primary btn-sm rounded-pill mr-2"
                onClick={handleAddToCart}
            >
                Agregar
            </button>
        )
    );
};

export default ToggleInCartBtn;