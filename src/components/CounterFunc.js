import React, { useState } from 'react';
import Input from "./Input";

function CounterFunc() {
    const [counter, setCounter] = useState({
        step: 1,
        value: 0,
    });

    function renewStep(newStep) {
        setCounter({ ...counter, step: newStep });
    }

    return (
        <div>
            <Input value={counter.step} renewValue={renewStep} />
            <button onClick={() => setCounter({ ...counter, value: counter.value - counter.step })}>Decrement</button>
            <span>{counter.value}</span>
            <button onClick={() => setCounter({ ...counter, value: counter.value + counter.step })}>Increment</button>
        </div>
    );
}

export default CounterFunc;
