import React from 'react';

const divStyle = {
    display: "block",
    textAlign: "center"
}

const buttomStyle = {
    padding: "0.5em",
    margin: "0.5em",
    color: "#FFF",
    backgroundColor: "#75437A",
    border: '3px solid #510159',
    borderRadius: "10px",
    width: "100px",
    fontFamily: "Open Sans, sans-serif"
}

const Buttom = (props) => (
    <div style={divStyle}>
        <button style={buttomStyle} {...props}>{props.children}</button>
    </div>
);

export default Buttom;