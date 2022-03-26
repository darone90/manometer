import React from 'react';
import ClockHand from './ClockHand';
import Displayer from './Displayer';

import '../../style/clock.css';


const Clock = (props) => {
    return (
        <div className='clock'>
            <ClockHand deg={props.deg} />
            <Displayer percent={props.deg / 1.8} />
            <div className='clock__screw --first'></div>
            <div className='clock__screw --second'></div>
        </div>
    );
};

export default Clock;