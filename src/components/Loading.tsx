import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const LoadingIcon = styled.i`
    animation: ${rotate} 0.8s linear infinite;
`;

interface LoadingProps {
    message?: string,
    containerClassName?: string
}

const Loading: React.FC<LoadingProps> = ({ message, containerClassName }) => {
    return (
        <div className={containerClassName}>
            <LoadingIcon className="fas fa-sync-alt" />
            { message && <span className="ml-2">{message}</span>}
        </div>
    );
};

export default Loading;