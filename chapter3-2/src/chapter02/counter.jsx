import {useState} from "react";
const Counter = () => {
    const [count , setCount] = useState(0);
    const increment = () => {
        setCount((prev) => prev + 1);
    }
    return (
        <>
            <h1 style={{fontSize : "3rem"}}> Counter </h1>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
        </>
    )
};
export default Counter;