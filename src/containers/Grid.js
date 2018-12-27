import React from 'react';

const Grid = (props) => {

    const boxStyle = {
        margin: '2%',
        padding: '2%',
        borderRadius: '10px',
        border: '3px solid #510159',
        background: '#75437A'
    };

    return (
        <div style={boxStyle}>
            {props.children}
        </div>
    );
};

export default Grid;