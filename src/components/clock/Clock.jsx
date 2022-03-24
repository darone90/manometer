import React from 'react';
import ClockHand from './ClockHand';

import '../../style/clock.css';


const Clock = (props) => {
    return (
        <div className='clock'>
            <ClockHand deg={props.deg} />
        </div>
    );
};

export default Clock;