import { useState } from "react"

export default function Counter(){
    const [value, setValue] = useState(0);
    return(
        <div>
            <h2>Counter App</h2>
            <p>Count: {value}</p>
            <button onClick={()=> setValue((c)=>c+1)}>Increment</button>   
            <button onClick={()=> setValue(()=>0-1)}>Decrement</button>     
       </div>
    )
}