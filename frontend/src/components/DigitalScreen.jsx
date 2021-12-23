import React from 'react';
import './DigitalScreen.css'

function DigitalScreen(props) {
    const { name, content, id } = props;
    return (
        <div className="screen">
            <div className="screenTitle">
                <p>{id}</p>
                <p>{name}</p>
            </div>
            <iframe src={content}/>
            <div className="staticScreenFooter">
                <p>Edit</p>
                <p>Book</p>
            </div>
        </div>
    );
}

export default DigitalScreen;
