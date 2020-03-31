import React from 'react';
import { images } from '../constants/images';
import {connect} from "react-redux";

const Canvas = ({ steps }) => {
    const hangmanImg = steps !== 0
        ? <img src={images[steps - 1].src} alt="fvd"/> : null;
    return (
        <div className="canvasBox">
            { hangmanImg }
        </div>
    );
};

const mapStateToProps = (state) => ({
    steps: state.steps,
});

export default connect(mapStateToProps)(Canvas);
