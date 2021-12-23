import React from 'react';

function StaticScreen(props) {
    const { name, content, id } = props;
    return (
        <div className="staticScreen">
            <div className="staticScreenTitle">
                <p>{id}</p>
                <p>{name}</p>
            </div>
            <img src={content}/>
            <div className="staticScreenFooter">
                <p>Edit</p>
                <p>Book</p>
            </div>
        </div>
    );
}

export default StaticScreen;
