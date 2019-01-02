import React from 'react';

const divStyle = {
    display: "flex",
    flexFlow: "column wrap",
    color: "#FFF",
    fontFamily: "Open Sans, sans-serif",
    margin: "8px 0"
};

const selectStyle = {
    margin: "0.5em",
    padding: "0.5em"
}

const Select = (props) => (
    <div style={divStyle}>
        <label htmlFor={props.id}>{ props.label }</label>
        <select {...props} style={selectStyle}>
            { 
                props.items.map((item) => (<option label={item.label} value={item.value}></option>)) 
            }
        </select>
    </div>
);

export default Select;