import React from 'react';

const GridSubTitle = (props) => {

    const subtitleStyle = {
        fontFamily: 'Open Sans, sans-serif',
        textAlign: 'center',
        textShadow: '2px 2px 2px black',
        color: '#FFF',
        margin: '0'
    };


    return (
        <h5 style={subtitleStyle}>{ props.children }</h5>
    );
}

export default GridSubTitle;