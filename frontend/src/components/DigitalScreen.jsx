import React from 'react';
import './DigitalScreen.css'

function DigitalScreen(props) {
    const { name, content } = props;
    return (
        <div className="screen">
            <p>{name}</p>
            <iframe src={content} width={500} height={500}/>
        </div>
    );
}

export default DigitalScreen;
