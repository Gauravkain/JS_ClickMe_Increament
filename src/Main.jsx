import React, { useState } from 'react';

const Main = () => {

    const state = useState();
    const [count, setCount] = useState(0);

    const IncNum = () => {
        setCount(count + 1);
    }

    return(
        <>
        <h1> {count}  </h1>
        <button onClick={IncNum}>gaurav,    Click Me</button>
        </>
    );
};

export default Main;