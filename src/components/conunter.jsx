import React from 'react';
import { useState} from 'react';
import './counter.css';

const Counter = () => {

    const [count , setCount] = useState(0);

    return (
        <div className='counter'>
            <p id='para'> You have clicked {count} times </p>
            <button id='btn' onClick={() => {setCount(count+1)}}> Click Me</button>
            
        </div>
    )
}


export default Counter;