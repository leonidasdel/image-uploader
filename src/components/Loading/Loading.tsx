import React from 'react';
import './Loading.scss'

interface Props {
    title: string;
}

const Loading = ({title}: Props) => {
    return (
        <div className='loading_container'>
            <h1 className='loading_container_title'>{title}</h1>
            <div className='loading_container_spinner'>
                <div className='loading_container_spinner_rectangle'>

                </div>
            </div>
        </div>
    )
}

export default Loading;