import React, {useState} from 'react';
const StateExampleWithFunction = ()=>{
    let [count, setCount] = useState(0);
    return (
        <div>
            <h1>Functional based Component</h1>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count + 1)}>increase</button>
            <button onClick={()=> setCount(count - 1)}>decrease</button>
        </div>
    );
};
export default StateExampleWithFunction;