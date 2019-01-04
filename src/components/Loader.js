import React from 'react';
import loaderImage from '../../resources/images/loader.png';


const imageStyle = {
    position: "absolute",
    filter: "drop-shadow(1px 1px 1px black) drop-shadow(-1px 1px 1px black) drop-shadow(1px -1px 1px black) drop-shadow(-1px -1px 1px black)"
};

const Loader = () => (
    <img class="loader" style={imageStyle} src={loaderImage} width="225" height="175" alt="Loader!!!!"></img>
);

export default Loader;