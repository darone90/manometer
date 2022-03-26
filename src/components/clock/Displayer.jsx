import React from 'react';
import '../../style/displayer.css';


const Displayer = (props) => {
    return (
        <div className='clock-digit'>
            <strong>{Number(props.percent).toFixed(1)}</strong>
        </div>
    );
};

export default Displayer;