import React from 'react';

const Row = (props) => {

    const rowStyle = {
        margin: '2%',
        padding: '2%',
        borderRadius: '10px',
        border: '3px solid #510159',
        background: '#826486'
    };

    return (
        <div style={rowStyle}>
            {props.children}
        </div>
    )
}

export default Row;