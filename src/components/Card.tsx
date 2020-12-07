import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setForPreview } from '../redux/actions';
import { VideoGame } from '../redux/types';
import ToggleInCartBtn from './ToggleInCartBtn';

interface Props {
    item: VideoGame
};

const Button = styled.button.attrs(props => ({
    className: `btn ${props.className} btn-sm rounded-pill`
}))``;

const Card: React.FC<Props> = ({ item }) => {

    const dispatch = useDispatch();

    function handleSetForPreview() {
        dispatch(setForPreview(item.id));
    }

    return (
        <div className="col mb-4 text d-flex justify-content-center">
            <div className="card border-0" style={{ maxWidth: 180 }}>
                <img src={item.poster} className="card-img-top" alt={item.title} role="button" />
                <div className="card-body p-0 pt-2">
                    <p className="card-title mb-2">{item.title}</p>
                    <p className="font-weight-bold card-text mb-2">S/ {item.price}</p>
                    <ToggleInCartBtn item={item} />
                    <Button
                        data-toggle="modal"
                        data-target="#previewModal"
                        className="btn-link p-0"
                        onClick={handleSetForPreview}
                    >
                        Vista previa
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Card;