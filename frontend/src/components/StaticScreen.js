import React from 'react';

function StaticScreen(props) {
    const { name, content } = props;
    return (
        <div>
            {name}
            <img src={content}/>
        </div>
    );
}

export default StaticScreen;
