import React from 'react';

const divStyle = {
    display: "flex",
    flexFlow: "column wrap",
    color: "#FFF",
    fontFamily: "Open Sans, sans-serif",
    margin: "8px 0"
};

const labelStyle = {
    flex: "1"
};

const inputStyle = {
    flex: "1",
    border: "none",
    borderRadius: "3px",
    margin: "0.5em",
    padding: "0.5em"
};

const Input = (props) => (
    <div style={divStyle}>
        <label style={labelStyle} htmlFor={props.id}>{props.label}</label>
        <input style={inputStyle} {...props}></input>
    </div>
);

export default Input;