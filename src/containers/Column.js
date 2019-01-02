import React from 'react';

const columnStyle = {
    display: "flex"

}

const Column = (props) => (
    <div style={columnStyle}>{ props.children }</div>
);

export default Column;