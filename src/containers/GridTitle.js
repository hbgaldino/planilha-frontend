import React from 'react';

const GridTitle = (props) => {

    const titleStyle = {
        fontFamily: 'Open Sans, sans-serif',
        textAlign: 'center',
        textShadow: '2px 2px 2px black',
        color: '#FFF',
        marginBottom: '0'
    }

    return (
        <h1 style={titleStyle}>{ props.children }</h1>
    )
};

export default GridTitle;