import React from 'react';
import { VideoGame } from '../redux/types';
import ToggleInCartBtn from './ToggleInCartBtn';

interface DetailsCardProps {
    item: VideoGame
}

interface PieceOfDataProps {
    label: string,
    value: string | number
}

const PieceOfData: React.FC<PieceOfDataProps> = ({ label, value }) => {
    return (
        <div>
            <span className="font-weight-bold">{label}:</span>
            <span className="ml-1 font-weight-bold text-success">{value}</span>
        </div>
    );
}

const DetailsCard: React.FC<DetailsCardProps> = ({ item }) => {
    return (
        <div className="card">
            <img src={item.poster} className="card-img-top" alt={item.title} />
            <div className="card-body p-2">
                <p className="card-title mb-2">{item.title}</p>
                <p className="font-weight-bold card-text mb-2">S/ {item.price}</p>
                <PieceOfData label="Marca" value={item.brand} />
                <PieceOfData label="Tienda" value={item.store} />
                <PieceOfData label="Peso con empaque" value={`${item.weight}kg`} />
                <div className="d-flex justify-content-end">
                    <ToggleInCartBtn item={item} />
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;