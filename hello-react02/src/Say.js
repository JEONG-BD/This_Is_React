import React, {useState} from "react";


const Say = () =>{
    const [message, setMessage] = useState("");
    const onClickEnter = () => setMessage("Hello");
    const onClickLeave = () => setMessage("Good Bye"); 
    
    const[color, setColor] = useState("");

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style = {{color}}>{message}</h1>
            <button style={{color:"red"}} onClick={()=>
                setColor("red")
            }>Red</button>
            <button style={{color:"black"}} onClick={()=>
                setColor("black")
            }>Black</button>
            <button style={{color:"green"}} onClick={()=>
                setColor("green")
            }>Black</button>
        </div>
    );
};


export  default Say;