import React from 'react';
import Cart from './Cart';

interface Props {
    brandName: string
}

const AppBar: React.FC<Props> = ({ brandName }) => {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <a className="navbar-brand">{brandName}</a>
            <Cart />
        </nav>
    );
};

export default AppBar;