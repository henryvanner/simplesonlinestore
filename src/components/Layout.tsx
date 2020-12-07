import React from 'react';
import AppBar from './AppBar';
import Grid from './Grid';

const Layout: React.FC = () => {
    return (
        <div className="container-fluid p-0">
            <div className="row justify-content-center m-0 bg-primary">
                <div className="col-md-10 col-lg-8">
                    <AppBar brandName="Play Station" />
                </div>
            </div>
            <div className="row justify-content-center m-0 mb-4">
                <div className="col-md-10 col-lg-8">
                    <Grid />
                </div>
            </div>
        </div>
    );
}

export default Layout;