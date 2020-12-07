import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, removeFromCart } from '../redux/actions';
import { State, VideoGame } from '../redux/types';

interface ItemProps {
    item: VideoGame,
    onRemoveFromCart: (id: string) => void
}

const Item: React.FC<ItemProps> = ({ item, onRemoveFromCart }) => {

    return (
        <li className="dropdown-item d-flex justify-content-between align-items-center">
            <span className="text-truncate">{item.title}</span>
            <i className="fas fa-times ml-2" role="button" onClick={() => onRemoveFromCart(item.id)} />
        </li>
    );
}

const reducer = (total: number, videoGame: VideoGame) => total + videoGame.price;

const Cart: React.FC = () => {

    const cart = useSelector((state: State) => state.cart);
    const dispatch = useDispatch();
    const total = cart.reduce(reducer, 0);
    const nItems = cart.length;

    function handleEmptyCart() {
        dispatch(emptyCart());
    }

    function handleRemoveFromCart(id: string) {
        dispatch(removeFromCart(id));
    }

    return (
        <div id="cart" className="dropdown">
            <span className="dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="badge badge-light mr-2">{nItems}</span>
                <i style={{ verticalAlign: "middle" }} className="fas fa-shopping-cart text-white" />
            </span>
            <ul style={{ width: 240 }} className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className="dropdown-item d-flex justify-content-end">
                    <button type="button" className="btn btn-link bt-sm p-0" onClick={handleEmptyCart}>Vaciar</button>
                </li>
                <li className="dropdown-item">
                    <span className="font-weight-bold">Carrito</span>
                </li>
                {nItems === 0 && <li className="dropdown-item">
                    Agrega un artículo
                </li>}
                {cart.map((videoGame, i) =>
                    <Item
                        key={i}
                        item={videoGame}
                        onRemoveFromCart={handleRemoveFromCart}
                    />
                )}
                <li className="dropdown-item d-flex justify-content-between mt-4">
                    <span className="font-weight-bold">Total</span>
                    <span>S/ {total}</span>
                </li>
            </ul>
        </div>
    );
}

export default Cart;