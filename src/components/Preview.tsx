import { useQuery } from '@apollo/client';
import React from 'react';
import { useSelector } from 'react-redux';
import { GET_VIDEO_GAME } from '../apollo/queries';
import { VideoGameData, VideoGameVars } from '../apollo/types';
import { State } from '../redux/types';
import DetailsCard from './DetailsCard';
import Loading from './Loading';

interface PreviewProps {
    id: string
}

const Modal: React.FC = ({ children }) => {
    return (
        <div className="modal fade" id="previewModal">
            <div className="modal-dialog modal-dialog-centered modal-sm">
                <div className="modal-content p-0">
                    <div className="modal-body p-0">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Preview: React.FC<PreviewProps> = ({ id }) => {

    const { data, loading } = useQuery<VideoGameData, VideoGameVars>(GET_VIDEO_GAME, { variables: { id } });

    return (
        <Modal>
            {data && <DetailsCard item={data.game} />}
            {loading && <Loading containerClassName="d-inline-block p-2" message="fetching data ..." />}
        </Modal>
    );

}

export default function ResolvePreview() {
    const id = useSelector((state: State) => state.selectedForPreview);
    if (id) return <Preview id={id} />;
    return null;
};