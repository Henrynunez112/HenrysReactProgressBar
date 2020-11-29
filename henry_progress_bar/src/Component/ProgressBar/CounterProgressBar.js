import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const CounterReact = () => {
    const [counter, setCounter] = useState(0);
    // const colorOne = '#04395E';
    const colorTwo = '#70A288';



    return (
        <div>
            <ProgressBar bgColor={`${colorTwo}`} completed={counter} />
            { counter < 100 ? 
            <button onClick={() => setCounter(counter + 10)}>
                Click Here
            </button> : <button onClick={() => setCounter(0)}>
                Reset
            </button>
            }
        </div>
    )

}
export default CounterReact;