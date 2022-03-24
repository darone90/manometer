import React from 'react';
import '../../style/clockHand.css';

const ClockHand = (props) => {
    return (
        <div className='clock-hand' style={{ rotate: `${props.deg}deg` }}>
            <div className='clock-hand__dot'></div>
        </div>
    );
};

export default ClockHand;