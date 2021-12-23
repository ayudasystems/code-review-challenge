import React from 'react';

function DigitalScreen(props) {
    const { name, content } = props;
    return (
        <div>
            {name}
            <iframe src={content} width={500} height={500}/>
        </div>
    );
}

export default DigitalScreen;
